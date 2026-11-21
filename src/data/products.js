export const DEFAULT_BRAND_INFO = {
  name: "CILCK CLOTHING",
  established: "2024",
  domain: "cilckclothing.com",
  phone: "+91 79776 20643",
  whatsappNumber: "917977620643",
  address: "Cilck clothing, opposite Indian Overseas Bank, GTB Nagar railway station, Mumbai, Maharashtra 400022",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400022",
  announcement: "🔥 FREE SHIPPING ALL OVER INDIA ON ORDERS ABOVE ₹999 | MUMBAI STORE & WORKSHOP OPEN",
  email: "contact@cilckclothing.com",
  timings: "Mon - Sat: 11:00 AM - 9:30 PM | Sun: 12:00 PM - 8:00 PM",
  freeShippingThreshold: 999
};

export const BRAND_INFO = DEFAULT_BRAND_INFO;
export const PRODUCTS = INITIAL_PRODUCTS;
export const CATEGORIES = NAV_CATEGORIES;

// Exact Category Hierarchy of Destiny Clothing
export const NAV_CATEGORIES = [
  {
    id: "all",
    name: "All Drops"
  },
  {
    id: "t-shirts",
    name: "T-Shirts",
    hasDropdown: true,
    subcategories: [
      { id: "round-neck", name: "Round Neck T-Shirts (180 GSM)" },
      { id: "oversized-tees", name: "Oversized T-Shirts (220-240 GSM)" },
      { id: "polo-tees", name: "Polo T-Shirts" },
      { id: "kids-tees", name: "Kids T-Shirts" }
    ]
  },
  {
    id: "varsity-jackets",
    name: "Varsity & Jackets",
    hasDropdown: true,
    subcategories: [
      { id: "leather-varsity", name: "Leather Sleeves Varsity (350 GSM)" },
      { id: "cotton-varsity", name: "Cotton Sleeves Varsity" },
      { id: "hoodies", name: "Heavyweight Hoodies" },
      { id: "zipper-jackets", name: "Zipper Hoodies & Jackets" },
      { id: "sweatshirts", name: "Crewneck Sweatshirts" }
    ]
  },
  {
    id: "accessories",
    name: "Accessories",
    hasDropdown: true,
    subcategories: [
      { id: "caps", name: "Embroidered Caps" },
      { id: "tote-bags", name: "Canvas Tote Bags" }
    ]
  },
  {
    id: "custom-bulk",
    name: "Bulk & Corporate",
    badge: "B2B Quotes"
  }
];

