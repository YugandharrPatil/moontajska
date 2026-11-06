import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api } from '@/lib/api';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(5, 'Tell us a bit more about your project (at least 5 characters).'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookUsForm() {
  const [serverStatus, setServerStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setServerStatus({ type: null, message: '' });

    try {
      // Calling Elysia endpoint via Eden Treaty
      const { data: responseData, error } = await api.api.bookings.post({
        name: data.name,
        email: data.email,
        message: data.message,
      });

      if (error) {
        setServerStatus({
          type: 'error',
          message:
            typeof error.value === 'string'
              ? error.value
              : (error.value as any)?.message || 'Something went wrong. Please try again.',
        });
        return;
      }

      if (responseData?.success) {
        setServerStatus({
          type: 'success',
          message: 'Thank you! Your message has been received. We will get back to you shortly.',
        });
        reset();
      } else {
        setServerStatus({
          type: 'error',
          message: responseData?.message || 'Could not save your request.',
        });
      }
    } catch (err: any) {
      setServerStatus({
        type: 'error',
        message: err?.message || 'Network error occurred. Please try again.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      {serverStatus.type === 'success' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />
          <p className="text-sm font-medium">{serverStatus.message}</p>
        </div>
      )}

      {serverStatus.type === 'error' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 text-destructive border border-destructive/20">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">{serverStatus.message}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Your Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Jane Doe"
          className="h-12 bg-muted/30 border-input rounded-lg focus-visible:ring-black"
          {...register('name')}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-xs text-destructive font-medium">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Your Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@example.com"
          className="h-12 bg-muted/30 border-input rounded-lg focus-visible:ring-black"
          {...register('email')}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-xs text-destructive font-medium">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Project Details
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, timeline, and vision..."
          className="bg-muted/30 border-input rounded-lg focus-visible:ring-black resize-y"
          {...register('message')}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-xs text-destructive font-medium">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="self-start px-8 py-6 bg-primary text-primary-foreground rounded-full text-base font-medium tracking-wide hover:opacity-90 transition-opacity cursor-pointer disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
