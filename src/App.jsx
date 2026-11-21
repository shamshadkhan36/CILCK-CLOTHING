import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CustomBulkSection from './components/CustomBulkSection';
import StoreInfo from './components/StoreInfo';
import Footer from './components/Footer';
import OrderSuccessModal from './components/OrderSuccessModal';
import AdminPanel from './components/AdminPanel';
import TrackOrderModal from './components/TrackOrderModal';
import { 
  INITIAL_PRODUCTS, 
  DEFAULT_BRAND_INFO, 
  INITIAL_ORDERS, 
  INITIAL_INQUIRIES, 
  NAV_CATEGORIES 
} from './data/products';
import { Search, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Truck, Lock, Layers } from 'lucide-react';

export default function App() {
  // Storefront & Brand State
  const [brandInfo, setBrandInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_brand_info');
      return saved ? JSON.parse(saved) : DEFAULT_BRAND_INFO;
    } catch (e) {
      return DEFAULT_BRAND_INFO;
    }
  });

  // Products State (Editable via Admin Panel)
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_products');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch (e) {
      return INITIAL_PRODUCTS;
    }
  });

  // Orders State (Editable via Admin Panel & Checkout)
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch (e) {
      return INITIAL_ORDERS;
    }
  });

  // Inquiries State (Editable via Admin Panel & Quote form)
  const [inquiries, setInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_inquiries');
      return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
    } catch (e) {
      return INITIAL_INQUIRIES;
    }
  });

  // Navigation & Filter State
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Cart State
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('cilck_brand_info', JSON.stringify(brandInfo));
  }, [brandInfo]);

  useEffect(() => {
    localStorage.setItem('cilck_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cilck_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('cilck_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('cilck_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  // Cart operations
  const handleAddToCart = (productWithOptions) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => 
        item.id === productWithOptions.id && 
        item.selectedSize === productWithOptions.selectedSize &&
        item.selectedColor === productWithOptions.selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += productWithOptions.quantity;
        return updated;
      } else {
        return [...prev, productWithOptions];
      }
    });

    showToast(`Added ${productWithOptions.name} to Bag!`);
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter((_, i) => i !== index));
    } else {
      setCartItems(prev => {
        const updated = [...prev];
        updated[index].quantity = newQuantity;
        return updated;
      });
    }
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Order placement handler (feeds directly to Admin Orders!)
  const handleCheckoutSuccess = (orderDetails) => {
    const newRecord = {
      orderId: orderDetails.orderId,
      customerName: orderDetails.customerName || 'Customer via WhatsApp',
      customerPhone: orderDetails.customerPhone || brandInfo.phone,
      customerAddress: orderDetails.customerAddress || 'Mumbai Region',
      date: new Date().toISOString().split('T')[0],
      items: cartItems.map(i => ({ name: i.name, size: i.selectedSize, color: i.selectedColor, qty: i.quantity, price: i.price })),
      total: orderDetails.total,
      status: 'Confirmed',
      paymentMethod: orderDetails.method || 'Online UPI / COD'
    };
    setOrders(prev => [newRecord, ...prev]);
    setCompletedOrder(orderDetails);
  };

  // Admin CRUD for products
  const handleAddProduct = (newProd) => {
    setProducts(prev => [newProd, ...prev]);
    showToast(`New drop '${newProd.name}' published!`);
  };

  const handleUpdateProduct = (updatedProd) => {
    setProducts(prev => prev.map(p => p.id === updatedProd.id ? updatedProd : p));
    showToast(`Updated '${updatedProd.name}'`);
  };

  const handleDeleteProduct = (prodId) => {
    setProducts(prev => prev.filter(p => p.id !== prodId));
    showToast(`Drop removed from store.`);
  };

  // Admin Order Status Update
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.orderId === orderId ? { ...o, status: newStatus } : o));
    showToast(`Order #${orderId} marked as ${newStatus}`);
  };

  // Admin Inquiry Status Update
  const handleUpdateInquiryStatus = (inqId, newStatus) => {
    setInquiries(prev => prev.map(i => i.id === inqId ? { ...i, status: newStatus } : i));
    showToast(`Inquiry status updated.`);
  };

  // Filtering products
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSubcategory = !activeSubcategory || product.subcategory === activeSubcategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.gsm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If Admin Mode is active, render the dedicated Admin Dashboard!
  if (isAdminView) {
    return (
      <AdminPanel
        products={products}
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
        orders={orders}
        onUpdateOrderStatus={handleUpdateOrderStatus}
        inquiries={inquiries}
        onUpdateInquiryStatus={handleUpdateInquiryStatus}
        brandInfo={brandInfo}
        onUpdateBrandInfo={(newSettings) => {
          setBrandInfo(newSettings);
          showToast("Store settings saved!");
        }}
        onCloseAdmin={() => setIsAdminView(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 flex flex-col font-sans selection:bg-white selection:text-black">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-white text-black px-4 py-3 rounded-xl font-bold text-xs shadow-2xl flex items-center gap-2 border border-neutral-300 animate-in slide-in-from-bottom duration-300">
          <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Direct WhatsApp Button */}
      <a
        href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(`Hello Cilck Clothing! I have a question regarding products on ${brandInfo.domain}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-black p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950 flex items-center gap-2.5 font-bold text-xs transition-all hover:scale-105"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-black text-emerald-500" />
        <span className="hidden sm:inline font-mono">Chat on WhatsApp</span>
      </a>

      {/* Navbar with Multi-level Dropdowns & Search */}
      <Navbar
        brandInfo={brandInfo}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          setActiveSubcategory(null);
          if (catId === 'custom-bulk') {
            scrollToSection('custom-bulk');
          } else {
            scrollToSection('product-catalog');
          }
        }}
        onSelectSubcategory={(catId, subId) => {
          setActiveCategory(catId);
          setActiveSubcategory(subId);
          scrollToSection('product-catalog');
        }}
        activeCategory={activeCategory}
        activeSubcategory={activeSubcategory}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        onOpenAdmin={() => setIsAdminView(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onShopClick={() => scrollToSection('product-catalog')}
          onCustomClick={() => scrollToSection('custom-bulk')}
        />

        {/* Marquee Ticker */}
        <Marquee />

        {/* Product Catalog Section */}
        <section id="product-catalog" className="py-12 md:py-16 container mx-auto px-4">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{activeSubcategory ? activeSubcategory.replace('-', ' ') : activeCategory.toUpperCase()} COLLECTION</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mt-1">
                {activeCategory === 't-shirts' ? 'T-SHIRTS & STREET DROP' :
                 activeCategory === 'varsity-jackets' ? 'VARSITY JACKETS & HOODIES' :
                 activeCategory === 'accessories' ? 'CAPS & ACCESSORIES' :
                 'TRENDING STREETWEAR DROPS'}
              </h2>
            </div>

            {/* Subcategory Pills if in main category */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setActiveSubcategory(null);
                }}
                className={`px-3 py-1.5 rounded-lg font-bold border transition-all ${
                  activeCategory === 'all' && !activeSubcategory
                    ? 'bg-white text-black border-white'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                All Drops ({products.length})
              </button>

              {NAV_CATEGORIES.filter(c => c.id !== 'all' && c.id !== 'custom-bulk').map(c => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCategory(c.id);
                    setActiveSubcategory(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-bold border transition-all ${
                    activeCategory === c.id && !activeSubcategory
                      ? 'bg-white text-black border-white'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-neutral-950/40 rounded-2xl border border-neutral-800">
              <p className="text-neutral-400 text-sm">No products found matching your filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setActiveSubcategory(null);
                }}
                className="mt-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-semibold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}

          {/* Promo Callout Banner */}
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
                Special Bulk & College Society Offer
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                NEED CUSTOM MERCHANDISE FOR YOUR CREW?
              </h3>
              <p className="text-xs text-neutral-400 max-w-xl">
                Get custom oversized tees, varsity jackets, and hoodies customized with your logo, puff prints, or embroidery. Free digital mockup within 2 hours.
              </p>
            </div>
            <button
              onClick={() => scrollToSection('custom-bulk')}
              className="shrink-0 px-6 py-3.5 bg-white text-black hover:bg-neutral-200 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <span>Explore Custom Merch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </section>

        {/* Custom / Bulk Merchandising Section (Destiny Clothing Style) */}
        <CustomBulkSection />

        {/* Store Location & Physical Workshop */}
        <StoreInfo />

      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          setActiveSubcategory(null);
          scrollToSection('product-catalog');
        }}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCheckoutSuccess={(details) => {
          setIsCartOpen(false);
          handleCheckoutSuccess(details);
        }}
      />

      {/* Track Order Modal */}
      {isTrackOrderOpen && (
        <TrackOrderModal
          orders={orders}
          brandInfo={brandInfo}
          onClose={() => setIsTrackOrderOpen(false)}
        />
      )}

      {/* Order Success Confirmation */}
      {completedOrder && (
        <OrderSuccessModal
          orderDetails={completedOrder}
          onClose={() => setCompletedOrder(null)}
        />
      )}

    </div>
  );
}