export const INITIAL_PRODUCTS = [
  // 1. Oversized T-Shirts
  {
    id: "clk-001",
    name: "Heavyweight 240 GSM Oversized Streetwear Tee",
    category: "t-shirts",
    subcategory: "oversized-tees",
    price: 899,
    originalPrice: 1499,
    discount: "40% OFF",
    rating: 4.9,
    reviewsCount: 168,
    badge: "Bestseller",
    gsm: "240 GSM Bio-Washed",
    fit: "Boxy Drop-Shoulder Relaxed Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Vintage Onyx", hex: "#18181b" },
      { name: "Bone White", hex: "#f4f4f5" },
      { name: "Mocha Brown", hex: "#451a03" }
    ],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Premium oversized drop-shoulder tee manufactured with 100% super-combed bio-washed single jersey. 240 GSM heavyweight drape with zero color bleeding and ribbed Lycra collar.",
    features: ["240 GSM 100% Combed Cotton", "Drop-Shoulder Relaxed Fit", "High-Density Puff Print Ready", "Pre-shrunk Fabric Guarantee"],
    stock: 45
  },
  // 2. Round Neck T-Shirt
  {
    id: "clk-002",
    name: "Classic 180 GSM Pure Cotton Round Neck Tee",
    category: "t-shirts",
    subcategory: "round-neck",
    price: 549,
    originalPrice: 899,
    discount: "39% OFF",
    rating: 4.8,
    reviewsCount: 94,
    badge: "Daily Essential",
    gsm: "180 GSM Pure Cotton",
    fit: "Regular Comfort Fit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Jet Black", hex: "#09090b" },
      { name: "Pure White", hex: "#ffffff" },
      { name: "Navy Blue", hex: "#172554" }
    ],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80"
    ],
    description: "The versatile everyday round neck tee preferred by colleges and corporate teams for custom screen printing and embroidery. Soft hand-feel with breathable weave.",
    features: ["180 GSM 100% Ring-Spun Cotton", "Reinforced Neckline", "Double Stitched Hem", "Perfect for Screen & DTF Printing"],
    stock: 60
  },
  // 3. Polo T-Shirt
  {
    id: "clk-003",
    name: "Premium Bio-Washed Pique Polo T-Shirt",
    category: "t-shirts",
    subcategory: "polo-tees",
    price: 799,
    originalPrice: 1299,
    discount: "38% OFF",
    rating: 4.8,
    reviewsCount: 72,
    badge: "Corporate Pick",
    gsm: "220 GSM Honeycomb Pique",
    fit: "Tailored Smart Fit",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Royal Navy", hex: "#1e3a8a" },
      { name: "Charcoal Grey", hex: "#374151" },
      { name: "Burgundy", hex: "#881337" }
    ],
    images: [
      "https://images.unsplash.com/photo-1625910513413-7ec224f8e916?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Refined honeycomb knit pique polo designed for corporate branding, sports teams, and college staff uniforms. Features anti-curling ribbed collar and mother-of-pearl buttons.",
    features: ["220 GSM Bio-Washed Pique Cotton", "Anti-Roll Flat Knit Collar", "Tipping Stripe Detailing", "Ideal for Chest Logo Embroidery"],
    stock: 35
  },
  // 4. Leather Sleeves Varsity Jacket (Destiny Signature!)
  {
    id: "clk-004",
    name: "Signature Mumbai Varsity Jacket (Faux Leather Sleeves)",
    category: "varsity-jackets",
    subcategory: "leather-varsity",
    price: 2499,
    originalPrice: 4499,
    discount: "44% OFF",
    rating: 5.0,
    reviewsCount: 112,
    badge: "Destiny Style Flagship",
    gsm: "350 GSM Wool + PU Leather",
    fit: "Custom Bomber Silhouette",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Obsidian & Off-White", hex: "#18181b" },
      { name: "Forest Green & Cream", hex: "#14532d" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Our signature varsity jacket built in classic collegiate styling. Heavy melton wool torso coupled with premium cruelty-free faux leather sleeves, custom brass snaps, and quilted diamond satin interior lining.",
    features: ["Heavy Melton Wool Blend Body", "Premium Vegan PU Leather Sleeves", "Chenille & Chainstitch Patch Ready", "Quilted Thermal Satin Lining"],
    stock: 25
  },
  // 5. Cotton Sleeves Varsity Jacket
  {
    id: "clk-005",
    name: "All-Cotton Fleece College Varsity Jacket",
    category: "varsity-jackets",
    subcategory: "cotton-varsity",
    price: 1899,
    originalPrice: 3199,
    discount: "40% OFF",
    rating: 4.9,
    reviewsCount: 65,
    badge: "College Fest Favorite",
    gsm: "350 GSM Heavy French Fleece",
    fit: "Relaxed Varsity Fit",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy & Grey Heather", hex: "#1e293b" },
      { name: "Black & White", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Full-fleece varsity jacket providing high breathability and lightweight warmth. Extremely popular for university departments, societies, and fest core committees.",
    features: ["350 GSM 100% Combed Cotton Fleece", "Striped Rib Knit Collar & Cuffs", "Snap Button Closure", "Front Slit Pockets"],
    stock: 30
  },
  // 6. Heavyweight Streetwear Hoodie
  {
    id: "clk-006",
    name: "Stealth 380 GSM French Terry Pullover Hoodie",
    category: "varsity-jackets",
    subcategory: "hoodies",
    price: 1599,
    originalPrice: 2699,
    discount: "41% OFF",
    rating: 4.9,
    reviewsCount: 140,
    badge: "Winter Drop",
    gsm: "380 GSM Heavy French Terry",
    fit: "Oversized Boxy Silhouette",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pitch Black", hex: "#09090b" },
      { name: "Dusty Beige", hex: "#d4d4d8" },
      { name: "Deep Olive", hex: "#365314" }
    ],
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80"
    ],
    features: ["380 GSM Brushed Loopback Cotton", "Double-Layered Structured Hood", "Hidden Kangaroo Pockets", "Seamless Streetwear Drapes"],
    stock: 40
  },
  // 7. Zipper Jacket
  {
    id: "clk-007",
    name: "Urban Heavyweight Full-Zip Streetwear Jacket",
    category: "varsity-jackets",
    subcategory: "zipper-jackets",
    price: 1799,
    originalPrice: 2999,
    discount: "40% OFF",
    rating: 4.8,
    reviewsCount: 54,
    badge: "Outerwear",
    gsm: "350 GSM Pure Cotton",
    fit: "Regular Zip Fit",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Gunmetal Grey", hex: "#374151" },
      { name: "Matte Black", hex: "#111827" }
    ],
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80"
    ],
    features: ["Heavy Duty YKK Metal Zipper", "Ribbed Hem & Cuffs", "Dual Side Pockets", "Brushed Interior for Warmth"],
    stock: 22
  },
  // 8. Custom Embroidered Caps
  {
    id: "clk-008",
    name: "Cilck 6-Panel Distressed Dad Hat / Cap",
    category: "accessories",
    subcategory: "caps",
    price: 549,
    originalPrice: 999,
    discount: "45% OFF",
    rating: 4.7,
    reviewsCount: 48,
    badge: "Accessory",
    gsm: "100% Chino Twill Cotton",
    fit: "Adjustable Antique Brass Buckle",
    sizes: ["Free Size (Adjustable)"],
    colors: [
      { name: "Washed Black", hex: "#18181b" },
      { name: "Desert Khaki", hex: "#d4b996" }
    ],
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&auto=format&fit=crop&q=80"
    ],
    features: ["Unstructured 6-Panel Low Profile", "Antique Metal Closure", "Pre-curved Visor", "High-Density Embroidery"],
    stock: 50
  },
  // 9. Canvas Tote Bag
  {
    id: "clk-009",
    name: "Heavyweight 12oz Organic Canvas Tote Bag",
    category: "accessories",
    subcategory: "tote-bags",
    price: 399,
    originalPrice: 699,
    discount: "43% OFF",
    rating: 4.8,
    reviewsCount: 37,
    badge: "Eco Merch",
    gsm: "350 GSM Cotton Duck Canvas",
    fit: "Spacious Utility Tote (15x16 inch)",
    sizes: ["One Size"],
    colors: [
      { name: "Raw Ecru Natural", hex: "#fef3c7" },
      { name: "Charcoal Black", hex: "#1f2937" }
    ],
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80"
    ],
    features: ["100% Natural Organic Cotton", "Reinforced Cross-Stitch Handles", "Holds up to 15 kg", "Custom Screen Print Ready"],
    stock: 40
  }
];

