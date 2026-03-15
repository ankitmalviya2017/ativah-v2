"use client";

import { useState } from "react";
import Image from "next/image";
import { Breadcrumbs } from "@/_components/Breadcrumbs/Breadcrumbs";
import { ProductImageModal } from "./ProductImageModal";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openModal = (index: number) => {
    setInitialImageIndex(index);
    setIsModalOpen(true);
  };

  const segments = ["shop", product.gender, product.category, product.brand];

  return (
    <div className="max-w-[1440px] px-4 md:px-8 mx-auto py-8">
      <Breadcrumbs segments={segments} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
        {/* Left Side: Image Grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-3/4 bg-gray-50 overflow-hidden cursor-zoom-in group border border-gray-100 rounded-sm"
                onClick={() => openModal(idx)}
              >
                <Image
                  src={img}
                  alt={`${product.name} - ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
                  priority={idx < 2}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="border-b border-gray-100 pb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {product.brand}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mt-1 font-medium">
              {product.name}
            </p>
          </div>

          <div className="flex items-center space-x-4 border-b border-gray-100 pb-6">
            <span className="text-2xl font-bold text-gray-950">
              {product.currency} {product.price}
            </span>
            {product.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="text-lg text-gray-400 line-through">
                  {product.currency} {product.originalPrice}
                </span>
                <span className="text-orange-500 font-bold text-lg">
                  ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
                </span>
              </div>
            )}
          </div>

          <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="min-w-14 h-14 border-2 border-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-800 hover:border-black hover:bg-gray-50 transition-all uppercase"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  className="flex-1 bg-black hover:bg-neutral-800 text-white font-bold py-4 px-8 rounded-md tracking-wider transition-all uppercase disabled:bg-gray-300 flex items-center justify-center gap-2 text-lg"
                  disabled={!product.inStock}
                >
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 8H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2zM5 10h14v10H5V10zM12 4a2 2 0 00-2 2h4a2 2 0 00-2-2z" />
                  </svg>
                  {product.inStock ? "Add to Bag" : "Out of Stock"}
                </button>
                <button
                  type="button"
                  className="flex-1 border-2 border-gray-200 hover:border-gray-400 text-gray-900 font-bold py-4 px-8 rounded-md tracking-wider transition-all uppercase flex items-center justify-center gap-2 text-lg"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Wishlist
                </button>
              </div>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <h3 className="uppercase tracking-widest font-bold text-gray-900 text-sm mb-4">
              Product Details
            </h3>
            <p className="text-gray-600 leading-relaxed font-normal whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <ProductImageModal
        images={product.images}
        initialIndex={initialImageIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
