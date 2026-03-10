"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface SliderBreakpoint {
  slidesPerView: number;
  spaceBetween: number;
}

interface ProductSliderProps {
  children: React.ReactNode[];
  breakpoints?: Record<number, SliderBreakpoint>;
  navigation?: boolean;
  pagination?: boolean | { clickable: boolean };
  autoplay?: boolean | { delay: number; disableOnInteraction: boolean };
  loop?: boolean;
  className?: string;
  slideClassName?: string;
  spaceBetween?: number;
  slidesPerView?: number | "auto";
}

export const Slider = ({
  children,
  breakpoints,
  navigation = true,
  pagination = true,
  autoplay = false,
  loop = false,
  className = "",
  slideClassName = "",
  spaceBetween = 20,
  slidesPerView = 1,
}: ProductSliderProps) => {
  return (
    <div className={`w-full relative ${className}`}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        navigation={navigation}
        pagination={pagination}
        autoplay={autoplay}
        loop={loop}
        className="mySwiper w-full h-full pb-12"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className={`h-auto ${slideClassName}`}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
