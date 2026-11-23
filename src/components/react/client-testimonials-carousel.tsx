"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company: string;
  logo?: string;
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
    initials: "NV",
  },
  {
    quote:
      "Avec Moontajska, Boku a réalisé une série de publicités décalées et amusantes qui ont marqué les médias sociaux français.",
    author: "William Montagu",
    role: "CEO",
    company: "Boku",
    logo: "/logos/boku.png",
    initials: "WM",
  },
  {
    quote:
      "Krishna a fait preuve d'une créativité et d'une initiative exceptionnelles en concevant 5 vidéos drôles, de l'écriture à la réalisation, attirant avec succès un large public en ligne.",
    author: "Vera Mihailovich-Dickman",
    role: "Professeur",
    company: "Université Paris-Saclay",
    logo: "/logos/universite-paris-saclay.png",
    initials: "VM",
  },
  {
    quote:
      "Krish a fait des publicités très créatives pour des lunettes de soleil Saolar avec un budget limité.",
    author: "Laurent Rivière",
    role: "CEO",
    company: "Saolar",
    logo: "/logos/saolar.png",
    initials: "LR",
  },
  {
    quote:
      "La vidéo de Krishna sur iRabbit était si convaincante qu'elle a influencé ma décision d'acheter la société.",
    author: "Dan Smith",
    role: "CEO",
    company: "Multilangues",
    logo: "/logos/multilangues.png",
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
    initials: "AG",
  },
  {
    quote:
      "Krishna crée des contenus de marque originaux et décalés que nous aimons tous regarder et revoir.",
    author: "Tanguy Delacourt",
    role: "CEO",
    company: "Caats",
    logo: "/logos/caats.png",
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
        <CarouselContent className="-ml-2 md:-ml-3 py-2 items-stretch">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={`${item.author}-${index}`}
              className="pl-2 md:pl-3 basis-full sm:basis-1/2 lg:basis-1/3 flex shrink-0"
            >
              <div className="flex flex-col justify-between w-full p-6 rounded-2xl bg-white border border-border/80 shadow-xs hover:border-black/30 hover:shadow-md transition-all duration-300 text-left">
                <div className="space-y-4">
                  {/* Brand Logo / Brand Text */}
                  <div className="flex items-center min-h-[30px]">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        loading="lazy"
                        className="h-6 max-w-28 object-contain object-left select-none pointer-events-none"
                      />
                    ) : (
                      <span className="text-lg font-black tracking-tight text-black uppercase">
                        {item.company}
                      </span>
                    )}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm sm:text-sm text-foreground font-normal leading-relaxed text-justify">
                    {item.quote}
                  </p>
                </div>

                {/* Author & Role */}
                <div className="pt-4 mt-auto">
                  <div className="text-sm font-semibold text-foreground">
                    {item.author}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mt-0.5">
                    {item.role}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Side arrow buttons perfectly centered vertically on cards */}
        <CarouselPrevious className="flex -left-4 md:-left-5 lg:-left-6 !top-1/2 -translate-y-1/2 inset-y-auto bg-background/95 backdrop-blur-xs border-border shadow-md hover:bg-muted size-9" />
        <CarouselNext className="flex -right-4 md:-right-5 lg:-right-6 !top-1/2 -translate-y-1/2 inset-y-auto bg-background/95 backdrop-blur-xs border-border shadow-md hover:bg-muted size-9" />
      </Carousel>

          {/* Carousel Pagination Dots */}
          {count > 1 && (
            <div className="flex justify-center items-center gap-1.5 pt-6">
              {Array.from({ length: count }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => api?.scrollTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    current === idx
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
  );
}
