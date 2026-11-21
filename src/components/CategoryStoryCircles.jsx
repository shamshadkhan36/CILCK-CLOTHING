import React from 'react';
import { CATEGORY_STORIES } from '../data/products';

export default function CategoryStoryCircles({ activeCategory, onSelectCategory }) {
  return (
    <section className="py-12 bg-white border-b border-neutral-100">
      <div className="container mx-auto px-4">
        
        {/* Section Heading matching Screenshot 2 */}
        <h2 className="text-center font-sans text-xl sm:text-2xl font-black text-neutral-900 uppercase tracking-wide mb-8">
          SHOP BY CATEGORY
        </h2>

        {/* Circular Category Row with Instagram Gradient Borders */}
        <div className="flex items-center justify-start sm:justify-center gap-5 sm:gap-7 overflow-x-auto pb-4 scrollbar-none px-2">
          {CATEGORY_STORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="flex flex-col items-center gap-2.5 shrink-0 group focus:outline-none"
              >
                {/* Gradient ring container */}
                <div className={`p-[2.5px] rounded-full transition-transform duration-300 group-hover:scale-105 ${
                  isSelected
                    ? 'bg-black shadow-md'
                    : 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600'
                }`}>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-[2px] overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Title below circle */}
                <span className={`text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-colors ${
                  isSelected ? 'text-black font-extrabold underline underline-offset-4' : 'text-neutral-700 group-hover:text-black'
                }`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
