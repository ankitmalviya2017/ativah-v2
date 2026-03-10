export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  brand: string;
  category: string;
  gender: "men" | "women" | "boys" | "girls" | "unisex";
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating?: number;
  reviewsCount?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
