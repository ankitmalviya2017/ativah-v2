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
  customNavigation?: React.ReactNode;
}

export const Slider = ({
  children,
  breakpoints,
  navigation = false,
  pagination = false,
  autoplay = false,
  loop = false,
  className = "",
  slideClassName = "",
  spaceBetween = 20,
  slidesPerView = 1,
  customNavigation,
}: ProductSliderProps) => {
  return (
    <div className={`w-full relative ${className}`}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        navigation={customNavigation ? false : navigation}
        pagination={pagination}
        autoplay={autoplay}
        loop={loop}
        className="mySwiper w-full h-full relative"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className={`h-auto ${slideClassName}`}>
            {child}
          </SwiperSlide>
        ))}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pointer-events-auto">
            {customNavigation}
          </div>
        </div>
      </Swiper>
    </div>
  );
};
