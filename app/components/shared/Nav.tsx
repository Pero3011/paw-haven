"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Find a Pet", path: "/" },
  { name: "How It Works", path: "/" },
  { name: "About Us", path: "/" },
  { name: "Favourites", path: "/" },
];

const activeStyles = "bg-primary rounded-full px-3 py-1 font-bold";

export default function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="relative bg-white shadow-sm px-4 md:px-8 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Paw Haven Logo" width={40} height={40} />
          <h1 className="text-[#8E4E14] text-xl md:text-2xl font-bold">
            Paw Haven
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm text-neutral font-semibold">
          {navLinks.map((link, index) => {
            const isTarget = index === selectedIndex;
            return (
              <li key={index}>
                <Link
                  href={link.path}
                  onClick={() => setSelectedIndex(index)}
                  className={`transition-all duration-200 ${
                    isTarget ? activeStyles : "hover:text-[#8E4E14] px-2 py-1"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Desktop Search Bar */}
          <div className="hidden sm:flex items-center gap-2 bg-gray-100 text-neutral rounded-full px-3 py-1.5 border border-gray-200">
            <Search size={16} color="#44352D" />
            <input
              className="bg-transparent outline-none text-sm w-32 md:w-48 placeholder:text-gray-400"
              type="text"
              placeholder="Search pets, breeds..."
            />
          </div>

          {/* Action Button */}
          <button className="hidden sm:block bg-primary text-neutral py-1.5 px-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Adopt a Pet
          </button>

          {/* User Icon */}
          <div className="rounded-full bg-neutral text-white p-2 cursor-pointer hover:opacity-90 transition-opacity">
            <User size={16} />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-neutral p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col gap-4 bg-white rounded-2xl p-4 shadow-lg">
          {/* Mobile Search Bar */}
          <div className="flex sm:hidden items-center gap-2 bg-gray-100 text-neutral rounded-full px-3 py-2 border border-gray-200">
            <Search size={16} color="#44352D" />
            <input
              className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
              type="text"
              placeholder="Search pets, breeds..."
            />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-2 text-neutral font-semibold">
            {navLinks.map((link, index) => {
              const isTarget = index === selectedIndex;
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                      isTarget ? "bg-primary font-bold" : "hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Action Button */}
          <button className="sm:hidden w-full bg-primary text-neutral py-2 px-4 rounded-full text-sm font-semibold text-center">
            Adopt a Pet
          </button>
        </div>
      )}
    </nav>
  );
}
