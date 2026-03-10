import React from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2 text-gray-900 md:hidden hover:bg-gray-100 rounded-md">
              <Menu size={24} />
            </button>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter uppercase"
            >
              Brand
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
            >
              New
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
            >
              Men
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
            >
              Women
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
            >
              Accessories
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold uppercase tracking-wider text-red-600 hover:text-red-500 transition-colors"
            >
              Sale
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <Link
              href="/wishlist"
              className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Heart size={20} />
            </Link>
            <Link
              href="/cart"
              className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 flex h-3 w-3 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
