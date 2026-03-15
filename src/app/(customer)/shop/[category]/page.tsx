import { Breadcrumbs } from "@/_components/Breadcrumbs/Breadcrumbs";
import { Filters } from "@/_components/Filters/Filters";
import { ProductGrid } from "@/_components/ProductGrid/ProductGrid";
import { getFilteredProducts } from "@/services/productService";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { category } = await props.params;
  const searchParams = await props.searchParams;

  const segments = ["shop", category];
  const productData = await getFilteredProducts(segments, searchParams);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1440px] px-4 md:px-8 mx-auto py-8">
        <Breadcrumbs segments={segments} />

        <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight capitalize">
            {category.replace(/-/g, " ")}
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
