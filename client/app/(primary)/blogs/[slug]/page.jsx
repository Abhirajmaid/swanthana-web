"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/src/lib/blogService";

export default function BlogDetailPage({ params }) {
  const { slug } = params;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getBlogBySlug(slug);
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setNotFoundError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="bg-white min-h-screen">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog...</p>
          </div>
        </div>
      </main>
    );
  }

  if (notFoundError || !blog) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-[100px] md:py-[160px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover object-center"
            priority
            sizes="100vw"
            width={1500}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-dark/60 to-white" />
        </div>
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg text-center">
            {blog.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
            <span className="inline-flex items-center gap-2 text-sm text-white/80">
              <svg
                className="w-4 h-4 text-brand-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
              </svg>
              {new Date(blog.date).toLocaleDateString()}
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-white/80">
              <svg
                className="w-4 h-4 text-brand-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
              </svg>
              By {blog.author}
            </span>
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-0 drop-shadow text-center">
            {blog.excerpt}
          </p>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl -z-1" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-brand-secondary/10 rounded-full blur-2xl -z-1" />
      </section>
      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose max-w-none text-brand-dark prose-headings:text-brand-primary prose-a:text-brand-primary prose-a:underline hover:prose-a:text-brand-dark">
            {/* Featured Image */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow mb-8">
              <Image
                src={blog.image}
                alt={blog.title}
                width={900}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Blog Content */}
            <div dangerouslySetInnerHTML={{ __html: blog.article }} />
          </article>
          <div className="mt-10 flex justify-between items-center">
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-brand-primary/90 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </a>
            <span className="text-brand-gray text-sm">
              Swanthana &middot; {new Date(blog.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
