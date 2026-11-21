import React, { useEffect } from 'react';
import { CheckCircle2, MessageCircle, X, Package, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO } from '../data/products';

export default function OrderSuccessModal({ orderDetails, onClose }) {
  if (!orderDetails) return null;

  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback if canvas-confetti is not loaded
    }
  }, []);

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Hello Cilck Clothing! I just placed Order #${orderDetails.orderId} on ${BRAND_INFO.domain}.\nAmount: ₹${orderDetails.total}.\nPlease share tracking updates.`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#10121a] border border-neutral-700 rounded-3xl p-6 sm:p-8 text-center text-white shadow-2xl space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        {/* Title */}
        <div>
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-bold">
            Order Received Successfully!
          </span>
          <h3 className="text-2xl font-black text-white mt-1 uppercase tracking-tight">
            THANK YOU FOR YOUR ORDER
          </h3>
          <p className="text-neutral-400 text-xs mt-1">
            Our Mumbai tailoring and dispatch unit has logged your order.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-xs space-y-2 text-left">
          <div className="flex justify-between border-b border-neutral-800/80 pb-2">
            <span className="text-neutral-500">Order Reference:</span>
            <span className="font-mono font-bold text-white">{orderDetails.orderId}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-800/80 pb-2">
            <span className="text-neutral-500">Total Amount:</span>
            <span className="font-mono font-bold text-emerald-400">₹{orderDetails.total?.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-800/80 pb-2">
            <span className="text-neutral-500">Payment / Method:</span>
            <span className="text-neutral-300 font-medium">{orderDetails.method}</span>
          </div>
          {orderDetails.customerAddress && (
            <div className="pt-1">
              <span className="text-neutral-500 block mb-0.5">Shipping Address:</span>
              <p className="text-neutral-300 text-[11px] leading-snug">{orderDetails.customerAddress}</p>
            </div>
          )}
        </div>

        {/* Next Steps */}
        <div className="text-left text-xs bg-neutral-900/60 p-3 rounded-xl border border-neutral-800/80 text-neutral-300 space-y-1">
          <p className="font-bold text-white flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-amber-400" />
            <span>Estimated Delivery: 3 to 5 Days</span>
          </p>
          <p className="text-[11px] text-neutral-400">
            You will receive dispatch confirmation and tracking number via SMS and WhatsApp.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleWhatsAppContact}
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Track / Inquire on WhatsApp</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 rounded-xl font-semibold text-xs transition-colors"
          >
            Continue Browsing Cilck
          </button>
        </div>

      </div>
    </div>
  );
}
