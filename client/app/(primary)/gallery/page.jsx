"use client";
import Image from "next/image";
import { useState } from "react";

// Example gallery images (replace with your own or fetch from API)
const galleryImages = [
  {
    src: "/images/stocks/1.jpg",
    alt: "Therapy Session",
  },
  {
    src: "/images/stocks/2.jpg",
    alt: "Child Smiling",
  },
  {
    src: "/images/stocks/3.jpg",
    alt: "Group Activity",
  },
  {
    src: "/images/stocks/4.jpg",
    alt: "Rehab Center",
  },
  {
    src: "/images/stocks/5.jpg",
    alt: "Inclusive Classroom",
  },
  {
    src: "/images/stocks/6.jpg",
    alt: "Therapist with Child",
  },
  {
    src: "/images/stocks/7.jpg",
    alt: "Speech Therapy",
  },
  {
    src: "/images/stocks/8.jpg",
    alt: "Physiotherapy",
  },
  {
    src: "/images/stocks/11.jpg",
    alt: "Play Area",
  },
  {
    src: "/images/stocks/10.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/11.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/12.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/13.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/14.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/15.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/16.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/17.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/18.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/19.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/20.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/21.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/22.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/23.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/24.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/25.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/26.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/27.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/28.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/29.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/30.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/31.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/32.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/33.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/34.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/35.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/36.jpg",
    alt: "Founder",
  },
  {
    src: "/images/stocks/37.jpg",
    alt: "Founder",
  },
];

export default function GalleryPage() {
  const [modal, setModal] = useState(null);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-[120px] md:py-[180px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/stocks/13.jpg"
            alt="Gallery Hero"
            className="w-full h-full object-cover object-center"
            priority
            sizes="100vw"
            width={1500}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-dark/60 to-white" />
        </div>
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg text-center">
            Gallery
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-0 drop-shadow text-center">
            Explore moments from our journey, events, therapies, and the smiles
            of our Swanthana family.
          </p>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl -z-1" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-brand-secondary/10 rounded-full blur-2xl -z-1" />
      </section>
      <section className="py-16 bg-white">
        {/* Responsive grid, fixed box ratio like reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-2">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex items-center justify-center bg-[#f8fafc]"
              onClick={() => setModal(idx)}
              tabIndex={0}
              aria-label="View image"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      {/* Modal for full image */}
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
              onClick={() => setModal(null)}
              aria-label="Close"
            >
              <span className="text-2xl font-bold text-brand-primary">
                &times;
              </span>
            </button>
            <Image
              src={galleryImages[modal].src}
              alt={galleryImages[modal].alt}
              width={900}
              height={600}
              className="w-full h-auto rounded-2xl object-contain bg-white"
              priority
            />
            <div className="text-center text-white mt-4">
              {galleryImages[modal].alt}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
