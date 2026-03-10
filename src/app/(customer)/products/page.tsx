import { ProductList } from "@/_components/Pages/product/ProductList";
import { Button } from "@/_components/ui/button";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const currentCategory = category || "all";

  const categories = [
    { label: "All", value: "all" },
    { label: "Shirts", value: "shirts" },
    { label: "T-Shirts", value: "t-shirts" },
    { label: "Jeans", value: "jeans" },
    { label: "Pants", value: "pants" },
    { label: "Jackets", value: "jackets" },
    { label: "Hoodies", value: "hoodies" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            Men's Collection
          </h1>
          <p className="text-muted-foreground mt-2">
            Discover the latest trends and essential pieces for your wardrobe.
          </p>
        </div>
        <div className="flex items-center space-x-2 w-full overflow-x-auto pb-4 md:pb-0 md:w-auto">
          {categories.map((c) => (
            <Button
              key={c.value}
              asChild
              variant={currentCategory === c.value ? "default" : "outline"}
              className="rounded-full shrink-0"
              size="sm"
            >
              <Link
                href={
                  c.value === "all"
                    ? "/products"
                    : `/products?category=${c.value}`
                }
              >
                {c.label}
              </Link>
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex rounded-full"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm py-4 border-b">
        <span className="text-muted-foreground">
          {currentCategory.toUpperCase()} PRODUCTS
        </span>
      </div>

      <ProductList initialCategory={category} />
    </div>
  );
}
