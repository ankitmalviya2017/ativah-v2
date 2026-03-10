import { extractIdFromSlug } from "@/lib/slug";
import { getProductById } from "@/services/productService";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/_components/Breadcrumbs/Breadcrumbs";

export const revalidate = 60; // Cached aggressively on server

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;

  // Extract canonical identifier via ID decoupling for database performance
  const productId = extractIdFromSlug(slug);

  const product = await getProductById(productId);

  if (!product) {
    return notFound();
  }

  // Generated breadcrumbs logic
  const segments = [product.gender, product.category, product.brand];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1440px] px-4 md:px-8 mx-auto py-8">
        <Breadcrumbs segments={segments} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Visual Presentation Left Pane */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Gallery Thumbnails Loop */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-20 h-24 bg-gray-100 border border-gray-200 cursor-pointer overflow-hidden rounded-md"
                  >
                    <Image
                      src={img}
                      alt="thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Details Right Pane */}
          <div className="flex flex-col space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-sm">
                {product.brand}
              </h1>
              <p className="text-xl text-gray-500 mt-2 font-medium">
                {product.name}
              </p>
            </div>

            <div className="flex items-center space-x-4 border-b border-gray-200 pb-6">
              <span className="text-2xl font-bold tracking-tight">
                {product.currency} {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {product.currency} {product.originalPrice}
                </span>
              )}
            </div>

            <form className="mt-4">
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-4">
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="w-14 h-14 border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-800 hover:border-black focus:border-black focus:ring-1 focus:ring-black uppercase transition-all"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-full bg-black hover:bg-neutral-800 text-white font-bold py-4 px-8 tracking-wider focus:ring-4 focus:ring-gray-300 transition-colors uppercase disabled:bg-gray-400 flex items-center justify-center gap-2"
                  disabled={!product.inStock}
                >
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 8H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2zM5 10h14v10H5V10zM12 4a2 2 0 00-2 2h4a2 2 0 00-2-2z" />
                  </svg>
                  {product.inStock ? "Add to Bag" : "Out of Stock"}
                </button>
              </div>
            </form>

            <div className="pt-8 prose prose-gray">
              <h3 className="uppercase tracking-widest font-semibold text-gray-900 text-sm">
                Product Details
              </h3>
              <p className="text-gray-600 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
