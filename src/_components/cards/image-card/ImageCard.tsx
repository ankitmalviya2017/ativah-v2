import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface ImageCardProps {
  title: string;
  image: string;
  link?: string;
  description?: string;
  className?: string;
}

export const ImageCard = ({
  title,
  image,
  link = "#",
  description,
  className,
}: ImageCardProps) => {
  return (
    <Link
      href={link}
      className={clsx(
        "group block relative w-full h-full overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
        <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-widest transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
        {description && (
          <p className="text-white/80 mt-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};
