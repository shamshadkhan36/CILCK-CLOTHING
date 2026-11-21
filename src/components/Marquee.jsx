import React from 'react';

export default function Marquee() {
  const items = [
    "CILCK CLOTHING",
    "ESTD 2024",
    "MUMBAI 400022",
    "240 GSM HEAVYWEIGHT",
    "VARSITY JACKETS",
    "CUSTOM DTF & PUFF PRINT",
    "OVERSIZED HOODIES",
    "TAILORED STREETWEAR",
    "DIRECT WORKSHOP PRICING",
    "FREE SHIPPING OVER ₹999",
  ];

  return (
    <div className="bg-neutral-950 border-y border-neutral-800 py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center gap-6 mx-4">
            <span className="text-neutral-400 font-mono font-bold tracking-widest text-xs md:text-sm uppercase flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
