import { Product } from "@/types/product";
import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center border border-gray-100 rounded-lg">
        <span className="text-gray-400 mb-2">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            ></path>
          </svg>
        </span>
        <h3 className="text-xl font-bold text-gray-800">
          No matching items found
        </h3>
        <p className="text-gray-500 mt-2">
          Try removing some filters to see more results
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product} />
        </React.Fragment>
      ))}
    </div>
  );
};