export const INITIAL_ORDERS = [
  {
    orderId: "CLK-942810",
    customerName: "Rohan Varma",
    customerPhone: "+91 98201 44521",
    customerAddress: "Flat 402, Sea Green Apts, Bandra West, Mumbai 400050",
    date: "2026-11-21",
    items: [
      { name: "Heavyweight 240 GSM Oversized Streetwear Tee", size: "L", color: "Vintage Onyx", qty: 2, price: 899 },
      { name: "Signature Mumbai Varsity Jacket (Faux Leather Sleeves)", size: "XL", color: "Obsidian & Off-White", qty: 1, price: 2499 }
    ],
    total: 4297,
    status: "Confirmed",
    paymentMethod: "WhatsApp Order / UPI"
  },
  {
    orderId: "CLK-819231",
    customerName: "Ayesha Shaikh",
    customerPhone: "+91 77189 22019",
    customerAddress: "Hiranandani Gardens, Powai, Mumbai 400076",
    date: "2026-11-20",
    items: [
      { name: "Stealth 380 GSM French Terry Pullover Hoodie", size: "M", color: "Pitch Black", qty: 1, price: 1599 },
      { name: "Cilck 6-Panel Distressed Dad Hat / Cap", size: "Free Size", color: "Washed Black", qty: 1, price: 549 }
    ],
    total: 2148,
    status: "Shipped",
    paymentMethod: "Cash on Delivery (COD)"
  },
  {
    orderId: "CLK-703412",
    customerName: "Kabir Malhotra",
    customerPhone: "+91 99304 88123",
    customerAddress: "Chembur East, Near Diamond Garden, Mumbai 400071",
    date: "2026-11-19",
    items: [
      { name: "Classic 180 GSM Pure Cotton Round Neck Tee", size: "L", color: "Jet Black", qty: 3, price: 549 }
    ],
    total: 1647,
    status: "Delivered",
    paymentMethod: "Online UPI"
  }
];

export const INITIAL_INQUIRIES = [
  {
    id: "INQ-201",
    brandOrEvent: "NM College Cultural Fest 'Umang'",
    contactPerson: "Aditya S.",
    phone: "+91 98205 12345",
    garmentType: "Varsity & Bomber Jackets",
    brandingType: "Chenille Embroidery & Faux Leather",
    quantity: 65,
    budget: "₹1,07,250",
    date: "2026-11-21",
    status: "New Inquiry",
    notes: "Need navy blue wool varsity jackets with college logo embroidered on chest and organizing committee on back."
  },
  {
    id: "INQ-202",
    brandOrEvent: "Fintech Startup Onboarding Kits",
    contactPerson: "Priya Nair",
    phone: "+91 91672 99881",
    garmentType: "Oversized Heavyweight Tees",
    brandingType: "High Density Puff Print",
    quantity: 120,
    budget: "₹45,600",
    date: "2026-11-20",
    status: "Contacted",
    notes: "Black oversized 240 GSM tees with minimal puff logo on left pocket area."
  }
];
