import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  link?: string;
}

export const CategoryCard = ({
  title,
  image,
  link = "#",
}: CategoryCardProps) => {
  return (
    <Link
      href={link}
      className="group flex flex-col items-center cursor-pointer block"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md bg-gray-100 mb-4 transition-transform duration-300">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      </div>
      <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-900 group-hover:text-black transition-colors">
        {title}
      </h3>
    </Link>
  );
};
