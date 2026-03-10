import { Product } from "@/hooks/useCartStore";

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Black Oversized T-Shirt",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400&h=500",
    category: "t-shirts",
  },
  {
    id: "2",
    name: "Classic Navy Chinos",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=400&h=500",
    category: "pants",
  },
  {
    id: "3",
    name: "White Linen Shirt",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=400&h=500",
    category: "shirts",
  },
  {
    id: "4",
    name: "Slim Fit Blue Jeans",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400&h=500",
    category: "jeans",
  },
  {
    id: "5",
    name: "Olive Green Cargo Pants",
    price: 1699,
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80&w=400&h=500",
    category: "pants",
  },
  {
    id: "6",
    name: "Graphic Print T-Shirt",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=400&h=500",
    category: "t-shirts",
  },
  {
    id: "7",
    name: "Denim Jacket",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400&h=500",
    category: "jackets",
  },
  {
    id: "8",
    name: "Striped Polo Shirt",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=400&h=500",
    category: "shirts",
  },
  {
    id: "9",
    name: "Black Skinny Jeans",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=400&h=500",
    category: "jeans",
  },
  {
    id: "10",
    name: "Grey Hoodie",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400&h=500",
    category: "hoodies",
  },
];

export async function fetchProducts({
  pageParam = 1,
  category,
}: {
  pageParam?: number;
  category?: string;
}) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  let filtered = DUMMY_PRODUCTS;
  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  const PAGE_SIZE = 4;
  const start = (pageParam - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const data = filtered.slice(start, end);
  const nextCursor = end < filtered.length ? pageParam + 1 : undefined;

  return {
    data,
    nextCursor,
  };
}

export async function fetchProductById(id: string) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return DUMMY_PRODUCTS.find((p) => p.id === id);
}
