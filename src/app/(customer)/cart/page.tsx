"use client";

import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/_components/ui/button";
import { useEffect, useState } from "react";
import { Separator } from "@/_components/ui/separator";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        Loading...
      </div>
    );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-muted-foreground">
          Your bag is empty
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our collections and add items to your cart.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-none px-12 mt-4 uppercase font-bold tracking-widest bg-black text-white hover:bg-gray-800"
        >
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-12">
        Shopping Bag
      </h1>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="col-span-6">Product</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-3 text-right">Total</div>
          </div>

          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b md:border-none pb-6 md:pb-0"
              >
                <div className="col-span-1 md:col-span-6 flex gap-4 md:items-center">
                  <div className="relative h-32 w-24 bg-gray-100 rounded shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      unoptimized
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center space-y-1">
                    <h3 className="font-semibold text-lg line-clamp-2">
                      <Link href={`/products/${item.product.id}`}>
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm">Size: M</p>
                    <p className="text-muted-foreground text-sm font-medium">
                      ₹{item.product.price}
                    </p>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center space-x-1 mt-2 md:hidden"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-3 flex justify-between md:justify-center items-center">
                  <span className="md:hidden font-medium text-sm uppercase text-muted-foreground">
                    Quantity
                  </span>
                  <div className="flex items-center border rounded">
                    <button
                      className="p-2 hover:bg-gray-100 transition-colors"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          Math.max(1, item.quantity - 1),
                        )
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      className="p-2 hover:bg-gray-100 transition-colors"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-3 flex justify-between md:justify-end items-center relative">
                  <span className="md:hidden font-medium text-sm uppercase text-muted-foreground">
                    Total
                  </span>
                  <p className="font-semibold text-lg">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="absolute -right-2 top-0 md:static md:ml-4 text-gray-400 hover:text-red-500 transition-colors hidden md:block"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="bg-gray-50 border p-8 space-y-6 sticky top-24">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-b pb-4">
              Order Summary
            </h2>

            <div className="space-y-3 pb-4">
              <div className="flex justify-between text-muted-foreground">
                <p>Subtotal</p>
                <p className="font-medium text-black">
                  ₹{totalPrice().toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <p>Shipping</p>
                <p className="font-medium text-black">Calculated at checkout</p>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-end pt-4 font-bold text-2xl uppercase">
              <p>Total</p>
              <p className="text-3xl">₹{totalPrice().toFixed(2)}</p>
            </div>
            <p className="text-xs text-muted-foreground text-right mt-1">
              Tax included and shipping calculated at checkout
            </p>

            <Button
              asChild
              size="lg"
              className="w-full mt-8 rounded-none py-6 font-bold tracking-widest uppercase text-md"
            >
              <Link href="/checkout">
                Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <div className="space-y-4 pt-4 border-t mt-6 text-sm text-center text-muted-foreground flex flex-col items-center">
              <p>Secure checkout enabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
