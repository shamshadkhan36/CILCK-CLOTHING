import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative bg-[#f8f8fa] border-b border-neutral-200 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Wine Pill CTA (Exact Screenshot 1) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Main Headline in deep bold tone */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.4rem] font-black tracking-tight text-[#3b1717] leading-[1.12]">
              Custom Merch <br />
              for Colleges <br />
              & Corporates
            </h1>

            {/* Subtitles matching screenshot 1 */}
            <div className="space-y-3 text-neutral-700 text-sm sm:text-base font-normal">
              <p className="font-semibold text-neutral-800">
                Custom T-Shirts, Hoodies, <br />
                Polos, Varsity Jackets & More
              </p>
              
              <p className="text-neutral-500 text-xs sm:text-sm">
                Made For College Fests, <br />
                Corporate Teams & Events
              </p>
            </div>

            {/* Pill Button: Deep Wine / Maroon with Arrow (Exact Screenshot 1) */}
            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-3 bg-[#5c131d] hover:bg-[#4a0f17] text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg group"
              >
                <span>Explore Products</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">⟶</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visuals (Mockup Rack & Models matching Screenshot 1) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-xl">
              
              {/* Composite Lifestyle Rack Banner */}
              <div className="relative h-[340px] sm:h-[420px] w-full bg-gradient-to-r from-neutral-100 to-neutral-200 overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1000&auto=format&fit=crop&q=80"
                  alt="Custom Merch Rack & Streetwear"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Visual Overlay mimicking rack with YOUR LOGO HERE mockups */}
                <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-5 text-white">
                  <div className="bg-white/90 backdrop-blur-md text-neutral-900 rounded-xl p-3.5 max-w-sm shadow-xl flex items-center justify-between border border-neutral-300">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold block">
                        Direct Mumbai Workshop
                      </span>
                      <p className="text-xs font-bold text-neutral-900">
                        Custom Designed Hoodies & Merch For Events
                      </p>
                    </div>
                    <span className="text-xs bg-[#5c131d] text-white font-bold px-3 py-1.5 rounded-lg">
                      Est. 2024
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
