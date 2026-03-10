"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

export const Filters: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleFilterChange = useCallback(
    (key: string, value: string) => {
      // Current query parameters
      const params = new URLSearchParams(searchParams.toString());

      // Toggle filter
      if (params.get(key) === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      // Reset to page 1 on filter changes
      params.delete("page");

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  // Read active state
  const currentBrand = searchParams.get("brand") || "";
  const currentPrice = searchParams.get("price") || "";

  return (
    <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0 pr-0 md:pr-6 border-r border-gray-200">
      <h3 className="text-lg font-bold mb-4 uppercase text-gray-900 border-b border-gray-200 pb-2">
        Filters
      </h3>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Brand</h4>
        <div className="space-y-2">
          {["Nike", "Adidas", "Puma", "Reebok"].map((brand) => (
            <label
              key={brand}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="rounded border-gray-300 text-black focus:ring-black"
                checked={currentBrand === brand.toLowerCase()}
                onChange={() =>
                  handleFilterChange("brand", brand.toLowerCase())
                }
              />
              <span className="text-gray-600 group-hover:text-black transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Price</h4>
        <div className="space-y-2">
          {[
            { label: "Under ₹1000", val: "0-1000" },
            { label: "₹1000 - ₹2000", val: "1000-2000" },
            { label: "Above ₹2000", val: "2000+" },
          ].map((priceOpt) => (
            <label
              key={priceOpt.val}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                className="rounded-full border-gray-300 text-black focus:ring-black"
                checked={currentPrice === priceOpt.val}
                onChange={() => handleFilterChange("price", priceOpt.val)}
              />
              <span className="text-gray-600 group-hover:text-black transition-colors">
                {priceOpt.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
