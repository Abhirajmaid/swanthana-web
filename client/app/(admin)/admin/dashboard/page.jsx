"use client";
import { useState, useEffect } from "react";
import { getAllBlogs } from "@/src/lib/blogService";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import AdminSidebar from "@/src/components/AdminSidebar";
import Link from "next/link";
import { BookOpen, Plus, Calendar, User } from "lucide-react";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedThisMonth: 0,
    totalAuthors: 0,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blogsData = await getAllBlogs();
      setBlogs(blogsData);

      // Calculate stats
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      const publishedThisMonth = blogsData.filter((blog) => {
        const blogDate = new Date(blog.date);
        return (
          blogDate.getMonth() === currentMonth &&
          blogDate.getFullYear() === currentYear
        );
      }).length;

      const authors = [...new Set(blogsData.map((blog) => blog.author))];

      setStats({
        totalBlogs: blogsData.length,
        publishedThisMonth,
        totalAuthors: authors.length,
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1 lg:ml-64">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome to Swanthana Blog Management
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      Total Blogs
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.totalBlogs}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      Published This Month
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.publishedThisMonth}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Authors</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.totalAuthors}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/admin/blogs/create"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Blog
                </Link>
                <Link
                  href="/admin/blogs"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Manage Blogs
                </Link>
              </div>
            </div>

            {/* Recent Blogs */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Recent Blogs
                  </h2>
                  <Link
                    href="/admin/blogs"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View all
                  </Link>
                </div>
              </div>

              {loading ? (
                <div className="p-6">
                  <div className="animate-pulse space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex space-x-4">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : blogs.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No blogs found. Create your first blog!
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {blogs.slice(0, 5).map((blog) => (
                    <div key={blog.id} className="p-6 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-900 mb-1">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            by {blog.author} •{" "}
                            {new Date(blog.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Link
                            href={`/admin/blogs/edit/${blog.id}`}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            Edit
                          </Link>
                          <Link
                            href={`/blogs/${blog.slug}`}
                            className="text-gray-600 hover:text-gray-700 text-sm font-medium"
                            target="_blank"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
