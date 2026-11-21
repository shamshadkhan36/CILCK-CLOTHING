export const DEFAULT_BRAND_INFO = {
  name: "CILCK CLOTHING",
  shortName: "Cilck",
  established: "2024",
  domain: "cilckclothing.com",
  phone: "+91 79776 20643",
  whatsappNumber: "917977620643",
  address: "Cilck clothing, opposite Indian Overseas Bank, GTB Nagar railway station, Mumbai, Maharashtra 400022",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400022",
  announcement: "Get 10% OFF on All Orders | FREE Shipping | Shop Now!",
  email: "contact@cilckclothing.com",
  timings: "Mon - Sat: 11:00 AM - 9:30 PM | Sun: 12:00 PM - 8:00 PM",
  freeShippingThreshold: 999
};

export const BRAND_INFO = DEFAULT_BRAND_INFO;

// Top Menu Navigation matching Destiny Clothing Screenshot 1
export const DESTINY_NAV_LINKS = [
  { id: "farewell", name: "FAREWELL" },
  { id: "hoodies-jackets", name: "HOODIES & JACKETS" },
  { id: "polo-tshirts", name: "POLO T-SHIRTS" },
  { id: "t-shirts", name: "T-SHIRTS" },
  { id: "varsity", name: "VARSITY" },
  { id: "kids-tshirts", name: "KIDS T-SHIRTS" },
  { id: "accessories", name: "ACCESSORIES" },
];

export const NAV_CATEGORIES = DESTINY_NAV_LINKS;
export const CATEGORIES = DESTINY_NAV_LINKS;

// Story Circles Category Bar matching Screenshot 2
export const CATEGORY_STORIES = [
  {
    id: "polo-tshirts",
    name: "POLO",
    img: "https://images.unsplash.com/photo-1625910513413-7ec224f8e916?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "oversized",
    name: "OVERSIZED",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "hoodies-jackets",
    name: "HOODIES",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "zipper",
    name: "ZIPPER",
    img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "sweatshirts",
    name: "SWEATSHIRTS",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "varsity",
    name: "VARSITY",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "t-shirts",
    name: "ROUND NECK",
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300&auto=format&fit=crop&q=80"
  }
];

// Brands We Worked With matching Screenshot 2
export const BRANDS_WORKED_WITH = [
  { name: "IMS Ghaziabad", label: "IMS GHAZIABAD GROUP" },
  { name: "Nykaa", label: "NYKAA" },
  { name: "Crompton", label: "Crompton" },
  { name: "Apollo Tyres", label: "apollo TYRES" },
  { name: "Radisson", label: "Radisson MUMBAI GOREGAON" },
  { name: "Airtel", label: "airtel" }
];

