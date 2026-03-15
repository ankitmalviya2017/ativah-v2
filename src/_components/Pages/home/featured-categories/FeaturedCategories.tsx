import React from "react";
import { SectionContainer } from "../../../section-container/SectionContainer";
import { SectionTitle } from "../../../section-title/SectionTitle";
import { CategoryCard } from "../../../cards/category-card/CategoryCard";

const categories = [
  {
    id: 1,
    title: "Shirts",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    link: "/category/shirts",
  },
  {
    id: 2,
    title: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
    link: "/category/t-shirts",
  },
  {
    id: 3,
    title: "Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-78019b7dca68?w=600&q=80",
    link: "/category/jeans",
  },
  {
    id: 4,
    title: "Shorts",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    link: "/category/shorts",
  },
  {
    id: 5,
    title: "Trousers",
    image:
      "https://images.unsplash.com/photo-1581561515286-3cefb4642bd1?w=600&q=80",
    link: "/category/trousers",
  },
  {
    id: 6,
    title: "Co-ords",
    image:
      "https://images.unsplash.com/photo-1551028712-031cf3a1032b?w=600&q=80",
    link: "/category/co-ords",
  },
  {
    id: 7,
    title: "Footwear",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    link: "/category/footwear",
  },
];

export const FeaturedCategories = () => {
  return (
    <SectionContainer className="bg-white">
      <SectionTitle title="Shop by Category" subtitle="Find your perfect fit" />

      {/* Scrollable container for mobile/tablet, grid for desktop */}
      <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar gap-4 md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:snap-none">
        {categories.map((category) => (
          <div
            key={category.id}
            className="min-w-[140px] w-3/5 sm:w-1/3 md:w-auto snap-center shrink-0"
          >
            <CategoryCard
              title={category.title}
              image={category.image}
              link={category.link}
            />
          </div>
        ))}
      </div>

      {/* Custom styles for hiding scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </SectionContainer>
  );
};
