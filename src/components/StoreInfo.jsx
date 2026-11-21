import React from 'react';
import { MapPin, Phone, Clock, Globe, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function StoreInfo() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND_INFO.address)}`;

  const handleCall = () => {
    window.location.href = `tel:${BRAND_INFO.phone}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi Cilck Clothing! I would like to visit your GTB Nagar, Mumbai store or speak to customer service.`);
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="store-location" className="py-16 md:py-20 bg-[#0d0e15] border-t border-neutral-800/80">
      <div className="container mx-auto px-4">
        
        <div className="max-w-5xl mx-auto rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-10 relative overflow-hidden">
          
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Info */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span className="font-mono uppercase font-bold text-[11px]">Flagship Store & Workshop</span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  VISIT CILCK CLOTHING MUMBAI
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  Experience our fabric textures, oversized fits, and custom tailoring in person. Located right at GTB Nagar Railway Station.
                </p>
              </div>

              {/* Detail Cards */}
              <div className="space-y-3 text-xs">
                
                {/* Address */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Physical Address:</strong>
                    <p className="text-neutral-300 leading-snug mt-0.5">
                      {BRAND_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Store & Workshop Hours:</strong>
                    <p className="text-neutral-300 leading-snug mt-0.5 font-mono">
                      {BRAND_INFO.timings}
                    </p>
                  </div>
                </div>

                {/* Phone & Domain */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-mono">Call / Inquiries</span>
                      <a href={`tel:${BRAND_INFO.phone}`} className="text-white font-mono font-bold hover:underline">
                        {BRAND_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-mono">Official Domain</span>
                      <span className="text-white font-mono font-bold">
                        {BRAND_INFO.domain}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white text-black hover:bg-neutral-200 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <button
                  onClick={handleWhatsApp}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat With Store</span>
                </button>
              </div>

            </div>

            {/* Right Col: Visual Map / Badge Graphic */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-neutral-950 rounded-2xl border border-neutral-800 text-center relative">
              <div className="w-32 h-32 rounded-full bg-neutral-900 border-2 border-neutral-700 p-2 shadow-2xl mb-4 relative group">
                <img src="/logo.svg" alt="Cilck Clothing" className="w-full h-full object-contain" />
                <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                </span>
              </div>

              <h4 className="font-display text-lg font-bold text-white tracking-wide">
                CILCK CLOTHING
              </h4>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                ESTD 2024 • GTB NAGAR MUMBAI
              </p>

              <div className="mt-4 pt-4 border-t border-neutral-800/80 w-full text-left space-y-1.5 text-[11px] text-neutral-400">
                <p>🚇 <strong>Station:</strong> GTB Nagar Railway Station (1 min walk)</p>
                <p>🏦 <strong>Landmark:</strong> Opposite Indian Overseas Bank</p>
                <p>📍 <strong>Pincode:</strong> 400022, Mumbai</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
