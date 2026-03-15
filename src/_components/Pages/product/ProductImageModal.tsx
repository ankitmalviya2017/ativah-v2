"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductImageModalProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductImageModal = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ProductImageModalProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ display: "none" });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(initialIndex);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${images[activeIndex]})`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-300 animate-in fade-in">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-60 bg-white/10 p-2 rounded-full backdrop-blur-md"
      >
        <X size={28} />
      </button>

      <div className="flex w-full h-full max-w-[1440px] p-4 md:p-10 gap-6 relative">
        {/* Left Thumbnails */}
        <div className="hidden md:flex flex-col gap-3 w-20 overflow-y-auto scrollbar-hide py-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative w-full aspect-3/4 shrink-0 border-2 transition-all duration-200 rounded-md overflow-hidden",
                activeIndex === idx ? "border-white scale-105 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Main Image Area */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden group">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-55 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full h-full max-h-[85vh] aspect-3/4">
              <Image
                src={images[activeIndex]}
                alt="Product image"
                fill
                className="object-contain"
                priority
              />
              {/* Zoom Overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                  ...zoomStyle,
                  backgroundSize: "250%",
                  backgroundRepeat: "no-repeat",
                  zIndex: 51,
                }}
              />
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-55 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};
