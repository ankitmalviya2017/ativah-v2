"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, useCartStore } from "@/hooks/useCartStore";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div
      className={`group relative flex flex-col space-y-3 ${inter.className}`}
    >
      <Link
        href={`/products/${product.id}`}
        className="aspect-3/4 relative overflow-hidden bg-gray-100 rounded-lg"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-t from-black/60 to-transparent">
          <p className="text-white text-sm font-medium">Quick View</p>
        </div>
      </Link>
      <div className="flex flex-col space-y-1">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground">₹{product.price}</p>
      </div>
    </div>
  );
}
