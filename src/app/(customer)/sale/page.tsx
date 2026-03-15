import { Breadcrumbs } from "@/_components/Breadcrumbs/Breadcrumbs";
import { Filters } from "@/_components/Filters/Filters";
import { ProductGrid } from "@/_components/ProductGrid/ProductGrid";
import { getFilteredProducts } from "@/services/productService";

export const revalidate = 60;

export default async function SalePage(props: any) {
  const searchParams = await props.searchParams;

  // For now, using all products for sale as well, but we can filter by a "sale" tag if available
  const productData = await getFilteredProducts([], searchParams);

  return (
    <main className="min-h-screen bg-white">
      {/* Sale Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 opacity-60">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
            alt="Sale"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
            SEASON SALE
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white mt-2 uppercase tracking-widest">
            Up to 70% Off Everything
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-white text-black px-6 py-2 font-bold uppercase tracking-tighter hover:bg-red-600 hover:text-white transition-all cursor-pointer">
              Shop Men
            </div>
            <div className="bg-white text-black px-6 py-2 font-bold uppercase tracking-tighter hover:bg-red-600 hover:text-white transition-all cursor-pointer">
              Shop Women
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent"></div>
      </div>

      <div className="max-w-[1440px] px-4 md:px-8 mx-auto py-8">
        <Breadcrumbs segments={["sale"]} />

        <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight capitalize">
            Sale Items
          </h2>
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
