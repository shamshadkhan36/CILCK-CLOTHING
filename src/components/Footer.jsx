import React from 'react';
import { BRAND_INFO } from '../data/products';
import { MessageCircle, Phone, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080c] border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 p-1">
                <img src="/logo.svg" alt="Cilck Clothing Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-display font-black text-lg text-white tracking-wider">
                  CILCK CLOTHING
                </span>
                <p className="text-[10px] text-neutral-500 font-mono">ESTD 2024 • MUMBAI</p>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Mumbai-born streetwear label crafting heavyweight oversized tees, luxury fleece hoodies, varsity jackets, and personalized custom merchandise with direct workshop craftsmanship.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-600 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-pink-400 hover:border-pink-600 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-sky-400 hover:border-sky-600 transition-colors"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Shop Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Shop Collections</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={() => onSelectCategory('all')} className="hover:text-white transition-colors">
                  All Drops 2024
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('oversized-tees')} className="hover:text-white transition-colors">
                  Oversized T-Shirts (240 GSM)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('hoodies')} className="hover:text-white transition-colors">
                  Heavyweight Hoodies (380 GSM)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('jackets')} className="hover:text-white transition-colors">
                  Vintage Varsity Jackets
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('caps')} className="hover:text-white transition-colors">
                  Embroidered Street Caps
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Custom & B2B */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Custom & B2B</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={() => onSelectCategory('custom-bulk')} className="hover:text-white transition-colors">
                  Bulk Merchandise Printing
                </button>
              </li>
              <li>
                <a href="#custom-bulk" className="hover:text-white transition-colors">
                  College Fest T-Shirts
                </a>
              </li>
              <li>
                <a href="#custom-bulk" className="hover:text-white transition-colors">
                  Corporate & Startup Apparel
                </a>
              </li>
              <li>
                <a href="#custom-bulk" className="hover:text-white transition-colors">
                  High Density Puff & DTF Print
                </a>
              </li>
              <li>
                <a href="#store-location" className="hover:text-white transition-colors">
                  Visit Mumbai Tailoring Unit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Workshop & Store</h4>
            <div className="space-y-2 text-[11px] text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                <span>Opp. Indian Overseas Bank, GTB Nagar Station, Mumbai 400022</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span className="font-mono text-neutral-300">{BRAND_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span className="font-mono">{BRAND_INFO.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} CILCK CLOTHING ({BRAND_INFO.domain}). All rights reserved. ESTD 2024.</p>
          
          <div className="flex items-center gap-4 text-neutral-400">
            <span>UPI • GPay • PhonePe • COD • WhatsApp Order</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
