import { Elysia, t } from 'elysia';
import { db } from '../db';
import { bookings } from '../db/schema';

export const app = new Elysia({ prefix: '/api' })
  .post(
    '/bookings',
    async ({ body, set }) => {
      try {
        const [inserted] = await db
          .insert(bookings)
          .values({
            name: body.name,
            email: body.email,
            message: body.message,
          })
          .returning();

        set.status = 201;
        return {
          success: true,
          data: inserted,
          message: 'Booking request sent successfully!',
        };
      } catch (error) {
        console.error('Error inserting booking:', error);
        set.status = 500;
        return {
          success: false,
          data: null,
          message: 'Failed to submit booking request. Please try again.',
        };
      }
    },
    {
      body: t.Object({
        name: t.String({ minLength: 2, error: 'Name must be at least 2 characters.' }),
        email: t.String({ format: 'email', error: 'Please provide a valid email address.' }),
        message: t.String({ minLength: 5, error: 'Message must be at least 5 characters.' }),
      }),
    }
  );

export type App = typeof app;
