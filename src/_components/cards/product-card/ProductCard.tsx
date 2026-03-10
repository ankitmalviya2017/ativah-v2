import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  hoverImage?: string;
  price: string | number;
  link?: string;
  badge?: string;
}

export const ProductCard = ({
  title,
  image,
  hoverImage,
  price,
  link = "#",
  badge,
}: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col h-full bg-white transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 rounded-lg mb-4">
        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 z-10 bg-black text-white px-2 py-1 text-xs font-bold uppercase tracking-wider">
            {badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/70 backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-red-500">
          <Heart size={16} />
        </button>

        <Link href={link} className="block w-full h-full relative">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-opacity duration-500 ${hoverImage ? "group-hover:opacity-0" : ""}`}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
          {hoverImage && (
            <Image
              src={hoverImage}
              alt={`${title} hover`}
              fill
              className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
          )}
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 px-1">
        <Link href={link} className="flex-1">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 truncate mb-1 line-clamp-2 white-space-normal">
            {title}
          </h3>
        </Link>
        <div className="mt-auto">
          <p className="text-sm text-gray-700 font-bold tracking-tight">
            ${typeof price === "number" ? price.toFixed(2) : price}
          </p>
        </div>
      </div>
    </div>
  );
};
