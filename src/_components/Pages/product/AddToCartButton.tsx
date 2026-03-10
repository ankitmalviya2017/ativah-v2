"use client";

import { useCartStore, Product } from "@/hooks/useCartStore";
import { Button } from "@/_components/ui/button";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={`w-full py-6 text-lg uppercase font-semibold rounded-none transition-all ${
        isAdded
          ? "bg-green-600 hover:bg-green-700"
          : "bg-black hover:bg-gray-800 text-white"
      }`}
    >
      <ShoppingBag className="w-5 h-5 mr-3" />
      {isAdded ? "Added to Cart" : "ADD TO BAG"}
    </Button>
  );
}
