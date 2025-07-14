"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getBlogById, updateBlog, generateSlug } from "@/src/lib/blogService";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import AdminSidebar from "@/src/components/AdminSidebar";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    image: "",
    date: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  const fetchBlog = async () => {
    try {
      const blog = await getBlogById(blogId);

      // Convert HTML content back to plain text for editing
      const plainContent = blog.article
        ? blog.article.replace(/<p>/g, "").replace(/<\/p>/g, "\n\n").trim()
        : "";

      setFormData({
        title: blog.title || "",
        slug: blog.slug || "",
        excerpt: blog.excerpt || "",
        content: plainContent,
        author: blog.author || "",
        image: blog.image || "",
        date: blog.date || "",
      });
    } catch (error) {
      console.error("Error fetching blog:", error);
      alert("Error loading blog. Please try again.");
      router.push("/admin/blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-generate slug when title changes
    if (name === "title") {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(value),
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.slug.trim()) {
      newErrors.slug = "Slug is required";
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = "Excerpt is required";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSaving(true);

    try {
      const updateData = {
        ...formData,
        // Convert simple content to HTML format similar to existing blogs
        article: formData.content
          .split("\n\n")
          .map((paragraph) =>
            paragraph.trim() ? `<p>${paragraph.trim()}</p>` : ""
          )
          .filter(Boolean)
          .join("\n      "),
      };

      await updateBlog(blogId, updateData);
      router.push("/admin/blogs");
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Error updating blog. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="flex h-screen bg-gray-100">
          <AdminSidebar />
          <div className="flex-1 lg:ml-64 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog...</p>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100">
        <AdminSidebar />

        <div className="flex-1 lg:ml-64 overflow-auto">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4">
                <Link
                  href="/admin/blogs"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Blogs
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mt-4">
                Edit Blog
              </h1>
              <p className="text-gray-600">Modify the blog post details</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                {/* Title */}
                <div className="mb-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.title ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter blog title"
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                  )}
                </div>

                {/* Slug */}
                <div className="mb-6">
                  <label
                    htmlFor="slug"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Slug *
                  </label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.slug ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="auto-generated-from-title"
                  />
                  {errors.slug && (
                    <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    URL: /blogs/{formData.slug}
                  </p>
                </div>

                {/* Author and Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="author"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Author *
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.author ? "border-red-300" : "border-gray-300"
                      }`}
                      placeholder="Author name"
                    />
                    {errors.author && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.author}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Publication Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div className="mb-6">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Featured Image URL *
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.image ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="https://example.com/image.jpg"
                  />
                  {errors.image && (
                    <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                  )}
                </div>

                {/* Excerpt */}
                <div className="mb-6">
                  <label
                    htmlFor="excerpt"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Excerpt *
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={3}
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.excerpt ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Brief description of the blog post"
                  />
                  {errors.excerpt && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.excerpt}
                    </p>
                  )}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Content *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows={15}
                    value={formData.content}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.content ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Write your blog content here. Separate paragraphs with double line breaks."
                  />
                  {errors.content && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.content}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    Tip: Separate paragraphs with double line breaks (press
                    Enter twice)
                  </p>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-4">
                  <Link
                    href="/admin/blogs"
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {saving ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </div>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
