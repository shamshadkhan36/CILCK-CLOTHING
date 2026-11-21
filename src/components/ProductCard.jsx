import React from 'react';
import { Star, ShoppingBag, Eye, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  const handleQuickWhatsAppBuy = (e) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0] || "Standard";
    const text = encodeURIComponent(
      `Hello Cilck Clothing! I would like to order:\n\n*${product.name}*\nPrice: ₹${product.price}\nSize: ${defaultSize}\nCategory: ${product.category}\n\nPlease confirm availability and payment details.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group cursor-pointer rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1"
    >
      {/* Product Image Box */}
      <div className="relative aspect-[4/5] bg-neutral-950 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover image overlay if available */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="bg-black/80 backdrop-blur-md border border-neutral-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="bg-red-600/90 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md">
              {product.discount}
            </span>
          )}
        </div>

        {/* GSM Spec Chip */}
        <div className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-neutral-300 text-[10px] font-mono font-medium px-2 py-0.5 rounded">
          {product.gsm}
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 bg-white/95 text-black hover:bg-white font-bold text-xs py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Select Options</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1.5">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="ml-1 font-bold text-white text-xs">{product.rating}</span>
            </div>
            <span className="text-neutral-600">•</span>
            <span className="text-[11px] text-neutral-500 font-mono">({product.reviewsCount} verified)</span>
          </div>

          {/* Product Title */}
          <h3 className="font-semibold text-sm text-neutral-100 group-hover:text-white line-clamp-1 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
            {product.fit}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-white font-mono">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-neutral-500 line-through font-mono">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-neutral-500 block">Taxes included</span>
          </div>

          {/* Quick WhatsApp Action Icon */}
          <button
            onClick={handleQuickWhatsAppBuy}
            title="Buy via WhatsApp"
            className="p-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/90 text-emerald-400 border border-emerald-800/60 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
          </button>
        </div>
      </div>
    </div>
  );
}
