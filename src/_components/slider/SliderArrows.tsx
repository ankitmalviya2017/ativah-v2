"use client";

import React from "react";
import { useSwiper } from "swiper/react";

interface ArrowProps {
  direction: "left" | "right";
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export const SliderArrow: React.FC<ArrowProps> = ({
  direction,
  className = "",
  iconClassName = "",
  onClick,
}) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      if (direction === "left") {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full border border-white/20 group ${className}`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
    >
      {direction === "left" ? (
        <svg
          className={`w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 ${iconClassName}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          className={`w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 ${iconClassName}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
};

interface NavigationArrowsProps {
  leftClassName?: string;
  rightClassName?: string;
  iconClassName?: string;
  showOnHover?: boolean;
}

export const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  leftClassName = "",
  rightClassName = "",
  iconClassName = "",
  showOnHover = true,
}) => {
  return (
    <>
      <SliderArrow
        direction="left"
        className={`left-4 top-1/2 -translate-y-1/2 ${showOnHover ? "opacity-0 group-hover:opacity-100" : ""} ${leftClassName}`}
        iconClassName={iconClassName}
      />
      <SliderArrow
        direction="right"
        className={`right-4 top-1/2 -translate-y-1/2 ${showOnHover ? "opacity-0 group-hover:opacity-100" : ""} ${rightClassName}`}
        iconClassName={iconClassName}
      />
    </>
  );
};
