import React, { useState } from 'react';
import { X, Search, CheckCircle2, Truck, Package, Clock, MessageCircle } from 'lucide-react';

export default function TrackOrderModal({ orders, onClose, brandInfo }) {
  const [searchVal, setSearchVal] = useState('');
  const [foundOrder, setFoundOrder] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchVal.trim().toUpperCase();
    if (!query) return;

    const matched = orders.find(o => 
      o.orderId.toUpperCase() === query || 
      o.customerPhone.replace(/[^0-9]/g, '').includes(query.replace(/[^0-9]/g, ''))
    );
    setFoundOrder(matched || null);
    setHasSearched(true);
  };

  const steps = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];
  const currentStepIndex = foundOrder ? steps.indexOf(foundOrder.status) : -1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#10121a] border border-neutral-700 rounded-3xl w-full max-w-md p-6 sm:p-7 space-y-5 text-white shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-sky-950 border border-sky-800/80 flex items-center justify-center text-sky-400">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base">Track Your Order</h3>
            <p className="text-[11px] text-neutral-400">Enter Order ID (e.g. CLK-942810) or Phone Number</p>
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            required
            placeholder="Order ID / Phone Number"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 font-mono uppercase focus:outline-none focus:border-neutral-500"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-white text-black font-bold text-xs rounded-xl hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Track</span>
          </button>
        </form>

        {/* Results */}
        {hasSearched && (
          <div>
            {foundOrder ? (
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 space-y-4">
                <div className="flex justify-between items-start border-b border-neutral-800 pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-white block">{foundOrder.orderId}</span>
                    <span className="text-[11px] text-neutral-500 font-mono">Date: {foundOrder.date}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    {foundOrder.status}
                  </span>
                </div>

                {/* Progress Pipeline */}
                <div className="py-2">
                  <div className="grid grid-cols-4 text-center text-[10px] font-mono mb-2">
                    {steps.map((st, i) => (
                      <span key={st} className={i <= currentStepIndex ? 'text-emerald-400 font-bold' : 'text-neutral-600'}>
                        {st}
                      </span>
                    ))}
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-emerald-500 h-full transition-all duration-500" 
                      style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="text-xs space-y-1.5 text-neutral-300 pt-2 border-t border-neutral-800">
                  <p><strong>Customer:</strong> {foundOrder.customerName}</p>
                  <p><strong>Total:</strong> ₹{foundOrder.total.toLocaleString('en-IN')}</p>
                  <p className="text-[11px] text-neutral-400 line-clamp-2"><strong>Address:</strong> {foundOrder.customerAddress}</p>
                </div>

                <a
                  href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(`Hello Cilck Clothing! Regarding my order #${foundOrder.orderId}: I would like live shipping updates.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Live WhatsApp Updates</span>
                </a>
              </div>
            ) : (
              <div className="text-center py-6 bg-neutral-950/60 rounded-xl border border-neutral-800 text-xs text-neutral-400 space-y-2">
                <p>No active order found for "{searchVal}".</p>
                <p className="text-[11px] text-neutral-500">
                  Try sample order ID: <strong className="text-white font-mono cursor-pointer underline" onClick={() => setSearchVal('CLK-942810')}>CLK-942810</strong>
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
