import React from 'react';
import { Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function ProductCard({ product, onQuickView }) {
  return (
    <div
      onClick={() => onQuickView(product)}
      className="group cursor-pointer bg-white rounded-xl border border-neutral-200/90 hover:border-neutral-400 p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
    >
      <div>
        {/* 1. TOP HEADER & BADGES (Exact Screenshot 3) */}
        <div className="flex justify-between items-start gap-2 mb-3">
          <div>
            <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase block">
              CUSTOMIZE
            </span>
            <h4 className="font-sans font-black text-xs sm:text-sm text-neutral-900 uppercase tracking-tight">
              {product.subHeaderTitle || product.name.split(' ')[1] || "APPAREL"}
            </h4>
            <span className="text-[11px] text-neutral-600 block -mt-0.5">
              With Your Own Logo/Design
            </span>

            {/* Fabric / GSM Pill Badge */}
            {product.fabricPill && (
              <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-black text-white text-[9px] font-mono font-bold uppercase tracking-wider">
                {product.fabricPill}
              </span>
            )}
          </div>

          {/* Right: Dark Navy Pack Badge */}
          <span className="px-2.5 py-1 rounded bg-[#0f172a] text-white text-[10px] font-bold tracking-wider shrink-0">
            {product.packBadge || "Pack Of 2"}
          </span>
        </div>

        {/* 2. MOCKUP APPAREL CANVAS (Front & Back Mockups + Zoomed Collar Callout with Red Arrow) */}
        <div className="relative aspect-[4/3] bg-[#fbfbfb] rounded-lg p-2 overflow-hidden flex items-center justify-center border border-neutral-100">
          
          {/* Front & Back Garments Display */}
          <div className="flex items-center justify-center gap-3 w-full h-full">
            {/* Front Mockup */}
            <div 
              className="relative w-28 h-36 rounded-md shadow-sm border border-neutral-200 flex flex-col items-center justify-center text-center p-1.5 transition-transform group-hover:scale-105"
              style={{ backgroundColor: product.mockupFrontColor || "#1e3a5f" }}
            >
              <div className="border border-dashed border-white/50 px-1.5 py-1 rounded text-[7px] text-white font-mono uppercase tracking-wider">
                YOUR LOGO HERE
              </div>
            </div>

            {/* Back Mockup */}
            <div 
              className="relative w-28 h-36 rounded-md shadow-sm border border-neutral-200 flex flex-col items-center justify-center text-center p-1.5 transition-transform group-hover:scale-105"
              style={{ backgroundColor: product.mockupBackColor || "#1e3a5f" }}
            >
              <div className="border border-dashed border-white/50 px-2 py-2 rounded text-[7px] text-white font-mono uppercase tracking-wider">
                YOUR DESIGN HERE
              </div>
            </div>
          </div>

          {/* Zoomed Collar Callout Circle with Curved Red Pointer (Exact Screenshot 3) */}
          <div className="absolute bottom-2 left-2 flex items-end gap-1 pointer-events-none">
            {/* Round Zoom Bubble */}
            <div 
              className="w-10 h-10 rounded-full border-2 border-emerald-700 shadow-md overflow-hidden bg-cover bg-center shrink-0"
              style={{ backgroundColor: product.collarZoomColor || "#1e3a5f" }}
            />
            
            {/* Curved Red Arrow Indicator */}
            <svg className="w-5 h-6 text-red-600 shrink-0 -ml-1 -mb-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L10.59 3.41L18.17 11H2V13H18.17L10.59 20.59L12 22L22 12L12 2Z" transform="rotate(-45 12 12)" />
            </svg>
          </div>

          {/* Sizes Box Badge (Exact Screenshot 3) */}
          <div className="absolute bottom-2 right-2 bg-white/95 border border-neutral-300 rounded p-1 text-[8px] text-center shadow-sm max-w-[120px]">
            <span className="font-bold text-neutral-800 block text-[7.5px] uppercase">Available Sizes</span>
            <span className="font-mono font-bold text-neutral-900 block tracking-tight">S | M | L | XL | 2XL</span>
            <span className="text-[6.5px] text-neutral-500 line-clamp-1">For Events & Gatherings</span>
          </div>

          {/* Wishlist Heart Icon at top right */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              alert(`Added ${product.name} to wishlist!`);
            }}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-neutral-600 hover:text-red-500 transition-colors shadow-sm"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* 3. TITLE & PRICING (Exact Screenshot 3) */}
        <div className="mt-3 space-y-1">
          <h3 className="font-medium text-xs sm:text-sm text-neutral-800 line-clamp-1 group-hover:text-black">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2">
            <span className="font-sans font-black text-sm sm:text-base text-neutral-900">
              Rs. {product.price.toLocaleString('en-IN')}.00
            </span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-400 line-through">
                Rs. {product.originalPrice.toLocaleString('en-IN')}.00
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 4. COLOR SWATCHES ROW (Exact Screenshot 3 with +15, +8, +3) */}
      <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {product.colors && product.colors.slice(0, 4).map((c, i) => (
            <span
              key={i}
              className="w-3.5 h-3.5 rounded-full border border-neutral-300 inline-block shadow-xs"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
          {product.moreColorsCount && (
            <span className="text-[10px] text-neutral-500 font-medium">
              +{product.moreColorsCount}
            </span>
          )}
        </div>

        <span className="text-[11px] font-bold text-[#5c131d] group-hover:underline">
          Customize ⟶
        </span>
      </div>
    </div>
  );
}
