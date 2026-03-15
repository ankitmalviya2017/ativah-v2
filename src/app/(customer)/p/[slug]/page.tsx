import { extractIdFromSlug } from "@/lib/slug";
import { getProductById } from "@/services/productService";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/_components/Pages/product/ProductDetail";

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

  return (
    <main className="min-h-screen bg-white">
      <ProductDetail product={product} />
    </main>
  );
}
