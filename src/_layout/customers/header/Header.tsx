'use client';

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
import { Button } from "@/_components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store/store";
import { checkAuth } from "../../../redux/slices/authSlice";
import { useEffect, useState } from "react";
import paths from "../../../navigate/paths";

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface CategoryData {
  label: string;
  sections: NavSection[];
  featuredImage: string;
}

const NAVIGATION_DATA: Record<string, CategoryData> = {
  men: {
    label: "Men",
    featuredImage: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=400",
    sections: [
      {
        title: "Topwear",
        items: [
          { label: "T-Shirts", href: "/shop/men/t-shirts" },
          { label: "Casual Shirts", href: "/shop/men/shirts" },
          { label: "Formal Shirts", href: "/shop/men/formal-shirts" },
          { label: "Sweatshirts", href: "/shop/men/sweatshirts" },
          { label: "Jackets", href: "/shop/men/jackets" },
        ],
      },
      {
        title: "Bottomwear",
        items: [
          { label: "Jeans", href: "/shop/men/jeans" },
          { label: "Casual Trousers", href: "/shop/men/trousers" },
          { label: "Shorts", href: "/shop/men/shorts" },
          { label: "Track Pants", href: "/shop/men/track-pants" },
        ],
      },
      {
        title: "Footwear",
        items: [
          { label: "Casual Shoes", href: "/shop/men/shoes" },
          { label: "Sports Shoes", href: "/shop/men/sports-shoes" },
          { label: "Sandals", href: "/shop/men/sandals" },
        ],
      },
    ],
  },
  women: {
    label: "Women",
    featuredImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400",
    sections: [
      {
        title: "Western Wear",
        items: [
          { label: "Dresses", href: "/shop/women/dresses" },
          { label: "Tops & T-Shirts", href: "/shop/women/tops" },
          { label: "Jeans", href: "/shop/women/jeans" },
          { label: "Skirts", href: "/shop/women/skirts" },
        ],
      },
      {
        title: "Ethnic Wear",
        items: [
          { label: "Kurtas & Suits", href: "/shop/women/kurtas" },
          { label: "Sarees", href: "/shop/women/sarees" },
          { label: "Ethnic Dresses", href: "/shop/women/ethnic-dresses" },
        ],
      },
      {
        title: "Footwear",
        items: [
          { label: "Flats", href: "/shop/women/flats" },
          { label: "Heels", href: "/shop/women/heels" },
          { label: "Sports Shoes", href: "/shop/women/sports-shoes" },
        ],
      },
    ],
  },
  kids: {
    label: "Kids",
    featuredImage: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=400",
    sections: [
      {
        title: "Boys Clothing",
        items: [
          { label: "T-Shirts", href: "/shop/kids/boys-tshirts" },
          { label: "Shirts", href: "/shop/kids/boys-shirts" },
          { label: "Jeans", href: "/shop/kids/boys-jeans" },
        ],
      },
      {
        title: "Girls Clothing",
        items: [
          { label: "Dresses", href: "/shop/kids/girls-dresses" },
          { label: "Tops", href: "/shop/kids/girls-tops" },
          { label: "Lehenga Choli", href: "/shop/kids/girls-ethnic" },
        ],
      },
      {
        title: "Infants",
        items: [
          { label: "Bodysuits", href: "/shop/kids/infants-bodysuits" },
          { label: "Rompers", href: "/shop/kids/infants-rompers" },
        ],
      },
    ],
  },
};

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const navLinks = [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    {
      href: paths.sale(),
      label: "Sale",
      className: "text-red-600 hover:text-red-500",
    },
  ];

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Slightly taller for premium feel */}
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
              <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left text-2xl font-bold tracking-tighter uppercase">
                    Ativah
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <div key={link.id || link.href}>
                      <Link
                        href={link.href || `/shop/${link.id}`}
                        className={`text-lg font-bold uppercase tracking-widest transition-colors ${
                          link.className || "text-gray-900"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.id && NAVIGATION_DATA[link.id] && (
                        <div className="mt-4 ml-4 flex flex-col gap-2">
                           {NAVIGATION_DATA[link.id].sections.map(section => (
                             <div key={section.title} className="mb-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">{section.title}</span>
                                {section.items.map(item => (
                                  <Link 
                                    key={item.label} 
                                    href={item.href} 
                                    className="text-sm text-gray-700 block py-1"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                             </div>
                           ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter uppercase"
            >
              Ativah
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 h-full">
            {navLinks.map((link) => (
              <div 
                key={link.id || link.href}
                className="h-full flex items-center"
                onMouseEnter={() => setActiveMenu(link.id || null)}
              >
                <Link
                  href={link.href || `/shop/${link.id}`}
                  className={`text-sm font-bold uppercase tracking-[0.2em] transition-all h-full flex items-center border-b-2 ${
                    activeMenu === link.id ? "border-black text-black" : "border-transparent text-gray-900 hover:text-gray-600"
                  } ${link.className || ""}`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            {isAuthenticated ? (
              <>
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
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="text-sm font-bold uppercase tracking-widest border-gray-300 hover:bg-gray-50"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="text-sm font-bold uppercase tracking-widest bg-black hover:bg-gray-900 text-white px-6">
                    Join
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mega Menu Popup */}
      {activeMenu && NAVIGATION_DATA[activeMenu] && (
        <div 
           className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-300"
           onMouseEnter={() => setActiveMenu(activeMenu)}
           onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-5 gap-10">
                {NAVIGATION_DATA[activeMenu].sections.map((section) => (
                    <div key={section.title} className="col-span-1">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6 pb-2 border-b border-gray-100">
                            {section.title}
                        </h3>
                        <ul className="space-y-3">
                            {section.items.map((item) => (
                                <li key={item.label}>
                                    <Link 
                                        href={item.href}
                                        className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                                        onClick={() => setActiveMenu(null)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                
                {/* Featured Section */}
                <div className="col-span-2 flex flex-col gap-4">
                    <div className="aspect-video bg-gray-100 rounded-none overflow-hidden group border border-gray-200">
                        <img 
                            src={NAVIGATION_DATA[activeMenu].featuredImage} 
                            alt="Featured" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-2">
                        <h4 className="text-lg font-black uppercase italic tracking-tighter">NEW SEASON ARRIVALS</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Explore the latest collections</p>
                        <Link 
                            href={`/shop/${activeMenu}`}
                            className="inline-block mt-4 text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition-all"
                            onClick={() => setActiveMenu(null)}
                        >
                            Shop All {NAVIGATION_DATA[activeMenu].label}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      )}
    </header>
  );
};
