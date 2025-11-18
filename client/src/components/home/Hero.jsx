"use client";
import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-brand-background p-2 sm:p-6 lg:p-8 relative overflow-hidden">
      <Navbar />

      {/* Hero Section - simple full-bleed image */}
      <div className="relative min-h-[calc(100vh-4rem)] mt-16 sm:mt-20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/images/hero2.png"
          alt="Swanthana Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>
    </div>
  );
}
