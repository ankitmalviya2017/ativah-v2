import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heart, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col bg-white overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
      <Link href={`/p/${product.slug}`} className="relative w-full aspect-3/4 overflow-hidden bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={false}
        />
        
        {/* Rating Badge */}
        {product.rating && (
          <div className="absolute left-2 bottom-3 flex items-center bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-gray-800 shadow-sm z-10">
            {product.rating} <Star className="w-2.5 h-2.5 ml-0.5 fill-green-600 text-green-600" />
            <span className="mx-1 text-gray-400 font-normal">|</span>
            <span className="text-gray-500">{product.reviewsCount || 0}</span>
          </div>
        )}

        {/* Wishlist Icon */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white z-20">
          <Heart className="w-4 h-4 text-gray-700" />
        </button>

        {!product.inStock && (
          <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[1px] flex items-center justify-center z-30">
            <span className="bg-gray-900 text-white px-3 py-1 font-bold text-[10px] tracking-widest uppercase">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      <div className="p-3 flex flex-col">
        <div className="flex justify-between items-start mb-0.5">
          <h3 className="font-bold text-gray-900 text-sm tracking-tight truncate flex-1 uppercase">
            {product.brand}
          </h3>
        </div>
        
        <p className="text-gray-500 text-xs truncate mb-2 group-hover:text-gray-700 transition-colors">
          {product.name}
        </p>

        <div className="flex items-center space-x-1.5 mt-auto">
          <span className="font-bold text-gray-900 text-sm">
            ₹{product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <>
              <span className="text-gray-400 line-through text-[10px]">
                ₹{product.originalPrice}
              </span>
              <span className="text-orange-500 text-[10px] font-bold">
                ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
