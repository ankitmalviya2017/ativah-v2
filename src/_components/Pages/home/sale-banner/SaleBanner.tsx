import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "../../../section-container/SectionContainer";

export const SaleBanner = () => {
  return (
    <div className="w-full">
      <SectionContainer className="!py-0">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1485230895905-ef25441ec963?w=1600&q=80"
            alt="End of Season Sale"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 w-full h-full">
            <span className="text-white text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-4">
              End of Season
            </span>
            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6">
              Last chance
              <br />
              Last few sizes left
            </h2>
            <Link
              href="/sale"
              className="mt-4 bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Shop the Sale
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
