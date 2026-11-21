import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Lock } from 'lucide-react';
import { DESTINY_NAV_LINKS } from '../data/products';

export default function Navbar({
  brandInfo,
  cartCount,
  onOpenCart,
  onSelectCategory,
  activeCategory,
  onOpenAdmin,
  searchQuery,
  setSearchQuery
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      
      {/* 1. TOP ANNOUNCEMENT TICKER (Exact Destiny style: Black bg, yellow highlights, marquee) */}
      <div className="bg-black text-white py-2 overflow-hidden select-none text-xs">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-4 font-sans tracking-wide text-[11px] sm:text-xs">
              <span>
                Get <strong className="text-yellow-400 font-bold">10% OFF</strong> on All Orders | <strong className="text-yellow-400 font-bold">FREE Shipping</strong> | <strong>Shop Now!</strong>
              </span>
              <span className="text-neutral-500">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. MAIN NAVBAR (Clean White background, Destiny font style) */}
      <div className="container mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-neutral-800 hover:text-black"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo: Clean modern Wordmark like "Destiny" in screenshot 1 */}
        <a href="#" className="flex items-baseline gap-1 group">
          <span className="font-sans font-normal text-3xl sm:text-4xl tracking-tight text-neutral-900 capitalize">
            {brandInfo.shortName || "Cilck"}
          </span>
          <span className="text-[10px] font-mono text-neutral-400 ml-1 hidden sm:inline">ESTD 2024</span>
        </a>

        {/* Desktop Nav Links (Exact Screenshot 1: FAREWELL, HOODIES & JACKETS, POLO T-SHIRTS, T-SHIRTS, VARSITY, KIDS T-SHIRTS, ACCESSORIES) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {DESTINY_NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onSelectCategory(link.id)}
              className={`text-xs tracking-wider uppercase font-medium transition-colors ${
                activeCategory === link.id
                  ? 'text-black font-extrabold border-b-2 border-black pb-0.5'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Action Icons: Search, Wishlist, Cart */}
        <div className="flex items-center gap-3 sm:gap-4 text-neutral-800">
          
          {/* Search Toggle */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-300 animate-in fade-in">
                <Search className="w-4 h-4 text-neutral-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-neutral-900 focus:outline-none w-36 sm:w-48"
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)} className="text-xs text-neutral-500 ml-1">✕</button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-1.5 hover:text-black transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5 stroke-[1.75]" />
              </button>
            )}
          </div>

          {/* Wishlist Heart Icon */}
          <button
            onClick={() => alert("Wishlist: Click any product's heart icon to save for later!")}
            className="p-1.5 hover:text-black transition-colors hidden sm:block"
            title="Wishlist"
          >
            <Heart className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Cart Icon with badge 0 (exact screenshot 1) */}
          <button
            onClick={onOpenCart}
            className="relative p-1.5 hover:text-black transition-colors"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            <span className="absolute -top-1 -right-1 bg-neutral-800 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          {/* Admin Control Link */}
          <button
            onClick={onOpenAdmin}
            className="text-[11px] font-mono text-neutral-500 hover:text-black flex items-center gap-1 border border-neutral-300 rounded px-2 py-1 ml-1"
            title="Open Admin Dashboard"
          >
            <Lock className="w-3 h-3 text-neutral-600" />
            <span className="hidden sm:inline">Admin</span>
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 py-4 space-y-2 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {DESTINY_NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelectCategory(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 text-xs font-semibold rounded-lg tracking-wider uppercase ${
                  activeCategory === link.id ? 'bg-neutral-900 text-white' : 'text-neutral-800 hover:bg-neutral-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-200 flex justify-between items-center text-xs">
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="text-neutral-600 font-mono font-bold flex items-center gap-1"
            >
              <Lock className="w-3.5 h-3.5" /> Admin Dashboard
            </button>
            <span className="text-neutral-400 font-mono text-[11px]">GTB Nagar, Mumbai</span>
          </div>
        </div>
      )}

    </header>
  );
}
