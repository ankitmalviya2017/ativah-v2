"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "../../../slider/Slider";
import { NavigationArrows } from "../../../slider/SliderArrows";
import { SectionContainer } from "../../../section-container/SectionContainer";
import { Button } from "../../../ui/button";

const saleSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    title: "End of Season Sale",
    subtitle: "Up to 50% Off",
    description: "Last chance to grab your favorite styles at unbeatable prices.",
    ctaText: "Shop the Sale",
    ctaLink: "/sale",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80",
    title: "Flash Deal: Accessories",
    subtitle: "Limited Time Only",
    description: "Elevate your look with premium accessories now at 30% off.",
    ctaText: "Explore Now",
    ctaLink: "/category/accessories",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80",
    title: "New Year Refresh",
    subtitle: "Starting from $29",
    description: "Essential basics for your 2026 wardrobe refresh.",
    ctaText: "Discover More",
    ctaLink: "/products/basics",
  },
];

export const SaleBanner = () => {
  return (
    <div className="w-full">
      <SectionContainer className="!py-0">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group rounded-2xl shadow-2xl">
          <Slider
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full [&_.swiper-pagination-bullet]:bg-white! [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination-bullet-active]:w-6! [&_.swiper-pagination-bullet-active]:rounded-sm!"
            slideClassName="h-full"
            navigation={true}
            pagination={{ clickable: true }}
            customNavigation={<NavigationArrows />}
          >
            {saleSlides.map((slide) => (
              <div key={slide.id} className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                  <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-1000">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-primary rounded-full">
                      {slide.subtitle}
                    </span>
                    <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h2>
                    <p className="mb-8 text-lg text-white/80 md:text-xl md:max-w-md">
                      {slide.description}
                    </p>
                    <div className="flex gap-4">
                      <Button asChild size="lg" className="px-10 font-bold uppercase tracking-widest">
                        <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </SectionContainer>
    </div>
  );
};
