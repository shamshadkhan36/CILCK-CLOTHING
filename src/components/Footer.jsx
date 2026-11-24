import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function Footer({ onSelectCategory, onOpenTrackOrder }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white text-neutral-800 border-t border-neutral-200 text-xs">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        
        {/* 5-Column Grid matching Screenshot 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info & Socials */}
          <div className="space-y-4">
            <h3 className="font-sans text-3xl font-normal text-neutral-900 capitalize tracking-tight">
              {BRAND_INFO.shortName || "Cilck"}
            </h3>
            
            <p className="text-neutral-600 text-xs leading-relaxed">
              Cilck Clothing specializes in high-quality apparel and custom merchandise for corporates, institutions, and bulk buyers.
            </p>

            <div className="flex items-center gap-3 pt-2 text-neutral-800">
              <a href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-neutral-100 transition-colors" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-neutral-500 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>GTB Nagar Station, Mumbai 400022</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>{BRAND_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-1.5 text-neutral-600 font-mono">
                <span className="font-bold text-neutral-800">GSTIN:</span> {BRAND_INFO.gstNumber}
              </p>
            </div>
          </div>

          {/* Col 2: QUICK LINKS matching Screenshot 5 */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-neutral-600">
              <li>
                <button onClick={() => onSelectCategory('all')} className="hover:text-black transition-colors">
                  Home
                </button>
              </li>
              <li>
                <a href="#custom-bulk" className="hover:text-black transition-colors">
                  Bulk & Corporate
                </a>
              </li>
              <li>
                <a href="#about-store" className="hover:text-black transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blogs-section" className="hover:text-black transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <button onClick={onOpenTrackOrder} className="hover:text-black transition-colors">
                  Track Order
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: SHOP BY COLLECTION matching Screenshot 5 */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
              SHOP BY COLLECTION
            </h4>
            <ul className="space-y-2.5 text-neutral-600">
              <li>
                <button onClick={() => onSelectCategory('hoodies-jackets')} className="hover:text-black transition-colors">
                  Farewell Hoodies
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('polo-tshirts')} className="hover:text-black transition-colors">
                  Polo T-Shirt
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('varsity')} className="hover:text-black transition-colors">
                  Varsity
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('kids-tshirts')} className="hover:text-black transition-colors">
                  Kids T-Shirts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('t-shirts')} className="hover:text-black transition-colors">
                  Oversized T-Shirt
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: IMPORTANT LINKS matching Screenshot 5 */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
              IMPORTANT LINKS
            </h4>
            <ul className="space-y-2.5 text-neutral-600">
              <li>
                <a href={`https://wa.me/${BRAND_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-black transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#refund" className="hover:text-black transition-colors">
                  Return & Refund
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-black transition-colors">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: NEWSLETTER matching Screenshot 5 */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
              NEWSLETTER
            </h4>
            <p className="text-neutral-600 text-xs leading-relaxed">
              Join the Cilck Clothing. Get VIP access to our new launches and limited-time offers. Subscribe now.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-neutral-800 font-bold uppercase tracking-wider text-xs py-2.5 rounded transition-colors"
              >
                {subscribed ? "Subscribed! ✓" : "SUBSCRIBE"}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Payment Strip matching Screenshot 5 */}
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Cilck Clothing | All Rights Reserved &nbsp;•&nbsp; <span className="font-mono font-medium text-neutral-700">GST: {BRAND_INFO.gstNumber}</span></p>

          <div className="flex items-center gap-3">
            <span className="font-bold text-blue-700 bg-neutral-100 px-2 py-0.5 rounded text-[10px]">VISA</span>
            <span className="font-bold text-red-600 bg-neutral-100 px-2 py-0.5 rounded text-[10px]">Mastercard</span>
            <span className="font-bold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded text-[10px]">G Pay</span>
            <span className="font-bold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded text-[10px]">UPI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
