import React from 'react';

export default function BrandsWorkedWith() {
  const brands = [
    { name: "IMS Ghaziabad", style: "font-serif text-[#1e3a5f] font-bold text-sm leading-tight text-center", sub: "GROUP OF INSTITUTIONS" },
    { name: "NYKAA", style: "font-black text-[#e91e63] text-xl tracking-wider italic font-sans" },
    { name: "Crompton", style: "font-bold text-[#004b87] text-xl tracking-tight font-sans" },
    { name: "apollo", style: "font-black text-[#581c87] text-xl lowercase font-sans", sub: "TYRES" },
    { name: "Radisson", style: "font-serif text-[#1e3a8a] text-lg font-bold", sub: "MUMBAI GOREGAON" },
    { name: "airtel", style: "font-bold text-[#e11d48] text-xl lowercase font-sans" }
  ];

  return (
    <section className="py-10 bg-[#fafafa] border-b border-neutral-200/80">
      <div className="container mx-auto px-4">
        
        {/* Heading matching Screenshot 2 */}
        <h3 className="text-center font-sans text-sm sm:text-base font-extrabold text-neutral-800 uppercase tracking-widest mb-6">
          BRANDS WE WORKED WITH
        </h3>

        {/* Brand Logos Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto items-center">
          {brands.map((b, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200/70 rounded-xl p-4 h-20 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className={b.style}>{b.name}</span>
              {b.sub && (
                <span className="text-[8px] font-mono tracking-wider text-neutral-500 uppercase mt-0.5">
                  {b.sub}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
