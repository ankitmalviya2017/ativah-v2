"use client";

import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/_components/ui/button";

// For this example, we'll implement wishlist in a simplified way, optionally saving to local state just like cart
// Reusing some product interfaces
export default function WishlistPage() {
  // In a real app we'd have a useWishlistStore similar to useCartStore
  // Using dummy data for the purpose of the demo
  const items = [
    {
      id: "3",
      name: "White Linen Shirt",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=400&h=500",
      category: "shirts",
    },
    {
      id: "7",
      name: "Denim Jacket",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400&h=500",
      category: "jackets",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-2">
        Wishlist
      </h1>
      <p className="text-muted-foreground mb-12 uppercase tracking-widest text-sm">
        {items.length} Items
      </p>

      {items.length === 0 ? (
        <div className="text-center min-h-[40vh] flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-muted-foreground">
            Your wishlist is empty
          </h2>
          <Button
            asChild
            size="lg"
            className="rounded-none px-12 mt-4 uppercase font-bold tracking-widest bg-black text-white hover:bg-gray-800"
          >
            <Link href="/products">Explore Collections</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col space-y-3"
            >
              <Link
                href={`/products/${product.id}`}
                className="aspect-[3/4] relative overflow-hidden bg-gray-100 rounded-lg"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <button className="absolute top-2 right-2 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-white text-gray-500 hover:text-red-500 transition-colors shadow-sm">
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="flex flex-col space-y-2">
                <h3 className="font-semibold text-sm leading-tight line-clamp-2">
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-sm font-medium">₹{product.price}</p>
                <Button
                  variant="outline"
                  className="w-full rounded-none uppercase text-xs font-bold tracking-widest border-black"
                >
                  <ShoppingBag className="w-3 h-3 mr-2" /> Quick Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
