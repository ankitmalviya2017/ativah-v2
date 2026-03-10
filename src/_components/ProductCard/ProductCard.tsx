import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/p/${product.slug}`}
      className="group flex flex-col cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 rounded-md">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={false}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-black text-white px-3 py-1 font-semibold text-xs tracking-wider uppercase">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="pt-3 flex flex-col space-y-1">
        <h3 className="font-bold text-gray-900 text-sm">{product.brand}</h3>
        <p className="text-gray-500 text-sm truncate font-medium">
          {product.name}
        </p>

        <div className="flex items-center space-x-2 text-sm mt-1">
          <span className="font-bold text-gray-900">
            {product.currency} {product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <>
              <span className="text-gray-400 line-through text-xs">
                {product.currency} {product.originalPrice}
              </span>
              <span className="text-orange-500 text-xs font-semibold">
                (
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100,
                )}
                % OFF)
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
