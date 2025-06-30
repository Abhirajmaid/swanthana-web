"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/src/constants/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if link is active
  const isLinkActive = (href) => pathname === href;
  // Function to check if any sublink is active
  const isAnySubLinkActive = (subLinks) =>
    subLinks?.some((sub) => isLinkActive(sub.href));

  return (
    <nav className="fixed top-4 left-4 right-4 lg:top-8 lg:left-8 lg:right-8 bg-white/90 backdrop-blur-2xl border border-brand-gray-light/40 rounded-2xl shadow-xl shadow-brand-gray-light/10 z-50 transition-all">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 flex items-center justify-center">
              <Image
                src="/images/logo1.png"
                alt="Swanthana Logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
                priority
              />
            </div>
            <Link
              href="/"
              className="text-2xl font-semibold text-brand-dark font-primary"
            >
              Swanthana
            </Link>
          </div>
          {/* Desktop Navigation */}
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
                <div key={link.title} className="relative">
                  <button
                    className={`nav-link flex items-center relative transition-all duration-200 ${
                      openDropdown === idx || isAnySubLinkActive(link.subLinks)
                        ? "font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-brand-primary after:rounded-full"
                        : ""
                    }`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === idx}
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    type="button"
                  >
                    {link.title}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === idx && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[900px] bg-white rounded-2xl shadow-none border-none z-50"
                      style={{
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                        borderRadius: "1rem",
                        padding: "32px 24px",
                        border: "none",
                      }}
                    >
                      <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.title}
                            href={subLink.href}
                            className="block text-brand-dark font-semibold text-base leading-tight hover:text-brand-primary transition-colors"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          {/* CTA Button Desktop */}
          <button className="hidden md:block btn-primary rounded-2xl px-6 py-2 shadow-lg hover:scale-105 transition-transform">
            Donate Now
          </button>
          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-brand-primary/10 transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white rounded-b-2xl shadow-xl border-t border-brand-gray-light/20 z-50 animate-fadeIn">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {navLinks.map((link, idx) =>
              !link.subLinks ? (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`nav-link block py-2 ${
                    isLinkActive(link.href)
                      ? "font-semibold text-brand-primary"
                      : "text-brand-dark"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.title}
                </Link>
              ) : (
                <div key={link.title} className="relative">
                  <button
                    className={`nav-link flex items-center w-full py-2 ${
                      openDropdown === idx || isAnySubLinkActive(link.subLinks)
                        ? "font-semibold text-brand-primary"
                        : "text-brand-dark"
                    }`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    type="button"
                  >
                    {link.title}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === idx && (
                    <div className="pl-4 py-2 space-y-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.title}
                          href={subLink.href}
                          className={`block text-brand-dark font-medium text-base leading-tight hover:text-brand-primary transition-colors`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {subLink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <button className="btn-primary rounded-2xl px-6 py-2 shadow-lg mt-4">
              Donate Now
            </button>
          </div>
        </div>
      )}
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