// Exact Destiny Product Cards matching Screenshot 3
export const INITIAL_PRODUCTS = [
  {
    id: "dest-001",
    name: "Customized Round Neck Regular T-Shirt With Your Own Logo/Design",
    category: "t-shirts",
    subHeaderTitle: "ROUND NECK T-SHIRT",
    fabricPill: "COTTON",
    packBadge: "Pack Of 2",
    price: 1299,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    gsm: "180 GSM Pure Cotton",
    fit: "Comfort Regular Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Dark Green", hex: "#1c3d2f" },
      { name: "Black", hex: "#000000" },
      { name: "Navy Blue", hex: "#0f172a" },
      { name: "Crimson Red", hex: "#991b1b" }
    ],
    moreColorsCount: 15,
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80"
    ],
    mockupFrontColor: "#1c3d2f",
    mockupBackColor: "#1c3d2f",
    collarZoomColor: "#1c3d2f",
    description: "Premium customizable 100% bio-washed cotton round neck t-shirts designed for college fests, team gatherings, and corporate client meetings. Includes high-resolution chest and back printing.",
    stock: 75
  },
  {
    id: "dest-002",
    name: "Customized Oversized 180 Gsm T-Shirt With Your Own Logo/Design",
    category: "t-shirts",
    subHeaderTitle: "OVERSIZED",
    fabricPill: "180 GSM",
    packBadge: "Pack Of 2",
    price: 1399,
    originalPrice: 2199,
    rating: 4.8,
    reviewsCount: 110,
    badge: "Trending",
    gsm: "180 GSM Combed Cotton",
    fit: "Relaxed Drop Shoulder",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Cream Sand", hex: "#e5d5be" },
      { name: "Mocha", hex: "#5c3d2e" },
      { name: "Black", hex: "#171717" },
      { name: "White", hex: "#f8fafc" }
    ],
    moreColorsCount: 8,
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"
    ],
    mockupFrontColor: "#e5d5be",
    mockupBackColor: "#e5d5be",
    collarZoomColor: "#e5d5be",
    description: "Drop-shoulder relaxed oversized silhouette with front chest badge print and large custom graphic back print.",
    stock: 60
  },
  {
    id: "dest-003",
    name: "Customized Polyester Polo Tshirt 200 Gsm With Your Own Logo/Design",
    category: "polo-tshirts",
    subHeaderTitle: "POLO T-SHIRT",
    fabricPill: "POLYESTER",
    packBadge: "Pack Of 2",
    price: 1499,
    originalPrice: 2299,
    rating: 4.9,
    reviewsCount: 88,
    badge: "Corporate Pick",
    gsm: "200 GSM Dry-Fit Polyester",
    fit: "Smart Tailored Collar Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Royal Blue", hex: "#1d4ed8" },
      { name: "Jet Black", hex: "#111827" },
      { name: "Pure White", hex: "#ffffff" },
      { name: "Emerald", hex: "#065f46" }
    ],
    moreColorsCount: 3,
    images: [
      "https://images.unsplash.com/photo-1625910513413-7ec224f8e916?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"
    ],
    mockupFrontColor: "#1d4ed8",
    mockupBackColor: "#1d4ed8",
    collarZoomColor: "#1d4ed8",
    description: "Crisp collared polo shirts engineered with breathable moisture-wicking honeycomb pique for employee kits and company offsites.",
    stock: 40
  },
  {
    id: "dest-004",
    name: "Customized Oversized 220 Gsm T-Shirt With Your Own Logo/Design",
    category: "t-shirts",
    subHeaderTitle: "OVERSIZED",
    fabricPill: "220 GSM",
    packBadge: "Pack Of 2",
    price: 1499,
    originalPrice: 2399,
    rating: 5.0,
    reviewsCount: 95,
    badge: "Heavy Streetwear",
    gsm: "220 GSM French Cotton",
    fit: "Boxy Streetwear Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Earth Brown", hex: "#78350f" },
      { name: "Dark Navy", hex: "#1e293b" },
      { name: "Crimson", hex: "#991b1b" },
      { name: "Pitch Black", hex: "#000000" }
    ],
    moreColorsCount: 7,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80"
    ],
    mockupFrontColor: "#78350f",
    mockupBackColor: "#78350f",
    collarZoomColor: "#78350f",
    description: "Heavyweight 220 GSM boxy tee with high-density puff printing and ribbed neck collar. Built to withstand over 100+ washes.",
    stock: 55
  },
  {
    id: "dest-005",
    name: "Customized Varsity Jacket With PU Faux Leather Sleeves (350 GSM)",
    category: "varsity",
    subHeaderTitle: "VARSITY JACKET",
    fabricPill: "MELTON WOOL + LEATHER",
    packBadge: "Signature",
    price: 2499,
    originalPrice: 4299,
    rating: 5.0,
    reviewsCount: 164,
    badge: "Flagship",
    gsm: "350 GSM Wool Blend",
    fit: "Bomber Varsity Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Maroon & White Leather", hex: "#831843" },
      { name: "Black & Cream Leather", hex: "#18181b" },
      { name: "Navy & White Leather", hex: "#1e3a8a" }
    ],
    moreColorsCount: 4,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80"
    ],
    mockupFrontColor: "#831843",
    mockupBackColor: "#831843",
    collarZoomColor: "#831843",
    description: "Destiny-signature classic varsity jacket with heavy melton wool torso and vegan PU leather sleeves with chenille chest lettering.",
    stock: 25
  },
  {
    id: "dest-006",
    name: "Customized Heavyweight French Terry Hoodie With Your Own Logo",
    category: "hoodies-jackets",
    subHeaderTitle: "HOODIES",
    fabricPill: "380 GSM",
    packBadge: "Pack Of 2",
    price: 1899,
    originalPrice: 2899,
    rating: 4.9,
    reviewsCount: 120,
    badge: "Winter Drop",
    gsm: "380 GSM French Terry",
    fit: "Oversized Pullover",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Matte Black", hex: "#111827" },
      { name: "Heather Grey", hex: "#9ca3af" },
      { name: "Maroon", hex: "#881337" }
    ],
    moreColorsCount: 6,
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80"
    ],
    mockupFrontColor: "#111827",
    mockupBackColor: "#111827",
    collarZoomColor: "#111827",
    description: "Thick double-layered hood with seamless kangaroo pocket and soft brushed fleece interior for winter warmth.",
    stock: 35
  }
];

export const PRODUCTS = INITIAL_PRODUCTS;

// Blogs & Insights matching Screenshot 4
export const BLOGS_POSTS = [
  {
    id: "blog-1",
    title: "Essential Clothing Pieces Every Wardrobe Needs",
    author: "Akash Kumar",
    date: "Mar 26, 2026",
    excerpt: "A well-balanced wardrobe doesn't require excessive options—it starts with a few essential clothing pieces that are versatile, comfortable, and timeless. These staples...",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-2",
    title: "How Modern Technology Powers Apparel Design",
    author: "Akash Kumar",
    date: "Mar 26, 2026",
    excerpt: "In today's fashion industry, printing plays a major role in defining a brand's identity. From bold graphics to minimal logos, the quality...",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "blog-3",
    title: "The Ultimate Hoodie Guide: Style, Comfort & Streetwear Trends",
    author: "Akash Kumar",
    date: "Mar 26, 2026",
    excerpt: "Hoodies have become one of the most essential pieces in modern fashion. Once considered basic sportswear, they are now a key element...",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80"
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
      { name: "Customized Round Neck Regular T-Shirt With Your Own Logo/Design", size: "L", color: "Dark Green", qty: 2, price: 1299 }
    ],
    total: 2598,
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
      { name: "Customized Varsity Jacket With PU Faux Leather Sleeves (350 GSM)", size: "M", color: "Maroon & White Leather", qty: 1, price: 2499 }
    ],
    total: 2499,
    status: "Shipped",
    paymentMethod: "Cash on Delivery (COD)"
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
    notes: "Need navy blue wool varsity jackets with college logo embroidered on chest."
  }
];
