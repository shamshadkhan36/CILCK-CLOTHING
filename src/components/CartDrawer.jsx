import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, CheckCircle2, Truck, Tag } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckoutSuccess,
}) {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 999;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 80;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'MUMBAI10' || code === 'CILCK10') {
      setDiscountPercent(10);
      setCouponApplied(true);
      setCouponError('');
    } else if (code === 'FIRSTDROP') {
      setDiscountPercent(15);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try MUMBAI10');
    }
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsList = cartItems.map((item, idx) => 
      `${idx + 1}. *${item.name}*\n   Size: ${item.selectedSize} | Color: ${item.selectedColor}\n   Qty: ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}`
    ).join('\n\n');

    let message = 
      `*NEW ORDER - CILCK CLOTHING (cilckclothing.com)*\n` +
      `----------------------------------------\n` +
      `*Customer Details:*\n` +
      `• Name: ${customerName || 'Customer'}\n` +
      `• Phone: ${customerPhone || 'Not specified'}\n` +
      `• Delivery Address: ${customerAddress || 'Please ask for address'}\n\n` +
      `*Order Items:*\n${itemsList}\n` +
      `----------------------------------------\n` +
      `• Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n` +
      (discountPercent > 0 ? `• Discount (${discountPercent}%): -₹${discountAmount}\n` : '') +
      `• Shipping: ${shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}\n` +
      `*Total Amount Payable:* ₹${grandTotal.toLocaleString('en-IN')}\n\n` +
      `Please confirm my order and share the payment link / QR code!`;

    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    onCheckoutSuccess({
      orderId: `CLK-${Math.floor(100000 + Math.random() * 900000)}`,
      total: grandTotal,
      customerName,
      customerPhone,
      customerAddress,
      method: 'WhatsApp Order',
    });
  };

  const handleRazorpayPayment = () => {
    if (!customerName || !customerPhone || !customerAddress) {
      alert('Please fill your Name, WhatsApp/Phone Number, and Delivery Address to proceed.');
      return;
    }

    if (typeof window === 'undefined' || !window.Razorpay) {
      alert('Razorpay Checkout is loading. Please verify internet connection or try again.');
      return;
    }

    const options = {
      key: BRAND_INFO.razorpayKeyId || "rzp_live_U4iKMhDqe9ljrH",
      amount: Math.round(grandTotal * 100),
      currency: "INR",
      name: "CILCK CLOTHING",
      description: `Payment for ${cartItems.length} items (Order)`,
      image: "/logo.svg",
      prefill: {
        name: customerName,
        contact: customerPhone.replace(/[^0-9]/g, ''),
        email: "order@cilckclothing.com"
      },
      notes: {
        address: customerAddress,
        items: cartItems.map(i => `${i.name} (${i.selectedSize}) x${i.quantity}`).join(', ')
      },
      theme: {
        color: "#5c131d"
      },
      handler: function (response) {
        setIsCheckingOut(false);
        onCheckoutSuccess({
          orderId: `CLK-${Math.floor(100000 + Math.random() * 900000)}`,
          paymentId: response.razorpay_payment_id,
          total: grandTotal,
          customerName,
          customerPhone,
          customerAddress,
          method: `Razorpay Online Paid (${response.razorpay_payment_id})`,
        });
        onClearCart();
      },
      modal: {
        ondismiss: function () {
          setIsCheckingOut(false);
        }
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (resp) {
        alert(`Payment Failed: ${resp.error.description}`);
        setIsCheckingOut(false);
      });
      setIsCheckingOut(true);
      rzp.open();
    } catch (err) {
      alert('Error initiating Razorpay: ' + err.message);
      setIsCheckingOut(false);
    }
  };

  const handleDirectCodCheckout = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) {
      alert('Please fill your name, phone number, and address to proceed.');
      return;
    }
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      onCheckoutSuccess({
        orderId: `CLK-${Math.floor(100000 + Math.random() * 900000)}`,
        total: grandTotal,
        customerName,
        customerPhone,
        customerAddress,
        method: 'Cash on Delivery (COD)',
      });
      onClearCart();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0f17] border-l border-neutral-800 text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-white" />
              <h2 className="text-base sm:text-lg font-bold tracking-tight">Shopping Bag</h2>
              <span className="text-xs bg-neutral-800 text-neutral-400 font-mono px-2 py-0.5 rounded-full">
                {cartItems.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-neutral-900/90 px-4 py-2.5 border-b border-neutral-800/80 text-xs">
            {subtotal >= freeShippingThreshold ? (
              <p className="text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Unlocked! You qualify for <strong>FREE India Shipping</strong>.</span>
              </p>
            ) : (
              <div>
                <p className="text-neutral-400 flex items-center justify-between text-[11px] mb-1">
                  <span>Add ₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')} more for FREE Shipping</span>
                  <span className="font-mono text-neutral-300">₹{subtotal} / ₹{freeShippingThreshold}</span>
                </p>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-neutral-200">Your bag is empty</h3>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  Browse our latest streetwear drops, oversized tees, and hoodies to add to your bag.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 bg-white text-black font-bold text-xs rounded-xl"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                  className="flex gap-3 bg-neutral-900/60 border border-neutral-800/80 p-3 rounded-xl"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-top rounded-lg bg-neutral-950 shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold text-white line-clamp-1">{item.name}</h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Size: <span className="text-neutral-200 font-semibold">{item.selectedSize}</span> | Color: {item.selectedColor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-neutral-700 rounded-md bg-neutral-950 text-xs">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-0.5 text-neutral-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2 font-mono text-white text-[11px]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-0.5 text-neutral-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-mono font-bold text-sm text-white">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Quick Customer Delivery Details Form */}
            {cartItems.length > 0 && (
              <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-3.5 space-y-2.5">
                <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Delivery Information</span>
                </p>
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp / Phone Number *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                />
                <textarea
                  placeholder="Complete Delivery Address & Pincode *"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  rows={2}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 resize-none"
                />

                {/* Promo Code Box */}
                <div className="pt-2 border-t border-neutral-800">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon (e.g. MUMBAI10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white uppercase placeholder-neutral-500 focus:outline-none font-mono"
                    />
                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-bold rounded-lg text-white"
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                      ✓ {discountPercent}% discount applied!
                    </p>
                  )}
                  {couponError && (
                    <p className="text-[11px] text-red-400 mt-1">{couponError}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-neutral-800 bg-[#0d0e15] space-y-3">
              {/* Financial breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="font-mono text-white">
                    {shippingFee === 0 ? <span className="text-emerald-400 font-bold">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-neutral-800">
                  <span>Total Payable</span>
                  <span className="text-lg font-black font-mono">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Action 1: Razorpay Instant Online Payment */}
              <button
                onClick={handleRazorpayPayment}
                disabled={isCheckingOut}
                className="w-full py-3.5 px-4 bg-[#5c131d] hover:bg-[#4a0f17] text-white rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>💳 Pay Online with Razorpay (UPI, Cards, NetBanking)</span>
              </button>

              {/* Action 2: WhatsApp Checkout */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-2.5 px-4 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirm Order via WhatsApp</span>
              </button>

              {/* Action 3: Direct COD */}
              <button
                onClick={handleDirectCodCheckout}
                disabled={isCheckingOut}
                className="w-full py-2 px-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>{isCheckingOut ? 'Processing Order...' : 'Pay with Cash on Delivery (COD)'}</span>
              </button>

              <div className="pt-1 text-center">
                <span className="text-[10px] text-neutral-500 font-mono">
                  🔒 Secured by Razorpay Live • Instant UPI, Debit/Credit & NetBanking
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
