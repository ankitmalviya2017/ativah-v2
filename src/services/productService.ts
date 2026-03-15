import { Product, ProductsResponse } from "@/types/product";

// Mock API Call for getting products by categories and filters
export const getFilteredProducts = async (
  segments: string[],
  searchParams: Record<string, string | string[] | undefined>,
): Promise<ProductsResponse> => {
  // Example of using segments:
  // const [gender, category, brand] = segments;

  // Since this is a demo, we will simulate the delay and return fake products
  await new Promise((resolve) => setTimeout(resolve, 800));

  const searchTerm = (searchParams.search as string)?.toLowerCase() || "";

  const mockProducts: Product[] = Array.from({ length: 8 }, (_, i) => ({
    id: `prod-${i + 1}`,
    name: `Premium Item ${i + 1} - ${segments.join(" ")}`,
    slug: `premium-item-${i + 1}-prod-${i + 1}`,
    description: "High quality premium item.",
    price: 1000 + i * 150,
    originalPrice: 1200 + i * 200,
    currency: "INR",
    images: ["https://placehold.co/400x500/png"],
    brand: segments.length > 2 ? segments[2] : "Generic",
    category: segments.length > 1 ? segments[1] : "Clothing",
    gender: (segments[0] as Product["gender"]) || "unisex",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    inStock: true,
    rating: 4.5,
    reviewsCount: 128,
  })).filter(p => !searchTerm || p.name.toLowerCase().includes(searchTerm));

  return {
    products: mockProducts,
    total: mockProducts.length,
    page: 1,
    limit: 10,
    totalPages: 1,
  };
};

// Mock API Call for fetching single product details
export const getProductById = async (id: string): Promise<Product | null> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!id) return null;

  return {
    id,
    name: `Awesome Display Product ${id}`,
    slug: `awesome-display-product-${id}`,
    description:
      "This is a detailed description of the awesome display product. Made with quality materials to ensure durability and style.",
    price: 2499,
    originalPrice: 2999,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=800&auto=format&fit=crop",
    ],
    brand: "Nike",
    category: "Tshirts",
    gender: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Core Black", "White"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 342,
  };
};
