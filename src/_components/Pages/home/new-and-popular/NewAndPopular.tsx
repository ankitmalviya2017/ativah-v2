import React from "react";
import { SectionContainer } from "../../../section-container/SectionContainer";
import { SectionTitle } from "../../../section-title/SectionTitle";
import { Slider } from "../../../slider/Slider";
import { ProductCard } from "../../../cards/product-card/ProductCard";

const products = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    price: 35,
    badge: "New",
  },
  {
    id: 2,
    title: "Denim Jacket Vintage",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80",
    price: 120,
    badge: "Bestseller",
  },
  {
    id: 3,
    title: "Black Slim Fit Jeans",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    price: 85,
  },
  {
    id: 4,
    title: "Oversized Hoodie",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1556821839-4467c699742a?w=600&q=80",
    price: 65,
    badge: "Popular",
  },
  {
    id: 5,
    title: "Summer Chino Shorts",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    price: 45,
  },
  {
    id: 6,
    title: "Linen Blend Shirt",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1588359348347-9bc6cbea68cb?w=600&q=80",
    price: 55,
    badge: "New",
  },
];

export const NewAndPopular = () => {
  return (
    <SectionContainer className="bg-white">
      <SectionTitle
        title="New & Popular"
        subtitle="Trending styles this week"
      />

      <Slider
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 16 },
          640: { slidesPerView: 2.5, spaceBetween: 16 },
          768: { slidesPerView: 3.5, spaceBetween: 24 },
          1024: { slidesPerView: 4.5, spaceBetween: 24 },
          1280: { slidesPerView: 5.5, spaceBetween: 24 },
        }}
        navigation={false}
        pagination={{ clickable: true }}
      >
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
      </Slider>
    </SectionContainer>
  );
};
