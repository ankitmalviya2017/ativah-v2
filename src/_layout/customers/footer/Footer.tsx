import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-16 pb-8 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Shop Categories */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors text-red-500"
                >
                  Sale Extravaganza
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">
              Help
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wider">
              Connect
            </h3>
            <p className="mb-6 leading-relaxed">
              Join our mailing list to get the latest trends and exclusive
              offers.
            </p>
            <form className="flex mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-neutral-800 border-none px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button
                type="button"
                className="bg-white text-black px-6 py-3 font-bold hover:bg-neutral-200 transition-colors"
              >
                OK
              </button>
            </form>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Brand. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Download App
            </span>
            {/* Dummy App Badges */}
            <div className="h-8 w-24 bg-neutral-800 rounded-md border border-neutral-700 flex items-center justify-center text-xs">
              App Store
            </div>
            <div className="h-8 w-24 bg-neutral-800 rounded-md border border-neutral-700 flex items-center justify-center text-xs">
              Play Store
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
