import React, { useState } from 'react';
import { Sparkles, MessageCircle, Layers, Scissors, Check, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function CustomBulkSection() {
  const [garmentType, setGarmentType] = useState('College Fest T-Shirts');
  const [printType, setPrintType] = useState('High Density Puff Print');
  const [quantity, setQuantity] = useState(50);
  const [notes, setNotes] = useState('');

  const garments = [
    { name: 'Round Neck T-Shirts', baseGsm: '180 GSM Bio Cotton', estPrice: 280 },
    { name: 'Polo T-Shirts', baseGsm: '220 GSM Honeycomb Pique', estPrice: 420 },
    { name: 'Oversized T-Shirts', baseGsm: '240 GSM Heavy Cotton', estPrice: 450 },
    { name: 'Dry Fit T-Shirts', baseGsm: '160 GSM Micro-Poly', estPrice: 250 },
    { name: 'Sublimation T-Shirts', baseGsm: 'All-Over Digital Print', estPrice: 320 },
    { name: 'College Fest T-Shirts', baseGsm: '190 GSM Fest Grade', estPrice: 290 },
    { name: 'School & Preschool Uniforms', baseGsm: 'Twill & Oxford Poly-Cotton', estPrice: 480 },
    { name: 'PT Uniforms', baseGsm: 'House Color Activewear', estPrice: 380 },
    { name: 'Corporate Uniforms', baseGsm: 'Wrinkle-Resistant Formal', estPrice: 650 },
    { name: 'Sports Jerseys', baseGsm: 'Dri-Fit Jacquard Mesh', estPrice: 450 },
    { name: 'Hoodies & Sweatshirts', baseGsm: '380 GSM French Terry', estPrice: 850 },
    { name: 'Varsity Jackets', baseGsm: 'Melton Wool + PU Leather', estPrice: 1650 },
    { name: 'Customized Caps', baseGsm: '100% Chino Cotton Twill', estPrice: 220 },
    { name: 'Customized Bags', baseGsm: '12oz Duck Canvas', estPrice: 190 },
    { name: 'Customized Mugs', baseGsm: '350 ml Ceramic Mug', estPrice: 120 },
    { name: 'Corporate Merchandise Kits', baseGsm: 'Curated 5-Piece Welcome Box', estPrice: 1250 }
  ];

  const printMethods = [
    'High Density Puff Print',
    'Computerized Embroidery & Crest Badges',
    'Direct to Film (DTF) Multi-color',
    'Screen / Plastisol Printing',
    'All-Over Dye Sublimation'
  ];

  const selectedGarment = garments.find(g => g.name === garmentType) || garments[0];
  const estimatedUnitPrice = selectedGarment.estPrice;
  const estimatedTotal = estimatedUnitPrice * quantity;

  const handleSendBulkInquiry = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Cilck Clothing Workshop! ✂️\n` +
      `I want to request a BULK / CUSTOM MERCHANDISE QUOTE:\n\n` +
      `• *Product Type:* ${garmentType}\n` +
      `• *Fabric / GSM:* ${selectedGarment.baseGsm}\n` +
      `• *Printing / Branding:* ${printType}\n` +
      `• *Quantity Required:* ${quantity} Pieces\n` +
      `• *Estimated Total Budget:* ~₹${estimatedTotal.toLocaleString('en-IN')}\n` +
      (notes ? `• *Design Notes / Organization:* ${notes}\n` : '') +
      `\nPlease share turnaround time, digital mockup preview, and official quote.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="custom-bulk" className="py-16 md:py-20 bg-[#fafafa] border-t border-neutral-200 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-[11px] font-mono uppercase font-bold tracking-widest text-[#5c131d] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            MUMBAI WORKSHOP DIRECT • ESTD 2024
          </span>

          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase text-neutral-900 tracking-tight">
            CUSTOM MERCHANDISE, UNIFORMS & BULK APPAREL
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            From School & Corporate Uniforms to College Fest Tees, Sports Jerseys, Varsity Jackets, Caps & Mugs. Manufactured with low MOQ at our GTB Nagar, Mumbai facility.
          </p>
        </div>

        {/* 2-Column interactive quote builder */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Manufacturing Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Why Partner With Cilck Clothing?</span>
              </h3>

              <div className="space-y-3.5 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 text-white font-mono text-[10px] font-bold">1</div>
                  <div>
                    <strong className="text-neutral-900 block">Low MOQ (From 15 Pieces)</strong>
                    <span className="text-neutral-500">Perfect for startup teams, sports squads, and college fest societies.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 text-white font-mono text-[10px] font-bold">2</div>
                  <div>
                    <strong className="text-neutral-900 block">Complete In-House Apparel Range</strong>
                    <span className="text-neutral-500">School & Corporate uniforms, dry-fit jerseys, hoodies, mugs, bags & caps.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 text-white font-mono text-[10px] font-bold">3</div>
                  <div>
                    <strong className="text-neutral-900 block">Free 2-Hour Digital Mockups</strong>
                    <span className="text-neutral-500">Send your vector logo and receive high-definition 3D previews.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 text-white font-mono text-[10px] font-bold">4</div>
                  <div>
                    <strong className="text-neutral-900 block">Fast Pan-India Dispatch</strong>
                    <span className="text-neutral-500">Directly dispatched from GTB Nagar Mumbai with live parcel tracking.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 flex items-center justify-between">
                <span>📍 GTB Nagar Railway Station</span>
                <span className="font-mono font-bold text-neutral-800">WhatsApp: {BRAND_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right: Instant Bulk Quote Estimator Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSendBulkInquiry} className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <h3 className="text-sm font-bold text-neutral-900">Instant Custom Quote Estimator</h3>
                <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-mono font-bold">
                  Wholesale Rates
                </span>
              </div>

              {/* Garment Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  1. Select Product Type ({garments.length} Available)
                </label>
                <select
                  value={garmentType}
                  onChange={(e) => setGarmentType(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black"
                >
                  {garments.map((g) => (
                    <option key={g.name} value={g.name}>
                      {g.name} ({g.baseGsm}) - ~₹{g.estPrice}/pc
                    </option>
                  ))}
                </select>
              </div>

              {/* Branding Technique */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  2. Printing / Embroidery Technique
                </label>
                <select
                  value={printType}
                  onChange={(e) => setPrintType(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black"
                >
                  {printMethods.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Quantity Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold uppercase tracking-wider text-neutral-700">
                    3. Order Quantity: <span className="text-black font-mono font-black text-sm">{quantity} pcs</span>
                  </label>
                  <span className="text-[11px] text-neutral-500 font-mono">Min 15 pcs</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="1000"
                  step="5"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[#5c131d] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                  <span>15 pcs</span>
                  <span>100 pcs</span>
                  <span>500 pcs</span>
                  <span>1000+ pcs</span>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  4. School / College / Brand Name & Requirements
                </label>
                <input
                  type="text"
                  placeholder="e.g. St. Xavier's College Fest, Maroon Hoodies with Front Pocket Embroidery"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black placeholder-neutral-400"
                />
              </div>

              {/* Estimate Summary */}
              <div className="bg-[#f8f8fa] border border-neutral-200 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Unit Estimate</span>
                  <span className="text-xs font-bold text-neutral-800">~₹{estimatedUnitPrice}/piece</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Total Estimate</span>
                  <span className="text-xl font-black font-mono text-[#5c131d]">
                    ₹{estimatedTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* WhatsApp Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Instant Quote & Mockup on WhatsApp ({BRAND_INFO.phone})</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
