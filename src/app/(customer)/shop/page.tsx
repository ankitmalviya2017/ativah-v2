import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/_components/Breadcrumbs/Breadcrumbs";
import { Filters } from "@/_components/Filters/Filters";
import { ProductGrid } from "@/_components/ProductGrid/ProductGrid";
import { getFilteredProducts } from "@/services/productService";

export const revalidate = 60; // 60 seconds incremental static regeneration caching

interface CategoryPageProps {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ShopPage(props: CategoryPageProps) {
  const searchParams = await props.searchParams;

  // Root shop shows all products
  const productData = await getFilteredProducts([], searchParams);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1440px] px-4 md:px-8 mx-auto py-8">
        <Breadcrumbs segments={["shop"]} />

        <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight capitalize">
            All Products
          </h1>
          <span className="text-gray-500 font-medium whitespace-nowrap hidden md:block">
            {productData.total} items found
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mt-6">
          <Filters />
          <section className="flex-1 w-full">
            <ProductGrid products={productData.products} />
          </section>
        </div>
      </div>
    </main>
  );
}
