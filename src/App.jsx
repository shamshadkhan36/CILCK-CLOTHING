import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryStoryCircles from './components/CategoryStoryCircles';
import BrandsWorkedWith from './components/BrandsWorkedWith';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CustomBulkSection from './components/CustomBulkSection';
import BlogsSection from './components/BlogsSection';
import FeatureBar from './components/FeatureBar';
import StoreInfo from './components/StoreInfo';
import Footer from './components/Footer';
import OrderSuccessModal from './components/OrderSuccessModal';
import AdminPanel from './components/AdminPanel';
import TrackOrderModal from './components/TrackOrderModal';
import { 
  INITIAL_PRODUCTS, 
  DEFAULT_BRAND_INFO, 
  INITIAL_ORDERS, 
  INITIAL_INQUIRIES 
} from './data/products';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function App() {
  // Brand metadata
  const [brandInfo, setBrandInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_brand_info_v5');
      return saved ? JSON.parse(saved) : DEFAULT_BRAND_INFO;
    } catch (e) {
      return DEFAULT_BRAND_INFO;
    }
  });

  // Products (editable via Admin) - Loaded with full 22-item catalog
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_products_v3');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch (e) {
      return INITIAL_PRODUCTS;
    }
  });

  // Orders (editable via Admin)
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch (e) {
      return INITIAL_ORDERS;
    }
  });

  // Inquiries (editable via Admin)
  const [inquiries, setInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_inquiries');
      return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
    } catch (e) {
      return INITIAL_INQUIRIES;
    }
  });

  // Filter & Search
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Views
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Cart
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cilck_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // LocalStorage persistence
  useEffect(() => {
    localStorage.setItem('cilck_brand_info_v5', JSON.stringify(brandInfo));
  }, [brandInfo]);

  useEffect(() => {
    localStorage.setItem('cilck_products_v3', JSON.stringify(products));
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

  // Cart Handlers
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
      handleRemoveItem(index);
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

  // Admin Product CRUD
  const handleAddProduct = (newProd) => {
    setProducts(prev => [newProd, ...prev]);
    showToast(`Added drop '${newProd.name}'`);
  };

  const handleUpdateProduct = (updatedProd) => {
    setProducts(prev => prev.map(p => p.id === updatedProd.id ? updatedProd : p));
    showToast(`Updated '${updatedProd.name}'`);
  };

  const handleDeleteProduct = (prodId) => {
    setProducts(prev => prev.filter(p => p.id !== prodId));
    showToast(`Drop removed.`);
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.orderId === orderId ? { ...o, status: newStatus } : o));
    showToast(`Order status updated to ${newStatus}`);
  };

  const handleUpdateInquiryStatus = (inqId, newStatus) => {
    setInquiries(prev => prev.map(i => i.id === inqId ? { ...i, status: newStatus } : i));
    showToast(`Inquiry status updated.`);
  };

  // Filtered Products
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.gsm.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If Admin View is toggled
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
          showToast("Settings saved!");
        }}
        onCloseAdmin={() => setIsAdminView(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#5c131d] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#1e293b] text-white px-4 py-3 rounded-xl font-bold text-xs shadow-2xl flex items-center gap-2 border border-neutral-700 animate-in slide-in-from-bottom duration-300">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating WhatsApp Widget (Exact Screenshot 1 & 5) */}
      <a
        href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(`Hi Cilck Clothing! I am visiting ${brandInfo.domain} and want custom merch.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25d366]" />
      </a>

      {/* 1. Navbar matching Screenshot 1 */}
      <Navbar
        brandInfo={brandInfo}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          scrollToSection('product-catalog');
        }}
        activeCategory={activeCategory}
        onOpenAdmin={() => setIsAdminView(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        
        {/* 2. Hero Banner matching Screenshot 1 */}
        <Hero onExploreClick={() => scrollToSection('product-catalog')} />

        {/* 3. "SHOP BY CATEGORY" Circles matching Screenshot 2 */}
        <CategoryStoryCircles
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            scrollToSection('product-catalog');
          }}
        />

        {/* 4. "BRANDS WE WORKED WITH" Logos matching Screenshot 2 */}
        <BrandsWorkedWith />

        {/* 5. Product Catalog Section matching Screenshot 3 */}
        <section id="product-catalog" className="py-14 bg-white container mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 font-bold">
                CILCK OFFICIAL APPAREL CATALOG
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight mt-0.5">
                {activeCategory === 'all' ? 'FEATURED MERCHANDISE DROPS' : `${activeCategory.replace('-', ' ')} COLLECTION`}
              </h2>
            </div>

            {/* Quick Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-full font-bold border transition-all ${
                  activeCategory === 'all'
                    ? 'bg-black text-white border-black'
                    : 'bg-neutral-100 text-neutral-700 border-neutral-300 hover:bg-neutral-200'
                }`}
              >
                All ({products.length})
              </button>
              <button
                onClick={() => setActiveCategory('t-shirts')}
                className={`px-3 py-1.5 rounded-full font-bold border transition-all ${
                  activeCategory === 't-shirts'
                    ? 'bg-black text-white border-black'
                    : 'bg-neutral-100 text-neutral-700 border-neutral-300 hover:bg-neutral-200'
                }`}
              >
                T-Shirts
              </button>
              <button
                onClick={() => setActiveCategory('polo-tshirts')}
                className={`px-3 py-1.5 rounded-full font-bold border transition-all ${
                  activeCategory === 'polo-tshirts'
                    ? 'bg-black text-white border-black'
                    : 'bg-neutral-100 text-neutral-700 border-neutral-300 hover:bg-neutral-200'
                }`}
              >
                Polos
              </button>
              <button
                onClick={() => setActiveCategory('varsity')}
                className={`px-3 py-1.5 rounded-full font-bold border transition-all ${
                  activeCategory === 'varsity'
                    ? 'bg-black text-white border-black'
                    : 'bg-neutral-100 text-neutral-700 border-neutral-300 hover:bg-neutral-200'
                }`}
              >
                Varsity
              </button>
            </div>
          </div>

          {/* Product Cards Grid matching Screenshot 3 */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-200">
              <p className="text-neutral-500 text-sm">No items found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          )}

        </section>

        {/* 6. Custom Bulk Merchandising Builder (Destiny Style) */}
        <CustomBulkSection />

        {/* 7. "BLOGS & INSIGHTS" matching Screenshot 4 */}
        <div id="blogs-section">
          <BlogsSection />
        </div>

        {/* 8. Mumbai Store Info */}
        <div id="about-store">
          <StoreInfo />
        </div>

        {/* 9. Value Proposition Bar matching Screenshot 5 */}
        <FeatureBar />

      </main>

      {/* 10. Footer matching Screenshot 5 */}
      <Footer
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          scrollToSection('product-catalog');
        }}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
      />

      {/* Product Detail / Customizer Modal */}
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
