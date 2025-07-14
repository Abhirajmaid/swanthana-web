"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "@/src/lib/blogService";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import SectionHeader from "@/src/components/common/SectionHeader";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getAllBlogs();
        // Get only the 3 most recent blogs
        setBlogs(blogsData.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
            <p className="mt-4 text-brand-gray">Loading blogs...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-white to-brand-secondary/3"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge={{ icon: <BookOpen />, text: "Latest Insights" }}
          title="From Our"
          gradientText="Blog"
          description="Stay updated with the latest insights, stories, and resources for mental health and wellness"
        />

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Link
              key={blog.id || index}
              href={`/blogs/${blog.slug}`}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {blog.category && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-brand-gray mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {blog.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-brand-gray mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-primary text-sm font-semibold group-hover:underline flex items-center gap-1">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                    <span className="text-brand-primary text-sm font-semibold">
                      {blog.author?.charAt(0) || "A"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                Explore More Stories
              </h3>
              <p className="text-brand-gray">
                Discover more insights, tips, and inspiring stories from our
                community
              </p>
            </div>
            <Link
              href="/blogs"
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              View All Blogs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
