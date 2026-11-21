import React from 'react';
import { ArrowUpRight, Flame, ShieldCheck, Truck, Sparkles, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function Hero({ onShopClick, onCustomClick }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 md:py-16 lg:py-20 border-b border-neutral-800/80 bg-gradient-to-b from-[#0d0e16] via-[#090a0f] to-[#090a0f]">
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neutral-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700/80 text-xs text-neutral-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-white tracking-wide uppercase font-mono text-[11px]">
                MUMBAI STREET CULTURE • ESTD 2024
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
              RAW CUTS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-600">
                HEAVY DRAPES.
              </span> <br />
              MUMBAI CRAFTED.
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Engineered with <strong className="text-white">240+ GSM bio-washed French terry</strong>, drop-shoulder silhouettes, and bespoke tailoring. Shop signature streetwear or get high-volume custom merchandise produced for your brand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onShopClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-black hover:bg-neutral-200 rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE ALL DROPS</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onCustomClick}
                className="w-full sm:w-auto px-6 py-3.5 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-white rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>CUSTOM MERCH & BULK</span>
              </button>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-neutral-800/80 text-left">
              <div className="space-y-1">
                <p className="text-white font-bold text-xs sm:text-sm font-mono">240-400 GSM</p>
                <p className="text-neutral-500 text-[11px] leading-tight">Super-Combed Bio Cotton</p>
              </div>
              <div className="space-y-1">
                <p className="text-white font-bold text-xs sm:text-sm font-mono">DIRECT WORKSHOP</p>
                <p className="text-neutral-500 text-[11px] leading-tight">GTB Nagar, Mumbai Hub</p>
              </div>
              <div className="space-y-1">
                <p className="text-white font-bold text-xs sm:text-sm font-mono">WHATSAPP EASY</p>
                <p className="text-neutral-500 text-[11px] leading-tight">1-Tap Instant Ordering</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700/60 bg-neutral-900 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80"
                  alt="Cilck Clothing Streetwear Drop"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md border border-neutral-700/80 px-3 py-1.5 rounded-full text-xs font-semibold text-white">
                  <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>2024 DROP #01</span>
                </div>

                {/* Brand Watermark Badge in Card */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/80 border border-neutral-700 p-1 backdrop-blur-md">
                  <img src="/logo.svg" alt="Badge" className="w-full h-full object-contain" />
                </div>

                {/* Bottom Overlay Card Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-bold text-sm">Cilck 'Est. 24' Heavyweight Drop</p>
                      <p className="text-neutral-400 text-xs font-mono">Pure 240 GSM • Drop Shoulder</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs line-through text-neutral-500 block">₹1,499</span>
                      <span className="text-lg font-black text-white font-mono">₹899</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1 border-t border-neutral-800">
                    <span className="text-emerald-400 font-medium">● In Stock • Ready for Dispatch</span>
                    <span>Sizes: S to XXL</span>
                  </div>
                </div>
              </div>

              {/* Floating Mumbai Stamp */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-neutral-900 text-white border border-neutral-700 p-3 rounded-xl shadow-xl backdrop-blur-md">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Tailoring Unit</p>
                <p className="text-xs font-bold text-white">Opp. IOB, GTB Nagar Station</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
