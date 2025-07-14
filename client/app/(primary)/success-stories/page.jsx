"use client";
import { useState } from "react";
import Image from "next/image";
import { successStories } from "@/src/data/successStories";
import HeroSection from "@/src/components/common/HeroSection";
import Link from "next/link";

export default function SuccessStoriesPage() {
  const [selectedCondition, setSelectedCondition] = useState("all");

  // Get unique conditions for filtering
  const conditions = [
    "all",
    ...new Set(successStories.map((story) => story.condition)),
  ];

  const filteredStories =
    selectedCondition === "all"
      ? successStories
      : successStories.filter((story) => story.condition === selectedCondition);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Success Stories"
        subtitle="Real stories of hope, healing, and transformation from women who found their path to recovery at Swanthana."
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {conditions.map((condition) => (
              <button
                key={condition}
                onClick={() => setSelectedCondition(condition)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCondition === condition
                    ? "bg-brand-primary text-white shadow-lg"
                    : "bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white"
                }`}
              >
                {condition === "all" ? "All Stories" : condition}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Stories of Recovery & Hope
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Each story represents courage, resilience, and the transformative
              power of proper mental health care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Link
                key={story.id}
                href={`/success-stories/${story.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
              >
                {/* Story Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Story metadata overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span className="bg-brand-primary px-3 py-1 rounded-full text-xs font-medium">
                        {story.condition}
                      </span>
                      <span className="bg-black/50 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                        {story.treatmentDuration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-brand-primary font-semibold text-sm">
                        {story.patientName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-primary">
                        {story.patientName}
                      </p>
                      <p className="text-xs text-brand-gray">
                        {story.location}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-brand-gray mb-4 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-gray">
                      {new Date(story.date).toLocaleDateString()}
                    </span>
                    <span className="text-brand-primary text-sm font-semibold group-hover:underline">
                      Read Story →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No stories found
              </h3>
              <p className="text-gray-600">
                Try selecting a different condition filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Recovery Journey Starts Here
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Every story started with a single step. Take yours today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-white text-brand-primary rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Help Now
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-brand-primary transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
