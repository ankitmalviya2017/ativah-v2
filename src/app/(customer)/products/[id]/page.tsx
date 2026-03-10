import { fetchProductById } from "@/lib/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { AddToCartButton } from "@/_components/Pages/product/AddToCartButton";
import { Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/_components/ui/separator";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const product = await fetchProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | SNITCH",
    };
  }

  return {
    title: `${product.name} | SNITCH`,
    description: `Buy ${product.name} for ₹${product.price} at SNITCH. Premium quality ${product.category}.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <Link
        href="/products"
        className="inline-flex items-center text-sm font-medium mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden lg:h-[800px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col space-y-8">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
                {product.name}
              </h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="underline">45 Reviews</span>
            </div>
            <p className="text-2xl font-semibold">₹{product.price}</p>
            <p className="text-sm text-green-600 font-medium mt-1">
              Inclusive of all taxes
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Select Size
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="w-full py-3 border border-gray-300 rounded hover:border-black font-semibold uppercase transition-colors focus:ring-2 focus:ring-black focus:outline-none"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full text-sm">
              <span className="text-red-500 font-medium">Few left in S, M</span>
              <button className="underline font-medium hover:text-gray-600">
                Size Guide
              </button>
            </div>
          </div>

          <div className="pt-4">
            <AddToCartButton product={product} />
          </div>

          <Separator />

          <div className="space-y-6 pt-4 text-sm">
            <div className="flex items-start space-x-4">
              <Truck className="w-5 h-5 text-gray-500 shrink-0" />
              <div>
                <h4 className="font-semibold uppercase text-xs tracking-widest mb-1">
                  Free Delivery
                </h4>
                <p className="text-muted-foreground">
                  Free standard delivery on all orders over ₹1500.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <ShieldCheck className="w-5 h-5 text-gray-500 shrink-0" />
              <div>
                <h4 className="font-semibold uppercase text-xs tracking-widest mb-1">
                  Secure Payments
                </h4>
                <p className="text-muted-foreground">
                  Up to 6 months return window.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              Designed for the modern man, this piece combines ultimate comfort
              with effortless style. Cut from premium fabrics, it features a
              relaxed yet tailored fit. Pair it up with your favorite denim or
              chinos.
            </p>
            <ul className="mt-4 space-y-2">
              <li>Material: 100% Cotton</li>
              <li>Fit: Comfort/Relaxed</li>
              <li>Care: Machine wash cold</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
