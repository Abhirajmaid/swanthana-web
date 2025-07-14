"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Menu,
  X,
  FileText,
  Camera,
  BookOpen,
  Heart,
  Stethoscope,
  Brain,
  Users,
  Phone,
  Home,
  User,
} from "lucide-react";
import { navLinks } from "@/src/constants/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Icon mapping for navigation items
const getIconForNavItem = (title, href) => {
  const iconMap = {
    // Treatments
    "De-Addiction Treatment": (
      <Stethoscope className="w-5 h-5 text-brand-primary" />
    ),
    "Psychiatric Care": <Brain className="w-5 h-5 text-brand-primary" />,
    "Counseling & Therapy": <Heart className="w-5 h-5 text-brand-primary" />,
    "Rehabilitation & Life Skills": (
      <Users className="w-5 h-5 text-brand-primary" />
    ),

    // Disorders
    Schizophrenia: <Brain className="w-5 h-5 text-brand-primary" />,
    "Bipolar Disorder": <Brain className="w-5 h-5 text-brand-primary" />,
    Dementia: <Brain className="w-5 h-5 text-brand-primary" />,
    "Substance Use Disorder": (
      <Stethoscope className="w-5 h-5 text-brand-primary" />
    ),
    "Emotional & Trauma Recovery": (
      <Heart className="w-5 h-5 text-brand-primary" />
    ),

    // Media
    Blogs: <BookOpen className="w-5 h-5 text-brand-primary" />,
    Gallery: <Camera className="w-5 h-5 text-brand-primary" />,
    "Annual Report": <FileText className="w-5 h-5 text-brand-primary" />,
  };

  return iconMap[title] || <FileText className="w-5 h-5 text-brand-primary" />;
};

// Description mapping for navigation items
const getDescriptionForNavItem = (title) => {
  const descriptionMap = {
    // Treatments
    "De-Addiction Treatment":
      "Comprehensive programs for overcoming substance dependencies",
    "Psychiatric Care": "Professional mental health treatment and support",
    "Counseling & Therapy": "Individual and group therapy sessions",
    "Rehabilitation & Life Skills":
      "Building essential life skills for recovery",

    // Disorders
    Schizophrenia: "Specialized care for schizophrenia and related conditions",
    "Bipolar Disorder": "Treatment for mood disorders and bipolar conditions",
    Dementia: "Support for memory-related conditions and families",
    "Substance Use Disorder": "Comprehensive addiction treatment programs",
    "Emotional & Trauma Recovery": "Healing from trauma and emotional distress",

    // Media
    Blogs: "Latest insights, stories, and mental health resources",
    Gallery: "Visual stories from our community and events",
    "Annual Report": "Our yearly impact and achievements report",
  };

  return descriptionMap[title] || "Learn more about our services";
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Function to check if link is active
  const isLinkActive = (href) => pathname === href;
  // Function to check if any sublink is active
  const isAnySubLinkActive = (subLinks) =>
    subLinks?.some((sub) => isLinkActive(sub.href));

  // Close dropdown when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    if (openDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }

    if (mobileOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [openDropdown, mobileOpen]);

  // Close dropdown when pathname changes (navigation occurs)
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      ref={dropdownRef}
      className="fixed top-4 left-4 right-4 lg:top-8 lg:left-8 lg:right-8 bg-white/90 backdrop-blur-2xl border border-brand-gray-light/40 rounded-2xl shadow-xl shadow-brand-gray-light/10 z-50 transition-all"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 mr-3 flex items-center justify-center">
              <Image
                src="/images/logo1.png"
                alt="Swanthana Logo"
                width={60}
                height={60}
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
                  className={`nav-link relative !text-lg ${
                    isLinkActive(link.href)
                      ? "font-medium after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-brand-primary after:rounded-full "
                      : ""
                  }`}
                >
                  {link.title}
                </Link>
              ) : (
                <div key={link.title} className="relative">
                  <button
                    className={`nav-link !text-lg flex items-center relative transition-all duration-200 ${
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[800px] bg-white rounded-3xl shadow-2xl border border-gray-100/60 z-50 overflow-hidden"
                      style={{
                        boxShadow:
                          "0 20px 50px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
                      }}
                    >
                      {/* Dropdown Header */}
                      <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 px-8 py-6 border-b border-gray-100/60">
                        <h3 className="text-lg font-bold text-brand-dark mb-1">
                          {link.title}
                        </h3>
                        <p className="text-sm text-brand-gray">
                          {link.title === "Treatments" &&
                            "Comprehensive mental health and addiction treatment services"}
                          {link.title === "Disorders" &&
                            "Specialized care for various mental health conditions"}
                          {link.title === "Media" &&
                            "Resources, stories, and updates from Swanthana"}
                        </p>
                      </div>

                      {/* Dropdown Content */}
                      <div className="p-8">
                        <div className="grid grid-cols-1 gap-1">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.title}
                              href={subLink.href}
                              className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-secondary/5 transition-all duration-200 hover:shadow-sm"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                                {getIconForNavItem(subLink.title, subLink.href)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-brand-dark group-hover:text-brand-primary transition-colors mb-1">
                                  {subLink.title}
                                </h4>
                                <p className="text-sm text-brand-gray leading-relaxed">
                                  {getDescriptionForNavItem(subLink.title)}
                                </p>
                              </div>
                              <div className="flex-shrink-0 mt-1">
                                <ChevronDown className="w-4 h-4 text-brand-gray group-hover:text-brand-primary rotate-[-90deg] transition-colors" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Dropdown Footer */}
                      <div className="bg-gray-50/50 px-8 py-4 border-t border-gray-100/60">
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-brand-gray">
                            Need help choosing?{" "}
                            <Link
                              href="/contact-us"
                              className="text-brand-primary hover:text-brand-primary/80 font-medium"
                            >
                              Contact our team
                            </Link>
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-primary/20 rounded-full"></div>
                            <div className="w-2 h-2 bg-brand-primary/40 rounded-full"></div>
                            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                          </div>
                        </div>
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
                  className={`nav-link flex items-center gap-3 py-3 px-2 rounded-lg transition-colors ${
                    isLinkActive(link.href)
                      ? "font-semibold text-brand-primary bg-brand-primary/5"
                      : "text-brand-dark hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.title}
                </Link>
              ) : (
                <div key={link.title} className="relative">
                  <button
                    className={`nav-link flex items-center justify-between w-full py-3 px-2 rounded-lg transition-colors ${
                      openDropdown === idx || isAnySubLinkActive(link.subLinks)
                        ? "font-semibold text-brand-primary bg-brand-primary/5"
                        : "text-brand-dark hover:bg-gray-50"
                    }`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    type="button"
                  >
                    <span>{link.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === idx && (
                    <div className="mt-2 space-y-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.title}
                          href={subLink.href}
                          className="flex items-center gap-3 py-2 px-4 ml-4 rounded-lg text-brand-dark hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="w-6 h-6 bg-brand-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                            {getIconForNavItem(subLink.title, subLink.href)}
                          </div>
                          <span className="font-medium text-sm">
                            {subLink.title}
                          </span>
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
