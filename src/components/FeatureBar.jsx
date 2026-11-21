import React from 'react';
import { Gem, Shirt, Truck } from 'lucide-react';

export default function FeatureBar() {
  const features = [
    {
      icon: <Gem className="w-5 h-5 text-neutral-800" />,
      title: "PREMIUM PRINTED EDITION",
      desc: "High-grade fabrics with consistent finishing."
    },
    {
      icon: <Shirt className="w-5 h-5 text-neutral-800" />,
      title: "COMFORTABLE FITS",
      desc: "Designed for everyday comfort and movement."
    },
    {
      icon: <Truck className="w-5 h-5 text-neutral-800" />,
      title: "BULK & CUSTOM ORDER",
      desc: "Scalable production with customization support."
    }
  ];

  return (
    <section className="bg-[#182029] text-white py-8 border-b border-neutral-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-4 px-2">
              {/* White circular icon badge matching Screenshot 5 */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                {feat.icon}
              </div>

              <div>
                <h4 className="font-sans font-black text-xs sm:text-sm tracking-wider uppercase text-white">
                  {feat.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
