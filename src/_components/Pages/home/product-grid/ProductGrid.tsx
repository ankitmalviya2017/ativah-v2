import React from "react";
import { SectionContainer } from "../../../section-container/SectionContainer";
import { SectionTitle } from "../../../section-title/SectionTitle";
import { ProductCard } from "../../../cards/product-card/ProductCard";

const products = [
  {
    id: 1,
    title: "Relaxed Fit Cargo Pants",
    image:
      "https://images.unsplash.com/photo-1542272604-78019b7dca68?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1542272554-7802148bcae9?w=600&q=80",
    price: 89,
    badge: "Trending",
  },
  {
    id: 2,
    title: "Textured Knit Polo",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
    price: 55,
  },
  {
    id: 3,
    title: "Oversized Denim Shirt",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80",
    price: 75,
  },
  {
    id: 4,
    title: "Pleated Trousers",
    image:
      "https://images.unsplash.com/photo-1581561515286-3cefb4642bd1?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1581561586520-22cbe6784d15?w=600&q=80",
    price: 110,
    badge: "Premium",
  },
  {
    id: 5,
    title: "Heavyweight Boxy Tee",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    price: 40,
  },
  {
    id: 6,
    title: "Utility Bomber Jacket",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1556821839-4467c699742a?w=600&q=80",
    price: 145,
  },
  {
    id: 7,
    title: "Knit Sweater Vest",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    price: 65,
  },
  {
    id: 8,
    title: "Classic Loafers",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    price: 130,
    badge: "New",
  },
  {
    id: 9,
    title: "Ribbed Beanie",
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80",
    price: 25,
  },
  {
    id: 10,
    title: "Straight Leg Chinos",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    price: 70,
  },
];

export const ProductGrid = () => {
  return (
    <SectionContainer className="bg-gray-50 border-t border-gray-200">
      <SectionTitle
        title="Just Landed"
        subtitle="Fresh arrivals dropping weekly"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            hoverImage={product.hoverImage}
            price={product.price}
            badge={product.badge}
          />
        ))}
      </div>

      <div className="mt-16 text-center flex justify-center">
        <button className="border-2 border-black bg-transparent text-black px-12 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
          View All Products
        </button>
      </div>
    </SectionContainer>
  );
};
