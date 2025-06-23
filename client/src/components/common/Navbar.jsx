"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/src/constants/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  // Function to check if link is active
  const isLinkActive = (href) => pathname === href;
  // Function to check if any sublink is active
  const isAnySubLinkActive = (subLinks) =>
    subLinks?.some((sub) => isLinkActive(sub.href));

  return (
    <nav className="fixed top-4 left-4 right-4 lg:top-8 lg:left-8 lg:right-8 bg-white/90 backdrop-blur-2xl border border-brand-gray-light/40 rounded-2xl shadow-xl shadow-brand-gray-light/10 z-50 transition-all">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center mr-3 shadow-md">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <Link
              href="/"
              className="text-2xl font-semibold text-brand-dark font-primary"
            >
              Swanthana
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, idx) =>
              !link.subLinks ? (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`nav-link relative ${
                    isLinkActive(link.href)
                      ? "font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-brand-primary after:rounded-full"
                      : ""
                  }`}
                >
                  {link.title}
                </Link>
              ) : (
                <div
                  key={link.title}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(idx)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`nav-link flex items-center relative transition-all duration-200 ${
                      openDropdown === idx || isAnySubLinkActive(link.subLinks)
                        ? "font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-brand-primary after:rounded-full"
                        : ""
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === idx}
                  >
                    {link.title}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === idx && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/100 backdrop-blur-2xl rounded-2xl shadow-2xl border border-brand-gray-light/40 py-2 z-50 animate-fadeIn">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.title}
                          href={subLink.href}
                          className={`block px-5 py-2 rounded-xl transition-all relative ${
                            isLinkActive(subLink.href)
                              ? "font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-brand-primary after:rounded-full bg-brand-primary/10 text-brand-primary"
                              : "text-brand-gray hover:bg-brand-primary/5 hover:text-brand-primary"
                          }`}
                        >
                          {subLink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block btn-primary rounded-2xl px-6 py-2 shadow-lg hover:scale-105 transition-transform">
            Donate Now
          </button>
        </div>
      </div>
      <style jsx global>{`
        .nav-link {
          font-size: 1rem;
          outline: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.18s ease;
        }
      `}</style>
    </nav>
  );
}
