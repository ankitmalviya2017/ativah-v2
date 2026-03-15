"use client";

import { Product } from "@/types/product";
import React, { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Loader2 } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products: initialProducts }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Update products when initialProducts change (e.g. on filter change)
  useEffect(() => {
    setProducts(initialProducts);
    setPage(1);
    setHasMore(true);
  }, [initialProducts]);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    // Simulate API delay for more products
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, you'd fetch from API here
    // For demo, we'll just add some mock products if we haven't reached a limit
    if (page < 3) {
      const nextProducts: Product[] = initialProducts.map(p => ({
        ...p,
        id: `${p.id}-page-${page + 1}`,
        name: `${p.name} (More)`
      }));
      setProducts(prev => [...prev, ...nextProducts]);
      setPage(prev => prev + 1);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  const { targetRef } = useIntersectionObserver({
    onIntersect: loadMore,
    enabled: hasMore && !loading,
  });

  if (products.length === 0 && !loading) {
    return (
      <div className="w-full py-24 flex flex-col items-center justify-center border border-gray-100 rounded-xl bg-gray-50/50">
        <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900">No matching items found</h3>
        <p className="text-gray-500 text-sm mt-1">Try adjusting your filters to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 gap-y-8 md:gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Infinite Loader Trigger */}
      <div ref={targetRef} className="w-full py-12 flex justify-center items-center">
        {loading && (
          <div className="flex items-center space-x-2 text-orange-500">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-sm font-bold uppercase tracking-widest">Loading more...</span>
          </div>
        )}
        {!hasMore && products.length > 0 && (
          <div className="text-gray-400 text-xs font-medium uppercase tracking-[0.2em]">
            You've reached the end
          </div>
        )}
      </div>
    </div>
  );
};
