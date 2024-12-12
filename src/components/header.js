"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-700 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex gap-2 items-center text-white no-underline">
          <div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-lg font-bold">
            FQ
          </div>
          <span
            className={`text-xl font-semibold transition-all duration-300 ease-in-out ${
              isScrolled ? "opacity-0 translate-y-[-10px]" : "opacity-100 translate-y-0"
            }`}
          >
            FlockIQ
          </span>
        </a>
        
        <div className="flex gap-3 items-center box-decoration-clone bg-transparent box-content p-2 border-2 border-gray-600 rounded-full">
            <a href="#features" className="text-gray-400 hover:bg-gray-800 hover:text-white transition box-content p-2 rounded-full">
              Features
            </a>
            <a href="#analytics" className="text-gray-400 hover:bg-gray-800 hover:text-white transition box-content p-2 rounded-full">
              Analytics
            </a>
            <a href="/comparison" className="text-gray-400 hover:bg-gray-800 hover:text-white transition box-content p-2 rounded-full">
              Comparison
            </a>
            <a href="/about" className="text-gray-400 hover:bg-gray-800 hover:text-white transition box-content p-2 rounded-full">
              About
            </a>
        </div>
  <div className="flex gap-2 items-center ">
  <Link href="http://flockiq.streamlit.app/" className="border border-gray-500 text-gray-400 hover:text-white px-6 py-2 rounded-full transition">
    Login
  </Link>
  <a href="http://flockiq.streamlit.app/" className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
    Get Started
  </a>
</div>

  </div>
    </nav>
  );
}
