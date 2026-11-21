import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, Shield, Truck, RefreshCw, Check } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 900);
  };

  const handleWhatsAppBuy = () => {
    const text = encodeURIComponent(
      `Hello Cilck Clothing! 🧵\nI want to place an order from ${BRAND_INFO.domain}:\n\n` +
      `*Product:* ${product.name}\n` +
      `*Size:* ${selectedSize}\n` +
      `*Color:* ${selectedColor}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Total Price:* ₹${(product.price * quantity).toLocaleString('en-IN')}\n\n` +
      `Please confirm shipping to my address and share payment UPI/details.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#101118] border border-neutral-800 rounded-2xl shadow-2xl text-white scrollbar-thin scrollbar-thumb-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-5 sm:p-8">
          
          {/* Left: Images */}
          <div className="space-y-3">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 relative">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono border border-neutral-700">
                {product.gsm}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === img ? 'border-white scale-105' : 'border-neutral-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info and Selection */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              {/* Badge & Category */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">
                  {product.category.replace('-', ' ')}
                </span>
                <span className="text-neutral-600">•</span>
                <div className="flex items-center text-amber-400 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="ml-1 font-bold">{product.rating}</span>
                  <span className="text-neutral-500 ml-1">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-neutral-500 line-through font-mono">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-600/90 text-white text-xs font-bold px-2 py-0.5 rounded">
                    {product.discount}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-400 mt-1">Inclusive of all taxes. Free shipping on orders over ₹999.</p>

              {/* Description */}
              <p className="text-neutral-300 text-xs sm:text-sm mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mt-5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Select Size: <span className="text-white">{selectedSize}</span>
                  </label>
                  <span className="text-[11px] text-neutral-400 cursor-pointer underline">Size Chart (Relaxed Fit)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-10 px-3.5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all border ${
                        selectedSize === sz
                          ? 'bg-white text-black border-white shadow-md'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Color: <span className="text-white font-normal">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`group relative p-1 rounded-full border transition-all ${
                          selectedColor === c.name ? 'border-white scale-110' : 'border-neutral-700'
                        }`}
                        title={c.name}
                      >
                        <span
                          className="block w-5 h-5 rounded-full border border-black/40"
                          style={{ backgroundColor: c.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-5 flex items-center gap-3">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Qty:
                </label>
                <div className="flex items-center border border-neutral-700 rounded-lg overflow-hidden bg-neutral-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-neutral-300 hover:bg-neutral-800 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-mono font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-neutral-300 hover:bg-neutral-800 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Features Bullets */}
              <div className="mt-5 pt-4 border-t border-neutral-800 space-y-1.5">
                {product.features?.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-neutral-800">
              {/* WhatsApp Instant Order */}
              <button
                onClick={handleWhatsAppBuy}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-950 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Order Instantly on WhatsApp</span>
              </button>

              {/* Add to Bag */}
              <button
                onClick={handleAddToCart}
                disabled={addedToast}
                className="w-full py-3.5 px-4 bg-white hover:bg-neutral-200 text-black rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{addedToast ? "Added to Bag ✓" : "Add to Shopping Bag"}</span>
              </button>
            </div>

            {/* Service Perks */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] text-neutral-400">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-neutral-400" />
                <span>All India Express</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Shield className="w-4 h-4 text-neutral-400" />
                <span>100% Genuine Cotton</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RefreshCw className="w-4 h-4 text-neutral-400" />
                <span>Easy Size Exchange</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
