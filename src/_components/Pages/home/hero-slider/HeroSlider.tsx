"use client";

import Image from "next/image";
import Link from "next/link";
import { Slider } from "../../../slider/Slider";
import { NavigationArrows } from "../../../slider/SliderArrows";

const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80",
    title: "Summer Collection 2026",
    subtitle: "New Arrivals",
    ctaText: "Shop Now",
    ctaLink: "/products/summer",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    title: "Urban Utility",
    subtitle: "Elevate Your Streetwear",
    ctaText: "Explore Collection",
    ctaLink: "/products/urban",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&q=80",
    title: "Essential Basics",
    subtitle: "Everyday Comfort",
    ctaText: "Discover More",
    ctaLink: "/products/basics",
  },
];

export const HeroSlider = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden group">
      <Slider
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full [&_.swiper-pagination-bullet]:bg-white! [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination-bullet-active]:w-6! [&_.swiper-pagination-bullet-active]:rounded-sm!"
        slideClassName="h-full"
        navigation={true}
        pagination={{ clickable: true }}
        customNavigation={<NavigationArrows />}
      >
        {heroSlides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={slide.id === 1}
                sizes="100vw"
              />
              {/* Overlay gradient for readability */}
              <div className="absolute inset-0 bg-black/30 bg-linear-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
              <span className="text-white/90 text-sm md:text-lg font-bold uppercase tracking-[0.3em] mb-4">
                {slide.subtitle}
              </span>
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 max-w-5xl leading-none">
                {slide.title}
              </h1>
              <Link
                href={slide.ctaLink}
                className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
