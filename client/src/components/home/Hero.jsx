"use client";
import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-brand-background p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-start justify-center mt-20">
        {/* Background Image */}
        <Image
          src="/images/swanthana_hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-center rounded-3xl brightness-[0.85]"
          priority
          quality={100}
        />

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 flex items-start justify-center">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Main Heading */}
            <h1 className="text-hero text-8xl font-light text-white">
              We deliver the results
              <br />
              <span>that are best for you.</span>
            </h1>

            {/* CTA Buttons */}
            <div>
              <button className="btn-border w-full sm:w-auto min-w-[200px] text-white border-white/20 backdrop-blur-sm hover:border-white hover:-translate-y-1">
                Donate Now
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/30 rounded-2xl flex justify-center backdrop-blur-sm">
              <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
