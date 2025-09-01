import React from 'react';
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogCard = ({ post, language = "english" }) => {
  if (!post) return null;
  
  // Extract language-specific content
  const content = post[language] || post.english || {};
  
  // Get category name if category exists
  const categoryName = post.category?.name || "";
  
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg
       transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
       border border-red-100 h-[400px] flex flex-col">
      
      {/* Image Container */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={post.thumbnail || "/placeholder-image.jpg"}
          alt={content.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
            e.target.onerror = null;
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Tag */}
        {categoryName && (
          <div className="absolute top-4 left-4 transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            <span className="bg-red-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
              {categoryName}
            </span>
          </div>
        )}
      </div>
      
      {/* Content Container */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-500 transition-colors">
            {content.title}
          </h3>
          <p className="text-gray-600 line-clamp-3 text-sm">
            {content.excerpt}
          </p>
          {content.keywords && content.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {content.keywords.slice(0, 2).map((keyword, index) => (
                <span
                  key={index}
                  className="bg-red-50 text-red-600 text-xs px-2.5 py-0.5 rounded-full"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with Read More Link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
            to={`/blog/${content.slug || post.slug}`}
            className="inline-flex items-center justify-center w-full
              bg-gradient-to-r from-amber-500 to-red-500 
              text-white rounded-full px-6 py-3
              text-sm font-medium transition-all duration-300
              hover:from-amber-600 hover:to-red-600 
              focus:outline-none focus:ring-2 focus:ring-red-500 
              focus:ring-offset-2 transform hover:-translate-y-0.5
              shadow-md hover:shadow-lg group"
          >
            Read More
            <ChevronRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};