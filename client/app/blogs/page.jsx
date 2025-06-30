"use client";
import Image from "next/image";
import { blogs } from "@/src/data/blogs";

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-[120px] md:py-[180px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80"
            alt="Blogs Hero"
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
            Swanthana Blogs
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-0 drop-shadow text-center">
            Insights, stories, and resources for families, professionals, and
            supporters of children with special needs.
          </p>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl -z-1" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-brand-secondary/10 rounded-full blur-2xl -z-1" />
      </section>
      {/* Blog List */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
              Latest Blogs
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Stay updated with the latest news, tips, and inspiring stories
              from Swanthana.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <a
                key={idx}
                href={`/blogs/${blog.slug}`}
                className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-brand-primary font-semibold mb-2">
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-brand-gray mb-4 flex-1">{blog.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-brand-primary font-medium">
                      {blog.author}
                    </span>
                    <span className="text-brand-primary text-sm font-semibold group-hover:underline">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
