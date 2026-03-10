"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api/products";
import { ProductCard } from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Skeleton } from "@/_components/ui/skeleton";

export function ProductList({ initialCategory }: { initialCategory?: string }) {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["products", initialCategory],
      queryFn: ({ pageParam = 1 }) =>
        fetchProducts({ pageParam, category: initialCategory }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === "pending") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] w-full bg-slate-200" />
            <Skeleton className="h-4 w-[250px] bg-slate-200" />
            <Skeleton className="h-4 w-[200px] bg-slate-200" />
          </div>
        ))}
      </div>
    );
  }

  if (status === "error") {
    return <div className="text-red-500 mt-8">Error loading products.</div>;
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
        {data.pages.map((page, i) =>
          page.data.map((product) => (
            <ProductCard key={`${product.id}-${i}`} product={product} />
          )),
        )}
      </div>

      {hasNextPage && (
        <div ref={ref} className="mt-12 flex justify-center py-8">
          {isFetchingNextPage ? (
            <Skeleton className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          ) : (
            <span className="text-sm text-foreground/50">Load more</span>
          )}
        </div>
      )}

      {!hasNextPage && data.pages[0].data.length > 0 && (
        <div className="mt-12 text-center text-sm text-muted-foreground py-8">
          You have seen all products.
        </div>
      )}

      {!hasNextPage && data.pages[0].data.length === 0 && (
        <div className="mt-12 text-center text-sm text-muted-foreground w-full py-24 col-span-full">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
}
