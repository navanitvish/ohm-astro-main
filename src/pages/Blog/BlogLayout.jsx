import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '../../api/apiCalls';
import { BlogHeader } from './BlogHeader';
import { BlogCard } from './BlogCard';
import { Sidebar } from './Sidebar';
import { ErrorBoundary } from './ErrorBoundary';

const BlogLayout = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", { limit: 10, page: 1 }],
    queryFn: () => fetchBlogs({ limit: 10, page: 1 }),
  });

  if (isLoading) return (
    <div className="text-center p-8">
      <div className="inline-block w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4">Loading blog posts...</p>
    </div>
  );

  if (error) return <p className="text-center text-red-600 p-8">Error: {error.message}</p>;

  return (
    <ErrorBoundary>
      <div className="bg-gray-100 min-h-screen">
        <BlogHeader />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-rose-400 to-red-500 text-white w-full p-4 rounded-lg">
                  Latest Blog Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data?.data?.map((post) => (
                    <BlogCard key={post._id || post.id} post={post} />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default BlogLayout;