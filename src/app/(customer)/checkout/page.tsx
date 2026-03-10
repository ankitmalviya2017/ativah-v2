"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import { Separator } from "@/_components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center space-y-6">
        <CheckCircle2 className="w-24 h-24 text-green-500 mb-4" />
        <h1 className="text-4xl font-bold uppercase tracking-tight">
          Order Confirmed!
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Thank you for shopping with SNITCH. Your order #SNT-
          {Math.floor(100000 + Math.random() * 900000)} has been placed
          successfully. A confirmation email has been sent to you.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-none uppercase font-bold tracking-widest px-12"
        >
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold uppercase mb-4">Checkout</h1>
        <p className="mb-8">Your cart is empty.</p>
        <Button asChild>
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-8">
        Checkout
      </h1>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <form onSubmit={handleCheckout} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold uppercase tracking-widest border-b pb-2">
                Contact Information
              </h2>
              <div className="space-y-4">
                <Input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="h-12 rounded-none focus-visible:ring-black"
                />
                <Input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 rounded-none focus-visible:ring-black"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold uppercase tracking-widest border-b pb-2">
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  required
                  placeholder="First Name"
                  className="h-12 rounded-none focus-visible:ring-black"
                />
                <Input
                  required
                  placeholder="Last Name"
                  className="h-12 rounded-none focus-visible:ring-black"
                />
              </div>
              <Input
                required
                placeholder="Address"
                className="h-12 rounded-none focus-visible:ring-black"
              />
              <Input
                placeholder="Apartment, suite, etc. (optional)"
                className="h-12 rounded-none focus-visible:ring-black"
              />
              <div className="grid grid-cols-3 gap-4">
                <Input
                  required
                  placeholder="City"
                  className="col-span-1 h-12 rounded-none focus-visible:ring-black"
                />
                <Input
                  required
                  placeholder="State"
                  className="col-span-1 h-12 rounded-none focus-visible:ring-black"
                />
                <Input
                  required
                  placeholder="PIN Code"
                  className="col-span-1 h-12 rounded-none focus-visible:ring-black"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold uppercase tracking-widest border-b pb-2">
                Payment
              </h2>
              <p className="text-sm text-muted-foreground italic mb-4">
                Cash on Delivery (COD) available.
              </p>
              <div className="border border-black p-4 bg-gray-50 flex items-center justify-between">
                <span className="font-semibold text-sm uppercase">
                  Standard Delivery
                </span>
                <span className="font-semibold text-sm">₹0.00</span>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full h-14 text-lg font-bold uppercase tracking-widest rounded-none bg-black hover:bg-gray-900"
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </div>

        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="bg-gray-50 p-6 lg:p-8 sticky top-24 border">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 max-h-[40vh] overflow-auto pr-2">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between text-sm"
                >
                  <div className="flex gap-4">
                    <div className="relative line-clamp-2 w-48 font-medium">
                      {item.product.name}
                      <div className="text-xs text-muted-foreground mt-1">
                        Qty: {item.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold shrink-0">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₹{totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-between items-end text-lg font-bold uppercase">
              <span>Total</span>
              <span className="text-2xl">₹{totalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
