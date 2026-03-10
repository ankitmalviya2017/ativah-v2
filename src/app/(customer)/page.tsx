import React from "react";
import { HeroSlider } from "../../_components/Pages/home/hero-slider/HeroSlider";
import { FeaturedCategories } from "../../_components/Pages/home/featured-categories/FeaturedCategories";
import { ShopByMood } from "../../_components/Pages/home/shop-by-mood/ShopByMood";
import { NewAndPopular } from "../../_components/Pages/home/new-and-popular/NewAndPopular";
import { SaleBanner } from "../../_components/Pages/home/sale-banner/SaleBanner";
import { ProductGrid } from "../../_components/Pages/home/product-grid/ProductGrid";

export default function CustomerHomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturedCategories />
      <ShopByMood />
      <NewAndPopular />
      <SaleBanner />
      <ProductGrid />
    </>
  );
}
