import React from 'react';
import { CATEGORIES } from '../data/products';

export default function Categories({ activeCategory, onSelectCategory }) {
  return (
    <div className="py-4 overflow-x-auto scrollbar-none">
      <div className="flex items-center gap-2 min-w-max pb-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                isActive
                  ? 'bg-white text-black border-white shadow-lg shadow-white/10 scale-[1.02]'
                  : 'bg-neutral-900/80 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800'
              }`}
            >
              <span>{cat.name}</span>
              {cat.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-medium ${
                    isActive
                      ? 'bg-black/10 text-black'
                      : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {cat.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
