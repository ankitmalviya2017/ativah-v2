"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { Star } from "lucide-react";

export const Filters: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleFilterChange = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      
      const currentValues = params.getAll(key);
      if (currentValues.includes(value)) {
        // Remove value
        const newValues = currentValues.filter((v) => v !== value);
        params.delete(key);
        newValues.forEach((v) => params.append(key, v));
      } else {
        // Add value
        params.append(key, value);
      }

      params.delete("page");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const isActive = (key: string, value: string) => {
    return searchParams.getAll(key).includes(value);
  };

  const filterSections = [
    {
      id: "gender",
      name: "Gender",
      options: [
        { label: "Men", value: "men" },
        { label: "Women", value: "women" },
        { label: "Boys", value: "boys" },
        { label: "Girls", value: "girls" },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { label: "Nike", value: "nike" },
        { label: "Adidas", value: "adidas" },
        { label: "Puma", value: "puma" },
        { label: "Reebok", value: "reebok" },
        { label: "H&M", value: "hm" },
      ],
    },
    {
      id: "categories",
      name: "Categories",
      options: [
        { label: "T-Shirts", value: "tshirts" },
        { label: "Jeans", value: "jeans" },
        { label: "Shoes", value: "shoes" },
        { label: "Accessories", value: "accessories" },
      ],
    },
    {
      id: "rating",
      name: "Rating",
      options: [
        { label: "4★ & above", value: "4" },
        { label: "3★ & above", value: "3" },
        { label: "2★ & above", value: "2" },
      ],
    },
  ];

  return (
    <aside className="w-full md:w-64 shrink-0 mb-8 md:mb-0 pr-0 md:pr-6 md:border-r border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
          Filters
        </h3>
        <button
          onClick={() => router.replace(pathname)}
          className="text-xs font-bold text-orange-500 uppercase hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {filterSections.map((section) => (
          <div key={section.id} className="border-b border-gray-100 pb-6 last:border-0">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              {section.name}
            </h4>
            <div className="space-y-2">
              {section.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-orange-500 checked:border-orange-500 transition-all"
                      checked={isActive(section.id, option.value)}
                      onChange={() => handleFilterChange(section.id, option.value)}
                    />
                    <svg
                      className="absolute w-3 h-3 text-white transition-opacity opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-black transition-colors flex items-center">
                    {option.label}
                    {section.id === "rating" && (
                      <Star className="w-3 h-3 ml-1 fill-gray-400 text-gray-400 group-hover:fill-yellow-400 group-hover:text-yellow-400" />
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
