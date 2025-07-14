"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { successStories } from "@/src/data/successStories";
import Link from "next/link";

export default function SuccessStoryDetailPage({ params }) {
  const { slug } = params;
  const [story, setStory] = useState(null);
  const [relatedStories, setRelatedStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentStory = successStories.find((s) => s.slug === slug);
    if (currentStory) {
      setStory(currentStory);

      // Get related stories (same condition, different story)
      const related = successStories
        .filter(
          (s) =>
            s.condition === currentStory.condition && s.id !== currentStory.id
        )
        .slice(0, 3);
      setRelatedStories(related);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <main className="bg-white min-h-screen">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
            <p className="mt-4 text-brand-gray">Loading story...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-primary/5 via-brand-primary/10 to-brand-primary/5 py-[100px] md:py-[180px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover object-center"
            priority
            sizes="100vw"
            width={1500}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-dark/60 to-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <div className="text-center mb-6">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-4">
              Success Story
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              {story.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6 drop-shadow">
              {story.excerpt}
            </p>
          </div>

          {/* Patient Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-white/80 text-sm mb-1">Patient</div>
              <div className="text-white font-semibold">
                {story.patientName}
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-white/80 text-sm mb-1">Condition</div>
              <div className="text-white font-semibold text-sm">
                {story.condition}
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-white/80 text-sm mb-1">Treatment</div>
              <div className="text-white font-semibold">
                {story.treatmentDuration}
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-white/80 text-sm mb-1">Location</div>
              <div className="text-white font-semibold">{story.location}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Story Content */}
            <div className="md:col-span-2">
              <div className="prose max-w-none text-brand-dark prose-headings:text-brand-primary prose-a:text-brand-primary prose-a:underline hover:prose-a:text-brand-dark prose-p:text-lg prose-p:leading-relaxed">
                <div className="bg-brand-primary/5 border-l-4 border-brand-primary p-6 rounded-r-lg mb-8">
                  <h3 className="text-xl font-bold text-brand-primary mb-3">
                    Recovery Journey
                  </h3>
                  <p className="text-brand-gray mb-0">
                    This is {story.patientName}'s personal account of her
                    recovery journey at Swanthana. Her story may contain
                    sensitive content related to mental health challenges.
                  </p>
                </div>

                <div dangerouslySetInnerHTML={{ __html: story.story }} />
              </div>

              {/* Testimonial Quote */}
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-8 rounded-2xl text-white mt-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl opacity-50">"</div>
                  <div>
                    <p className="text-lg italic mb-4 leading-relaxed">
                      {story.testimonial}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {story.patientName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{story.patientName}</p>
                        <p className="text-white/80 text-sm">
                          {story.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Current Status
                </h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  {story.currentStatus}
                </p>
              </div>

              {/* Treatment Summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">
                  Treatment Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 text-sm">
                      Age at Treatment:
                    </span>
                    <span className="font-semibold text-blue-900">
                      {story.age}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 text-sm">Duration:</span>
                    <span className="font-semibold text-blue-900">
                      {story.treatmentDuration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 text-sm">Condition:</span>
                    <span className="font-semibold text-blue-900 text-right text-sm">
                      {story.condition}
                    </span>
                  </div>
                </div>
              </div>

              {/* Get Help CTA */}
              <div className="bg-brand-primary text-white rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                <p className="text-sm mb-4 text-white/90">
                  If you're struggling with similar challenges, we're here to
                  help.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-white text-brand-primary px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                Related Success Stories
              </h2>
              <p className="text-brand-gray">
                More inspiring stories from women who overcame similar
                challenges
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedStories.map((relatedStory) => (
                <Link
                  key={relatedStory.id}
                  href={`/success-stories/${relatedStory.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={relatedStory.image}
                      alt={relatedStory.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-brand-primary px-3 py-1 rounded-full text-xs font-medium text-white">
                        {relatedStory.condition}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                      {relatedStory.title}
                    </h3>
                    <p className="text-brand-gray text-sm line-clamp-2">
                      {relatedStory.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-brand-primary/90 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Success Stories
            </Link>
            <span className="text-brand-gray text-sm">
              Swanthana • {new Date(story.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
