"use client";
import { useState, useEffect } from "react";
import { getAllBlogs, deleteBlog } from "@/src/lib/blogService";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import AdminSidebar from "@/src/components/AdminSidebar";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, Search, BookOpen } from "lucide-react";

export default function BlogsListing() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blogsData = await getAllBlogs();
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId, blogTitle) => {
    if (
      !confirm(
        `Are you sure you want to delete "${blogTitle}"? This action cannot be undone.`
      )
    ) {
      return;
    }

    setDeleteLoading(blogId);
    try {
      await deleteBlog(blogId);
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Error deleting blog. Please try again.");
    } finally {
      setDeleteLoading(null);
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1 lg:ml-64 overflow-auto">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Manage Blogs
                  </h1>
                  <p className="text-gray-600">
                    View, edit, and manage all blog posts
                  </p>
                </div>
                <Link
                  href="/admin/blogs/create"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Blog
                </Link>
              </div>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search blogs by title, author, or content..."
                />
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Total: {blogs.length} blogs
                </span>
                {searchTerm && (
                  <span className="text-sm text-gray-600">
                    Showing: {filteredBlogs.length} results
                  </span>
                )}
              </div>
            </div>

            {/* Blog List */}
            <div className="bg-white rounded-lg shadow-sm border">
              {loading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading blogs...</p>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <BookOpen className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {searchTerm ? "No blogs found" : "No blogs yet"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {searchTerm
                      ? "Try adjusting your search terms"
                      : "Create your first blog post to get started"}
                  </p>
                  {!searchTerm && (
                    <Link
                      href="/admin/blogs/create"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Create First Blog
                    </Link>
                  )}
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {filteredBlogs.map((blog) => (
                    <div key={blog.id} className="p-6 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-medium text-gray-900 mb-2 truncate">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <span>by {blog.author}</span>
                            <span>•</span>
                            <span>
                              {new Date(blog.date).toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span>/{blog.slug}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <Link
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Link>
                          <Link
                            href={`/admin/blogs/edit/${blog.id}`}
                            className="inline-flex items-center px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(blog.id, blog.title)}
                            disabled={deleteLoading === blog.id}
                            className="inline-flex items-center px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            {deleteLoading === blog.id ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-700 mr-1"></div>
                            ) : (
                              <Trash2 className="h-4 w-4 mr-1" />
                            )}
                            Delete
                          </button>
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
