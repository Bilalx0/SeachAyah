'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="w-full h-19 shadow-md bg-[url('/images/nav_img.png')] bg-repeat relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-5">
              <Image src="/images/intro.png" alt="SearchAyah logo" width={48} height={48} />
              <Link href="/" className="text-gray-100 font-pacifico text-2xl font-thin">
                Searchayah
              </Link>
            </div>
            <div className="hidden md:flex gap-10">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="menu__link relative text-gray-100 hover:text-[#004D40] px-3 py-2 rounded-md text-lg font-normal"
                >
                  Quran
                </Link>
                <Link
                  href="/hadith"
                  className="menu__link relative text-gray-100 hover:text-[#004D40] px-3 py-2 rounded-md text-lg font-normal"
                >
                  Hadith
                </Link>
                <Link
                  href="/sahaba"
                  className="menu__link relative text-gray-100 hover:text-[#004D40] px-3 py-2 rounded-md text-lg font-normal"
                >
                  Sahaba
                </Link>
                <Link
                  href="/books"
                  className="menu__link relative text-gray-100 hover:text-[#004D40] px-3 py-2 rounded-md text-lg font-normal"
                >
                  Islamic Books
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="text-white hover:bg-[#67b2b4] hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-transform duration-300"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div 
          className={`transform transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100 max-h-64' 
              : '-translate-y-10 opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <div className="pt-3 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white hover:bg-[#67b2b4] hover:text-white block px-5 py-2 text-lg font-normal transition-colors duration-200"
            >
              Quran
            </Link>
            <Link
              href="/hadith"
              className="text-white hover:bg-[#67b2b4] hover:text-white block px-5 py-2 text-lg font-normal transition-colors duration-200"
            >
              Hadith
            </Link>
            <Link
              href="/sahaba"
              className="text-white hover:bg-[#67b2b4] hover:text-white block px-5 py-2 text-lg font-normal transition-colors duration-200"
            >
              Sahaba
            </Link>
            <Link
              href="/books"
              className="text-white hover:bg-[#67b2b4] hover:text-white block px-5 py-2 text-lg font-normal transition-colors duration-200"
            >
              Islamic Books
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}