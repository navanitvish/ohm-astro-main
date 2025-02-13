import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../api/apiCalls";
import { Clock, Calendar, Share2 } from "lucide-react";

const BlogDetails = () => {
  const { slug } = useParams();

  const { data: blogData, isLoading, error } = useQuery({
    queryKey: ["blogDetails", slug],
    queryFn: () => fetchBlogs({ slug }),
  });

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 border-4 border-red-200 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-t-red-500 rounded-full animate-spin"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 animate-pulse">Loading your article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <div className="text-center text-red-500 bg-red-50 px-8 py-6 rounded-xl shadow-sm">
          <p className="text-lg font-medium">Error loading blog post: {error.message}</p>
        </div>
      </div>
    );
  }

  const blog = blogData?.data[0];
  if (!blog) {
    return (
      <div className="min-h-[400px] flex items-center justify-center p-4">
        <div className="text-center text-red-500 bg-red-50 px-8 py-6 rounded-xl shadow-sm">
          <p className="text-lg font-medium">Blog post not found</p>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <div className="w-full bg-gradient-to-r from-red-50 via-amber-50 to-red-50">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <div className="space-y-6">
            {blog.category && (
              <span className="inline-block bg-red-100 text-red-600 text-sm px-4 py-1.5 rounded-full font-medium transition-transform hover:scale-105">
                {blog.category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {blog.title}
            </h1>
            <p className="text-lg font-semibold text-gray-600 max-w-4xl">
              {blog.metaDescription}
            </p>

            {/* Author and Share Section */}
            <div className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-medium">
                    {blog.author?.[0] || "A"}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {blog.author || "Anonymous"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Enhanced Image Container */}
          <div className="mt-12 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={blog.thumbnail || "/src/assets/photo1.png"}
                alt={blog.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div 
          className="prose prose-lg text-xl font-medium max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Enhanced Keywords and Metadata */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          {blog.keywords && blog.keywords.length > 0 && (
            <div className="mb-8">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {blog.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-red-50 text-red-600 text-sm px-4 py-1.5 rounded-full hover:bg-red-100 transition-colors cursor-pointer"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <p>
                Published {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            {blog.updatedAt !== blog.createdAt && (
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <p>
                  Updated {new Date(blog.updatedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;