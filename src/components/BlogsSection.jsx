import React from 'react';
import { BLOGS_POSTS } from '../data/products';

export default function BlogsSection() {
  return (
    <section className="py-14 bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading matching Screenshot 4 */}
        <h2 className="text-center font-sans text-xl sm:text-2xl font-black text-neutral-900 uppercase tracking-wide mb-10">
          BLOGS & INSIGHTS
        </h2>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {BLOGS_POSTS.map((blog) => (
            <article key={blog.id} className="group flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                {/* Blog Image */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#5c131d] transition-colors leading-snug">
                  {blog.title}
                </h3>

                {/* Author & Date */}
                <p className="text-xs text-neutral-400 font-normal">
                  {blog.author} &nbsp; {blog.date}
                </p>

                {/* Excerpt */}
                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* View details link */}
              <div className="pt-1">
                <span className="text-xs text-neutral-700 font-medium group-hover:text-black group-hover:underline">
                  View details
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
