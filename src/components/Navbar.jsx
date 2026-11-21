import React, { useState } from 'react';
import { 
  ShoppingBag, MessageCircle, Menu, X, Search, ChevronDown, 
  MapPin, ShieldCheck, Truck, Lock, UserCheck, Sparkles 
} from 'lucide-react';
import { NAV_CATEGORIES } from '../data/products';

export default function Navbar({ 
  brandInfo, 
  cartCount, 
  onOpenCart, 
  onSelectCategory, 
  onSelectSubcategory,
  activeCategory,
  activeSubcategory,
  onOpenTrackOrder,
  onOpenAdmin,
  searchQuery,
  setSearchQuery
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(`Hi Cilck Clothing! I am visiting ${brandInfo.domain} and have an inquiry.`);
    window.open(`https://wa.me/${brandInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0c0d14]/95 backdrop-blur-md border-b border-neutral-800">
      
      {/* 1. TOP ANNOUNCEMENT TICKER (Destiny Style) */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-300 text-xs py-2 px-4 border-b border-neutral-800 flex justify-between items-center text-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-1">
          <p className="flex items-center gap-1.5 font-medium tracking-wide text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{brandInfo.announcement || "🔥 FREE SHIPPING ALL OVER INDIA ON ORDERS ABOVE ₹999"}</span>
          </p>
          <div className="hidden md:flex items-center gap-4 text-neutral-400 text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-400" /> GTB Nagar, Mumbai Hub
            </span>
            <span className="text-neutral-600">•</span>
            <button 
              onClick={onOpenTrackOrder}
              className="text-neutral-300 hover:text-white underline font-mono flex items-center gap-1"
            >
              <Truck className="w-3 h-3" /> Track Order
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={onOpenAdmin}
              className="text-neutral-300 hover:text-amber-400 flex items-center gap-1 font-mono font-bold"
              title="Open Admin Dashboard"
            >
              <Lock className="w-3 h-3 text-amber-400" /> Admin
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Logo, Search, Direct WhatsApp & Cart) */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full bg-neutral-900 border border-neutral-700 p-1 overflow-hidden transition-transform group-hover:scale-105 shadow-lg shadow-black/50 shrink-0">
            <img 
              src="/logo.svg" 
              alt="Cilck Clothing Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-white uppercase group-hover:text-neutral-200">
                {brandInfo.name.split(' ')[0]}
              </span>
              <span className="text-xs uppercase tracking-widest px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700 font-mono font-bold">
                2024
              </span>
            </div>
            <p className="text-[10px] tracking-widest text-neutral-400 uppercase -mt-1 font-semibold">
              Clothing • Mumbai
            </p>
          </div>
        </a>

        {/* Search Bar (Destiny Style central search) */}
        <div className="hidden md:flex flex-1 max-w-md relative mx-4">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search oversized tees, varsity jackets, hoodies, GSM..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900/90 border border-neutral-700/80 rounded-xl pl-10 pr-8 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Admin Button on Mobile/Tablet */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white px-2.5 py-2 rounded-lg text-xs font-bold font-mono transition-all"
            title="Open Store Admin Dashboard"
          >
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Admin</span>
          </button>

          {/* Quick WhatsApp Inquiry */}
          <button
            onClick={handleWhatsAppContact}
            className="hidden sm:flex items-center gap-2 bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/40 text-emerald-400 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-500/20" />
            <span className="hidden lg:inline">WhatsApp Order</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-lg shadow-black/40 group"
          >
            <ShoppingBag className="w-4 h-4 text-neutral-300 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Bag</span>
            <span className="bg-white text-black text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* 3. MULTI-LEVEL NAVIGATION MENU (Exact Destiny Clothing Hierarchy) */}
      <nav className="hidden lg:block border-t border-neutral-800/80 bg-[#090a10]">
        <div className="container mx-auto px-4 flex items-center gap-1">
          {NAV_CATEGORIES.map((cat) => {
            const isCatActive = activeCategory === cat.id;

            if (cat.hasDropdown) {
              return (
                <div
                  key={cat.id}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(cat.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                      isCatActive
                        ? 'text-white bg-neutral-800'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:rotate-180 transition-transform" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full pt-1 w-64 hidden group-hover:block z-50">
                    <div className="bg-[#12131c] border border-neutral-800 rounded-xl p-2 shadow-2xl space-y-1 backdrop-blur-xl">
                      {cat.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onSelectSubcategory(cat.id, sub.id);
                            setActiveDropdown(null);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                            activeSubcategory === sub.id
                              ? 'bg-white text-black font-bold'
                              : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-wider font-bold transition-all rounded-lg my-1 ${
                  isCatActive
                    ? 'text-white bg-neutral-800'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                <span>{cat.name}</span>
                {cat.badge && (
                  <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono px-1.5 py-0.2 rounded">
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={onOpenTrackOrder}
              className="text-xs text-neutral-400 hover:text-white font-medium flex items-center gap-1.5 py-1"
            >
              <Truck className="w-3.5 h-3.5 text-neutral-400" />
              <span>Track Order</span>
            </button>
            <a
              href="#store-location"
              className="text-xs text-neutral-400 hover:text-white font-medium flex items-center gap-1.5 py-1"
            >
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>Mumbai Store</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0f17] border-b border-neutral-800 px-4 py-4 space-y-3 animate-in fade-in duration-200">
          
          {/* Mobile Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search drops, GSM, fits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1 pt-1">
            {NAV_CATEGORIES.map((cat) => (
              <div key={cat.id} className="border-b border-neutral-800/60 pb-1">
                <button
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 px-2 text-xs font-bold rounded-lg flex items-center justify-between ${
                    activeCategory === cat.id ? 'bg-white text-black' : 'text-neutral-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.badge && (
                    <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 rounded">{cat.badge}</span>
                  )}
                </button>

                {/* Subcategories list on mobile */}
                {cat.subcategories && (
                  <div className="pl-4 pr-1 py-1 space-y-1">
                    {cat.subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onSelectSubcategory(cat.id, sub.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left py-1 text-[11px] block transition-colors ${
                          activeSubcategory === sub.id ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        • {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenTrackOrder();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-neutral-900 border border-neutral-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4 text-sky-400" />
              <span>Track Existing Order</span>
            </button>

            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-neutral-900 border border-neutral-700 text-amber-400 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Open Admin Dashboard</span>
            </button>

            <button
              onClick={handleWhatsAppContact}
              className="w-full py-2.5 bg-emerald-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+{brandInfo.whatsappNumber})</span>
            </button>
          </div>

        </div>
      )}

    </header>
  );
}
