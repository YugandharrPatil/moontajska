"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
	quote: string;
	author: string;
	role?: string;
	company: string;
	logo?: string;
	logoClass?: string;
	initials?: string;
}

const testimonials: Testimonial[] = [
	{
		quote:
			"Krishna fait des promesses qu’il tient. Notre première vidéo est devenue virale, comme prévu.",
		author: "Nicolas Vanhove",
		role: "Founder",
		company: "Tutoroo",
		logo: "/logos/tutoroo.png",
		logoClass: "h-[24px]",
		initials: "NV",
	},
	{
		quote:
			"Avec Moontajska, Boku a réalisé une série de publicités décalées et amusantes qui ont marqué les médias sociaux français.",
		author: "William Montagu",
		role: "CEO",
		company: "Boku",
		logo: "/logos/boku.png",
		logoClass: "h-[15px]",
		initials: "WM",
	},
	{
		quote:
			"Krishna a fait preuve d'une créativité et d'une initiative exceptionnelles en concevant 5 vidéos drôles, de l'écriture à la réalisation, attirant avec succès un large public en ligne.",
		author: "Vera Mihailovich-Dickman",
		role: "Professeur",
		company: "Université Paris-Saclay",
		logo: "/logos/universite-paris-saclay.png",
		logoClass: "h-[28px]",
		initials: "VM",
	},
	{
		quote:
			"Krish a fait des publicités très créatives pour des lunettes de soleil Saolar avec un budget limité.",
		author: "Laurent Rivière",
		role: "CEO",
		company: "Saolar",
		logo: "/logos/saolar.png",
		logoClass: "h-[17px]",
		initials: "LR",
	},
	{
		quote:
			"La vidéo de Krishna sur iRabbit était si convaincante qu'elle a influencé ma décision d'acheter la société.",
		author: "Dan Smith",
		role: "CEO",
		company: "Multilangues",
		logo: "/logos/multilangues.png",
		logoClass: "h-[21px]",
		initials: "DS",
	},
	{
		quote:
			"Les vidéos de Krishna ont été très efficaces, très appréciées et nous ont permis d'augmenter notre clientèle.",
		author: "Gianni Guindani",
		role: "CEO",
		company: "Redondesco",
		initials: "GG",
	},
	{
		quote:
			"Les publicités réalisées à l'occasion des élections législatives françaises ont été parmi nos meilleures réalisations.",
		author: "Aymeric Grange",
		role: "CEO",
		company: "900.care",
		logo: "/logos/900.png",
		logoClass: "h-[26px]",
		initials: "AG",
	},
	{
		quote:
			"Krishna crée des contenus de marque originaux et décalés que nous aimons tous regarder et revoir.",
		author: "Tanguy Delacourt",
		role: "CEO",
		company: "Caats",
		logo: "/logos/caats.png",
		logoClass: "h-[17px]",
		initials: "TD",
	},
];

export default function ClientTestimonialsCarousel() {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) return;

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		const onSelect = () => {
			setCurrent(api.selectedScrollSnap());
		};

		api.on("select", onSelect);
		api.on("reInit", onSelect);

		return () => {
			api.off("select", onSelect);
		};
	}, [api]);

	return (
		<div className="relative px-0 sm:px-1 md:px-0">
			<Carousel
				opts={{
					align: "start",
					loop: true,
					slidesToScroll: 1,
				}}
				setApi={setApi}
				className="w-full"
			>
				<CarouselContent className="-ml-2 items-stretch py-2 md:-ml-3">
					{testimonials.map((item, index) => (
						<CarouselItem
							key={`${item.author}-${index}`}
							className="flex shrink-0 basis-full pl-2 sm:basis-1/2 md:pl-3 lg:basis-1/3"
						>
							<div className="border-border/80 flex w-full flex-col justify-between rounded-2xl border bg-white p-6 text-left shadow-xs transition-all duration-300 hover:border-black/30 hover:shadow-md">
								<div className="space-y-4">
									{/* Brand Logo / Brand Text */}
									<div className="flex min-h-[28px] items-center">
										{item.logo ? (
											<img
												src={item.logo}
												alt={`${item.company} logo`}
												loading="lazy"
												className={cn(
													"pointer-events-none h-5 w-auto object-contain object-left select-none",
													item.logoClass,
												)}
											/>
										) : (
											<span className="text-base font-black tracking-tight text-black uppercase">
												{item.company}
											</span>
										)}
									</div>

									{/* Testimonial Quote */}
									<p className="text-foreground text-justify text-sm leading-relaxed font-normal sm:text-sm">
										{item.quote}
									</p>
								</div>

								{/* Author & Role */}
								<div className="mt-auto pt-4">
									<div className="text-foreground text-sm font-semibold">
										{item.author}
									</div>
									<div className="text-muted-foreground mt-0.5 text-sm font-medium">
										{item.role}
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Side arrow buttons perfectly centered vertically on cards */}
				<CarouselPrevious className="bg-background/95 border-border hover:bg-muted inset-y-auto !top-1/2 -left-4 flex size-9 -translate-y-1/2 shadow-md backdrop-blur-xs md:-left-5 lg:-left-6" />
				<CarouselNext className="bg-background/95 border-border hover:bg-muted inset-y-auto !top-1/2 -right-4 flex size-9 -translate-y-1/2 shadow-md backdrop-blur-xs md:-right-5 lg:-right-6" />
			</Carousel>

			{/* Carousel Pagination Dots */}
			{count > 1 && (
				<div className="flex items-center justify-center gap-1.5 pt-6">
					{Array.from({ length: count }).map((_, idx) => (
						<button
							key={idx}
							type="button"
							onClick={() => api?.scrollTo(idx)}
							className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
								current === idx
									? "bg-primary w-6"
									: "bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2"
							}`}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
