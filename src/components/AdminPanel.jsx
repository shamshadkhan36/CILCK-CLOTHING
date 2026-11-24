import React, { useState } from 'react';
import { 
  Package, ShoppingBag, MessageSquare, Settings, TrendingUp, Users, 
  Plus, Edit2, Trash2, CheckCircle2, Clock, AlertCircle, Search, 
  ArrowLeft, ExternalLink, Save, Filter, RefreshCw
} from 'lucide-react';

export default function AdminPanel({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  orders,
  onUpdateOrderStatus,
  inquiries,
  onUpdateInquiryStatus,
  brandInfo,
  onUpdateBrandInfo,
  onCloseAdmin
}) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [productSearch, setProductSearch] = useState('');
  const [orderFilter, setOrderFilter] = useState('All');
  
  // New Product Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 't-shirts',
    subcategory: 'oversized-tees',
    price: 899,
    originalPrice: 1499,
    discount: '40% OFF',
    gsm: '240 GSM Bio-Washed',
    fit: 'Boxy Drop-Shoulder Relaxed Fit',
    stock: 50,
    badge: 'New Arrival',
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'],
    description: '',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Vintage Black', hex: '#18181b' }]
  });

  // Edit Product Modal State
  const [editingProduct, setEditingProduct] = useState(null);

  // Settings State
  const [storeSettings, setStoreSettings] = useState({ ...brandInfo });
  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);

  // Calculations for Dashboard
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter(o => o.status === 'Pending' || o.status === 'Confirmed').length;
  const totalInquiriesCount = inquiries.length;

  const handleCreateProductSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    const productToSave = {
      ...newProduct,
      id: `clk-${Date.now().toString().slice(-4)}`,
      rating: 5.0,
      reviewsCount: 1,
      price: Number(newProduct.price),
      originalPrice: Number(newProduct.originalPrice),
      stock: Number(newProduct.stock)
    };
    onAddProduct(productToSave);
    setShowAddModal(false);
    setNewProduct({
      name: '',
      category: 't-shirts',
      subcategory: 'oversized-tees',
      price: 899,
      originalPrice: 1499,
      discount: '40% OFF',
      gsm: '240 GSM Bio-Washed',
      fit: 'Boxy Drop-Shoulder Relaxed Fit',
      stock: 50,
      badge: 'New Arrival',
      images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'],
      description: '',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: [{ name: 'Vintage Black', hex: '#18181b' }]
    });
  };

  const handleEditProductSubmit = (e) => {
    e.preventDefault();
    if (!editingProduct) return;
    onUpdateProduct(editingProduct);
    setEditingProduct(null);
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    onUpdateBrandInfo(storeSettings);
    setSavedSettingsNotice(true);
    setTimeout(() => setSavedSettingsNotice(false), 2500);
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.category.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.gsm.toLowerCase().includes(productSearch.toLowerCase())
  );

  const filteredOrders = orderFilter === 'All' 
    ? orders 
    : orders.filter(o => o.status === orderFilter);

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 flex flex-col font-sans">
      
      {/* Top Admin Header */}
      <header className="bg-[#10121a] border-b border-neutral-800 sticky top-0 z-40 px-4 py-3 sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 p-1">
              <img src="/logo.svg" alt="Cilck Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg tracking-tight text-white uppercase">
                  CILCK ADMIN
                </span>
                <span className="bg-emerald-950 text-emerald-400 border border-emerald-800/80 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  v2.0 LIVE
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-mono">Store Control Center • Mumbai GTB Nagar</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onCloseAdmin}
              className="px-3.5 py-1.5 bg-white text-black hover:bg-neutral-200 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Store</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Layout */}
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0 space-y-2">
          <div className="bg-[#10121a] border border-neutral-800 rounded-2xl p-2.5 space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'dashboard'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-300 hover:bg-neutral-800/60'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Dashboard Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'orders'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-300 hover:bg-neutral-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-4 h-4" />
                <span>Customer Orders</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                activeTab === 'orders' ? 'bg-black text-white' : 'bg-neutral-800 text-neutral-400'
              }`}>
                {orders.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'products'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-300 hover:bg-neutral-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Package className="w-4 h-4" />
                <span>Product Catalog</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                activeTab === 'products' ? 'bg-black text-white' : 'bg-neutral-800 text-neutral-400'
              }`}>
                {products.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'inquiries'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-300 hover:bg-neutral-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4" />
                <span>B2B / Bulk Inquiries</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                activeTab === 'inquiries' ? 'bg-black text-white' : 'bg-neutral-800 text-neutral-400'
              }`}>
                {inquiries.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                activeTab === 'settings'
                  ? 'bg-white text-black shadow-md'
                  : 'text-neutral-300 hover:bg-neutral-800/60'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Store & WhatsApp Settings</span>
            </button>
          </div>

          {/* Quick Info Box */}
          <div className="bg-[#10121a]/70 border border-neutral-800/80 rounded-2xl p-4 text-xs space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono font-bold block">
              Active WhatsApp Line
            </span>
            <p className="font-mono text-emerald-400 font-bold">+{brandInfo.whatsappNumber}</p>
            <p className="text-[11px] text-neutral-400 leading-snug">
              All web orders and custom quote inquiries are instantly piped to this WhatsApp.
            </p>
          </div>
        </aside>

        {/* Right Main Content Area */}
        <main className="flex-1 space-y-6">

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Metric Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-[#10121a] border border-neutral-800 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-neutral-400 text-xs">
                    <span>Total Sales (Est.)</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-black font-mono text-white">₹{totalRevenue.toLocaleString('en-IN')}</p>
                  <span className="text-[11px] text-emerald-400 font-mono">From {totalOrdersCount} recorded orders</span>
                </div>

                <div className="bg-[#10121a] border border-neutral-800 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-neutral-400 text-xs">
                    <span>Active Orders</span>
                    <ShoppingBag className="w-4 h-4 text-sky-400" />
                  </div>
                  <p className="text-2xl font-black font-mono text-white">{pendingOrdersCount}</p>
                  <span className="text-[11px] text-neutral-400 font-mono">Pending / In Production</span>
                </div>

                <div className="bg-[#10121a] border border-neutral-800 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-neutral-400 text-xs">
                    <span>B2B Quote Requests</span>
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-2xl font-black font-mono text-white">{totalInquiriesCount}</p>
                  <span className="text-[11px] text-amber-400 font-mono">Colleges & Corporate Teams</span>
                </div>

                <div className="bg-[#10121a] border border-neutral-800 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-neutral-400 text-xs">
                    <span>Total Catalog Drops</span>
                    <Package className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-2xl font-black font-mono text-white">{products.length}</p>
                  <span className="text-[11px] text-neutral-400 font-mono">Active Products in Store</span>
                </div>
              </div>

              {/* Recent Orders Overview */}
              <div className="bg-[#10121a] border border-neutral-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-white">Recent Customer Orders</h3>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className="text-xs text-neutral-400 hover:text-white underline font-mono"
                  >
                    View All Orders →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-neutral-900/60 text-neutral-400 font-mono uppercase text-[10px]">
                      <tr>
                        <th className="py-2.5 px-3 rounded-l-lg">Order ID</th>
                        <th className="py-2.5 px-3">Customer</th>
                        <th className="py-2.5 px-3">Items</th>
                        <th className="py-2.5 px-3">Total</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3 rounded-r-lg">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800/60">
                      {orders.slice(0, 3).map((o) => (
                        <tr key={o.orderId} className="hover:bg-neutral-900/40">
                          <td className="py-3 px-3 font-mono font-bold text-white">{o.orderId}</td>
                          <td className="py-3 px-3">
                            <p className="font-semibold text-neutral-200">{o.customerName}</p>
                            <span className="text-[11px] text-neutral-500 font-mono">{o.customerPhone}</span>
                          </td>
                          <td className="py-3 px-3 text-neutral-400">{o.items.length} item(s)</td>
                          <td className="py-3 px-3 font-mono font-bold text-white">₹{o.total.toLocaleString('en-IN')}</td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              o.status === 'Delivered' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                              o.status === 'Shipped' ? 'bg-sky-950 text-sky-400 border border-sky-800' :
                              'bg-amber-950 text-amber-400 border border-amber-800'
                            }`}>
                              {o.status}
                            </span>
                          </td>
                          <td className="py-3 px-3">
                            <a
                              href={`https://wa.me/${o.customerPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${o.customerName}! Update on your Cilck Clothing order #${o.orderId}: Current status is ${o.status}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-400 hover:underline font-mono text-[11px]"
                            >
                              WhatsApp Customer
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* B2B Inquiries Mini View */}
              <div className="bg-[#10121a] border border-neutral-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-white">Latest Custom & Bulk Merch Quotes</h3>
                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="text-xs text-neutral-400 hover:text-white underline font-mono"
                  >
                    View All Inquiries →
                  </button>
                </div>

                <div className="space-y-3">
                  {inquiries.slice(0, 2).map((inq) => (
                    <div key={inq.id} className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{inq.brandOrEvent}</span>
                          <span className="text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400 font-mono">{inq.quantity} pcs</span>
                        </div>
                        <p className="text-neutral-400 text-[11px] mt-0.5">
                          {inq.garmentType} • {inq.brandingType} • Est. Budget: {inq.budget}
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${inq.contactPerson}! Regarding your custom merch inquiry for ${inq.brandOrEvent} (${inq.quantity} pcs of ${inq.garmentType}): We have generated your formal quote.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 font-bold rounded-lg text-[11px] flex items-center justify-center gap-1.5"
                      >
                        Send Formal Quote
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ORDERS MANAGEMENT */}
          {activeTab === 'orders' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h2 className="text-lg font-bold text-white">Orders Management</h2>
                  <p className="text-xs text-neutral-400">View and update customer delivery status in real-time</p>
                </div>

                {/* Filter tabs */}
                <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-xl border border-neutral-800 text-xs">
                  {['All', 'Pending', 'Confirmed', 'Shipped', 'Delivered'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setOrderFilter(status)}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                        orderFilter === status
                          ? 'bg-white text-black shadow'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Orders Table */}
              <div className="bg-[#10121a] border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-neutral-900/80 text-neutral-400 font-mono uppercase text-[10px] border-b border-neutral-800">
                      <tr>
                        <th className="py-3 px-4">Order ID & Date</th>
                        <th className="py-3 px-4">Customer Details</th>
                        <th className="py-3 px-4">Items Ordered</th>
                        <th className="py-3 px-4">Total Amount</th>
                        <th className="py-3 px-4">Status & Update</th>
                        <th className="py-3 px-4">Direct Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800">
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="py-8 text-center text-neutral-500">
                            No orders found for status "{orderFilter}".
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.map((order) => (
                          <tr key={order.orderId} className="hover:bg-neutral-900/40">
                            <td className="py-3.5 px-4">
                              <span className="font-mono font-bold text-white block">{order.orderId}</span>
                              <span className="text-[10px] text-neutral-500 font-mono">{order.date}</span>
                            </td>

                            <td className="py-3.5 px-4 max-w-xs">
                              <p className="font-semibold text-white">{order.customerName}</p>
                              <p className="text-[11px] font-mono text-neutral-400">{order.customerPhone}</p>
                              <p className="text-[10px] text-neutral-500 line-clamp-1 mt-0.5">{order.customerAddress}</p>
                            </td>

                            <td className="py-3.5 px-4">
                              <div className="space-y-1">
                                {order.items.map((it, idx) => (
                                  <p key={idx} className="text-[11px] text-neutral-300">
                                    • {it.name} <span className="text-neutral-500 font-mono">({it.size} × {it.qty})</span>
                                  </p>
                                ))}
                              </div>
                            </td>

                            <td className="py-3.5 px-4">
                              <span className="font-mono font-bold text-emerald-400 text-sm block">
                                ₹{order.total.toLocaleString('en-IN')}
                              </span>
                              <span className="text-[10px] text-neutral-500">{order.paymentMethod}</span>
                            </td>

                            <td className="py-3.5 px-4">
                              <select
                                value={order.status}
                                onChange={(e) => onUpdateOrderStatus(order.orderId, e.target.value)}
                                className={`text-xs font-mono font-bold rounded-lg px-2.5 py-1.5 border focus:outline-none ${
                                  order.status === 'Delivered' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' :
                                  order.status === 'Shipped' ? 'bg-sky-950 text-sky-400 border-sky-800' :
                                  order.status === 'Confirmed' ? 'bg-purple-950 text-purple-400 border-purple-800' :
                                  'bg-amber-950 text-amber-400 border-amber-800'
                                }`}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </td>

                            <td className="py-3.5 px-4">
                              <a
                                href={`https://wa.me/${order.customerPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${order.customerName}! Greetings from Cilck Clothing (${brandInfo.domain}).\nYour Order #${order.orderId} of amount ₹${order.total} is currently: *${order.status}*.\nDelivery Address: ${order.customerAddress}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 font-bold text-[11px] inline-flex items-center gap-1"
                              >
                                Notify WhatsApp
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRODUCTS MANAGEMENT */}
          {activeTab === 'products' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h2 className="text-lg font-bold text-white">Products Catalog</h2>
                  <p className="text-xs text-neutral-400">Add, edit pricing, update inventory and remove items</p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-60">
                    <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search drops..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none"
                    />
                  </div>

                  <button
                    onClick={() => setShowAddModal(true)}
                    className="px-4 py-2 bg-white text-black hover:bg-neutral-200 font-bold text-xs rounded-xl flex items-center gap-1.5 shrink-0 shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Drop</span>
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="bg-[#10121a] border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="aspect-[4/3] bg-neutral-950 relative overflow-hidden">
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover object-top" />
                        <span className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono border border-neutral-700">
                          {p.gsm}
                        </span>
                        <span className="absolute top-2 right-2 bg-neutral-900/90 text-neutral-300 px-2 py-0.5 rounded text-[10px] font-mono">
                          Stock: {p.stock}
                        </span>
                      </div>

                      <div className="p-4 space-y-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block">
                          {p.category} • {p.subcategory}
                        </span>
                        <h4 className="font-bold text-sm text-white line-clamp-1">{p.name}</h4>
                        <div className="flex items-baseline gap-2 pt-1">
                          <span className="text-base font-black font-mono text-white">₹{p.price}</span>
                          <span className="text-xs text-neutral-500 line-through font-mono">₹{p.originalPrice}</span>
                          <span className="text-[10px] text-emerald-400 font-bold font-mono">{p.discount}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-neutral-900/50 border-t border-neutral-800 flex items-center justify-between">
                      <button
                        onClick={() => setEditingProduct(p)}
                        className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg text-xs font-semibold flex items-center gap-1"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete ${p.name}?`)) {
                            onDeleteProduct(p.id);
                          }
                        }}
                        className="p-1.5 text-neutral-500 hover:text-red-400 rounded-lg hover:bg-neutral-800 transition-colors"
                        title="Delete drop"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: BULK INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div>
                <h2 className="text-lg font-bold text-white">Custom Merch & B2B Inquiries</h2>
                <p className="text-xs text-neutral-400">Incoming requests from colleges, startups, and fest organizing teams</p>
              </div>

              <div className="space-y-3">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="bg-[#10121a] border border-neutral-800 rounded-2xl p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{inq.brandOrEvent}</span>
                          <span className="text-[10px] font-mono bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">
                            {inq.quantity} pcs
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Contact: <strong className="text-neutral-200">{inq.contactPerson}</strong> ({inq.phone}) • Received on: {inq.date}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={inq.status}
                          onChange={(e) => onUpdateInquiryStatus(inq.id, e.target.value)}
                          className="text-xs font-mono font-bold bg-neutral-900 border border-neutral-700 rounded-lg px-2.5 py-1 text-white"
                        >
                          <option value="New Inquiry">New Inquiry</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Sampling">Sampling</option>
                          <option value="In Production">In Production</option>
                          <option value="Closed">Closed</option>
                        </select>

                        <a
                          href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${inq.contactPerson}! Regarding your custom merch inquiry for ${inq.brandOrEvent}:\n\nGarment: ${inq.garmentType}\nBranding: ${inq.brandingType}\nQuantity: ${inq.quantity} pieces\nEst. Total: ${inq.budget}\n\nOur Mumbai tailoring workshop has reviewed your request. Let's discuss digital mockup and dispatch timeline!`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                        >
                          Open WhatsApp Chat
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                      <div className="p-2.5 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
                        <span className="text-[10px] text-neutral-500 block uppercase">Garment Type</span>
                        <span className="text-white font-medium">{inq.garmentType}</span>
                      </div>
                      <div className="p-2.5 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
                        <span className="text-[10px] text-neutral-500 block uppercase">Printing / Technique</span>
                        <span className="text-white font-medium">{inq.brandingType}</span>
                      </div>
                      <div className="p-2.5 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
                        <span className="text-[10px] text-neutral-500 block uppercase">Quantity</span>
                        <span className="text-white font-medium">{inq.quantity} pieces</span>
                      </div>
                      <div className="p-2.5 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
                        <span className="text-[10px] text-neutral-500 block uppercase">Estimated Budget</span>
                        <span className="text-emerald-400 font-bold">{inq.budget}</span>
                      </div>
                    </div>

                    {inq.notes && (
                      <div className="text-xs bg-neutral-950 p-3 rounded-xl border border-neutral-800/80 text-neutral-300">
                        <strong className="text-neutral-400 block mb-1">Customer Design Brief:</strong>
                        <p className="leading-relaxed">{inq.notes}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: STORE SETTINGS */}
          {activeTab === 'settings' && (
            <div className="bg-[#10121a] border border-neutral-800 rounded-2xl p-6 space-y-6 max-w-2xl animate-in fade-in duration-200">
              <div>
                <h2 className="text-lg font-bold text-white">Store & WhatsApp Setup</h2>
                <p className="text-xs text-neutral-400">Configure client phone, address, and live notification tickers</p>
              </div>

              {savedSettingsNotice && (
                <div className="p-3 bg-emerald-950 border border-emerald-800 rounded-xl text-emerald-400 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Store settings updated successfully and saved to live storefront!</span>
                </div>
              )}

              <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={storeSettings.name}
                    onChange={(e) => setStoreSettings({ ...storeSettings, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                    WhatsApp Number (without + or spaces)
                  </label>
                  <input
                    type="text"
                    value={storeSettings.whatsappNumber}
                    onChange={(e) => setStoreSettings({ ...storeSettings, whatsappNumber: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-white font-mono focus:outline-none focus:border-neutral-600"
                  />
                  <span className="text-[11px] text-neutral-500 mt-1 block">
                    Current active order destination: +{storeSettings.whatsappNumber}
                  </span>
                </div>

                <div>
                  <label className="font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                    Customer Calling Number
                  </label>
                  <input
                    type="text"
                    value={storeSettings.phone}
                    onChange={(e) => setStoreSettings({ ...storeSettings, phone: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-white font-mono focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                    GST Number (GSTIN)
                  </label>
                  <input
                    type="text"
                    value={storeSettings.gstNumber || ''}
                    onChange={(e) => setStoreSettings({ ...storeSettings, gstNumber: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-white font-mono uppercase focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                    Physical Workshop / Store Address (GTB Nagar)
                  </label>
                  <textarea
                    rows={2}
                    value={storeSettings.address}
                    onChange={(e) => setStoreSettings({ ...storeSettings, address: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-neutral-600 resize-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                    Top Announcement Bar Ticker
                  </label>
                  <input
                    type="text"
                    value={storeSettings.announcement}
                    onChange={(e) => setStoreSettings({ ...storeSettings, announcement: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-300 uppercase tracking-wider block mb-1.5">
                    Free Shipping Threshold (₹)
                  </label>
                  <input
                    type="number"
                    value={storeSettings.freeShippingThreshold}
                    onChange={(e) => setStoreSettings({ ...storeSettings, freeShippingThreshold: Number(e.target.value) })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-white font-mono focus:outline-none focus:border-neutral-600"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black hover:bg-neutral-200 font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-lg"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Store Configuration</span>
                </button>
              </form>
            </div>
          )}

        </main>
      </div>

      {/* MODAL: ADD PRODUCT */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#10121a] border border-neutral-700 rounded-2xl w-full max-w-lg p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
              <h3 className="font-bold text-base text-white">Add New Product Drop</h3>
              <button onClick={() => setShowAddModal(false)} className="text-neutral-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateProductSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Product Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vintage Faux Leather Varsity Jacket"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white"
                  >
                    <option value="t-shirts">T-Shirts</option>
                    <option value="varsity-jackets">Varsity & Jackets</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">GSM / Fabric Detail</label>
                  <input
                    type="text"
                    value={newProduct.gsm}
                    onChange={(e) => setNewProduct({ ...newProduct, gsm: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Original Price (₹)</label>
                  <input
                    type="number"
                    value={newProduct.originalPrice}
                    onChange={(e) => setNewProduct({ ...newProduct, originalPrice: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Stock Qty</label>
                  <input
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Image URL (Unsplash or direct link)</label>
                <input
                  type="url"
                  required
                  value={newProduct.images[0]}
                  onChange={(e) => setNewProduct({ ...newProduct, images: [e.target.value] })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white text-[11px]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Product Description</label>
                <textarea
                  rows={2}
                  placeholder="Fabric composition, fit, wash care..."
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-neutral-800 rounded-xl text-neutral-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-white text-black rounded-xl font-bold"
                >
                  Publish Drop
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT PRODUCT */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#10121a] border border-neutral-700 rounded-2xl w-full max-w-lg p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
              <h3 className="font-bold text-base text-white">Edit: {editingProduct.name}</h3>
              <button onClick={() => setEditingProduct(null)} className="text-neutral-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleEditProductSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Product Name</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Selling Price (₹)</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">MRP / Strike Price</label>
                  <input
                    type="number"
                    value={editingProduct.originalPrice}
                    onChange={(e) => setEditingProduct({ ...editingProduct, originalPrice: Number(e.target.value) })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Available Stock</label>
                  <input
                    type="number"
                    value={editingProduct.stock}
                    onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">GSM / Specifications</label>
                <input
                  type="text"
                  value={editingProduct.gsm}
                  onChange={(e) => setEditingProduct({ ...editingProduct, gsm: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 bg-neutral-800 rounded-xl text-neutral-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-white text-black rounded-xl font-bold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
