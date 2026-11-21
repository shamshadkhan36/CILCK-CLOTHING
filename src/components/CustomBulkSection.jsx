import React, { useState } from 'react';
import { Sparkles, MessageCircle, Layers, Scissors, Check, ShieldCheck, Upload } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function CustomBulkSection() {
  const [garmentType, setGarmentType] = useState('Oversized Heavyweight Tees');
  const [printType, setPrintType] = useState('High Density Puff Print');
  const [quantity, setQuantity] = useState(30);
  const [notes, setNotes] = useState('');

  const garments = [
    { name: 'Oversized Heavyweight Tees', baseGsm: '240 GSM Pure Cotton', estPrice: 380 },
    { name: 'Varsity & Bomber Jackets', baseGsm: 'Melton Wool + Faux Leather', estPrice: 1650 },
    { name: 'French Terry Hoodies', baseGsm: '380 GSM Heavy Terry', estPrice: 850 },
    { name: 'Embroidered Streetwear Caps', baseGsm: '100% Chino Twill', estPrice: 280 },
  ];

  const printMethods = [
    'High Density Puff Print',
    'Computerized Chenille Embroidery',
    'Direct to Film (DTF) Multi-color',
    'Discharge / Screen Printing',
  ];

  const selectedGarment = garments.find(g => g.name === garmentType) || garments[0];
  const estimatedUnitPrice = selectedGarment.estPrice;
  const estimatedTotal = estimatedUnitPrice * quantity;

  const handleSendBulkInquiry = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Cilck Clothing Workshop! ✂️\n` +
      `I want to request a BULK / CUSTOM MERCHANDISE QUOTE:\n\n` +
      `• *Garment Type:* ${garmentType}\n` +
      `• *GSM / Fabric:* ${selectedGarment.baseGsm}\n` +
      `• *Printing / Branding:* ${printType}\n` +
      `• *Quantity Required:* ${quantity} Pieces\n` +
      `• *Estimated Budget:* ~₹${estimatedTotal.toLocaleString('en-IN')}\n` +
      (notes ? `• *Design Notes / College / Brand:* ${notes}\n` : '') +
      `\nPlease let me know production turnaround time, sampling process, and formal quote.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="custom-bulk" className="py-16 md:py-24 bg-[#0a0b10] border-t border-neutral-800/80 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neutral-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-xs text-neutral-300">
            <Scissors className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono uppercase font-bold text-[11px]">B2B & Custom Tailoring Division</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            CUSTOM MERCHANDISE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              FOR CREWS, FESTS & STARTUPS
            </span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Just like Destiny Clothing, we specialize in bulk custom merchandise manufactured in our Mumbai tailoring workshop. From 3D puff-printed oversized tees to customized collegiate varsity jackets.
          </p>
        </div>

        {/* 2-Column interactive quote builder */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Why Choose Cilck Merch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Our Custom Manufacturing</span>
              </h3>

              <div className="space-y-3.5 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-white font-mono text-[10px] font-bold">1</div>
                  <div>
                    <strong className="text-white block">Low Minimum Order (MOQ)</strong>
                    <span className="text-neutral-400">Start with as few as 15 pieces per design with custom neck labels.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-white font-mono text-[10px] font-bold">2</div>
                  <div>
                    <strong className="text-white block">Premium Fabric Sourcing</strong>
                    <span className="text-neutral-400">100% bio-washed combed cotton, 240+ GSM jersey & 380 GSM fleece.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-white font-mono text-[10px] font-bold">3</div>
                  <div>
                    <strong className="text-white block">Free Digital Mockup Support</strong>
                    <span className="text-neutral-400">Send us your vector logo / artwork and get 3D visual previews in 2 hours.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-white font-mono text-[10px] font-bold">4</div>
                  <div>
                    <strong className="text-white block">Fast Mumbai Workshop Dispatch</strong>
                    <span className="text-neutral-400">Rush orders delivered in 4-7 business days across India.</span>
                  </div>
                </div>
              </div>

              {/* Direct Call / Visit badge */}
              <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>📍 Mumbai GTB Nagar Hub</span>
                <span className="font-mono text-white">Call: {BRAND_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant WhatsApp Quote Generator */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSendBulkInquiry} className="bg-neutral-900/90 border border-neutral-700/80 rounded-2xl p-6 sm:p-7 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <h3 className="text-base font-bold text-white">Instant Bulk Quote Estimator</h3>
                <span className="text-[11px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
                  B2B Rates
                </span>
              </div>

              {/* Step 1: Garment Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  1. Select Garment
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {garments.map((g) => (
                    <button
                      type="button"
                      key={g.name}
                      onClick={() => setGarmentType(g.name)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        garmentType === g.name
                          ? 'bg-white text-black border-white font-bold shadow-md'
                          : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <p className="line-clamp-1">{g.name}</p>
                      <span className={`text-[10px] block mt-0.5 ${garmentType === g.name ? 'text-neutral-700' : 'text-neutral-500'}`}>
                        {g.baseGsm}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Branding Method */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  2. Branding / Printing Technique
                </label>
                <select
                  value={printType}
                  onChange={(e) => setPrintType(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-neutral-600"
                >
                  {printMethods.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Step 3: Quantity Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold uppercase tracking-wider text-neutral-300">
                    3. Order Quantity: <span className="text-white font-mono text-sm">{quantity} pcs</span>
                  </label>
                  <span className="text-[11px] text-neutral-400 font-mono">Min 15 pcs</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="500"
                  step="5"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-white cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>15 pcs</span>
                  <span>100 pcs</span>
                  <span>250 pcs</span>
                  <span>500+ pcs</span>
                </div>
              </div>

              {/* Step 4: Notes / Brand Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  4. Design Idea / College or Brand Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. IIT Bombay Cultural Fest, Oversized Black Tees with Front & Back Print"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-neutral-600 placeholder-neutral-600"
                />
              </div>

              {/* Estimate Summary Box */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Approx Bulk Price</span>
                  <span className="text-xs text-neutral-400">~₹{estimatedUnitPrice}/piece</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Estimated Total</span>
                  <span className="text-xl font-black font-mono text-white">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-emerald-950 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Get Instant Quote & Mockup on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
