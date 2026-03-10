import React from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/_components/ui/sheet";

export const Header = () => {
  const navLinks = [
    { href: "/new-arrivals", label: "New" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/accessories", label: "Accessories" },
    {
      href: "/sale",
      label: "Sale",
      className: "text-red-600 hover:text-red-500",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger
                render={
                  <button className="p-2 -ml-2 text-gray-900 md:hidden hover:bg-gray-100 rounded-md">
                    <Menu size={24} />
                  </button>
                }
              />
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-2xl font-bold tracking-tighter uppercase">
                    Brand
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-semibold uppercase tracking-wider transition-colors ${
                        link.className || "text-gray-900 hover:text-gray-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter uppercase"
            >
              Brand
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                  link.className || "text-gray-900 hover:text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
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
