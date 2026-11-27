export const DEFAULT_BRAND_INFO = {
  name: "CILCK CLOTHING",
  shortName: "Cilck",
  established: "2024",
  domain: "cilckclothing.com",
  phone: "+91 82916 74943",
  whatsappNumber: "918291674943",
  address: "Cilck clothing, opposite Indian Overseas Bank, GTB Nagar railway station, Mumbai, Maharashtra 400022",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400022",
  gstNumber: "27CWMPG6300H1ZL",
  razorpayKeyId: "rzp_live_U4iKMhDqe9ljrH",
  announcement: "Get 10% OFF on All Orders | FREE Shipping | Shop Now!",
  email: "contact@cilckclothing.com",
  timings: "Mon - Sat: 11:00 AM - 9:30 PM | Sun: 12:00 PM - 8:00 PM",
  freeShippingThreshold: 999
};

export const BRAND_INFO = DEFAULT_BRAND_INFO;

// Top Menu Navigation
export const DESTINY_NAV_LINKS = [
  { id: "all", name: "ALL PRODUCTS" },
  { id: "t-shirts", name: "T-SHIRTS" },
  { id: "uniforms", name: "UNIFORMS" },
  { id: "outerwear", name: "HOODIES & VARSITY" },
  { id: "jerseys", name: "SPORTS JERSEYS" },
  { id: "merchandise", name: "CUSTOM MERCH" },
  { id: "bulk-quotes", name: "BULK & FESTS" },
];

export const NAV_CATEGORIES = DESTINY_NAV_LINKS;
export const CATEGORIES = DESTINY_NAV_LINKS;

// Story Circles Category Bar matching the client list
export const CATEGORY_STORIES = [
  {
    id: "round-neck",
    name: "ROUND NECK",
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "polo",
    name: "POLO TEES",
    img: "https://images.unsplash.com/photo-1625910513413-7ec224f8e916?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "oversized",
    name: "OVERSIZED",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "varsity",
    name: "VARSITY",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "hoodies",
    name: "HOODIES",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "uniforms",
    name: "UNIFORMS",
    img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "jerseys",
    name: "JERSEYS",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "merchandise",
    name: "CUSTOM MERCH",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&auto=format&fit=crop&q=80"
  }
];

// Brands We Worked With
export const BRANDS_WORKED_WITH = [
  { name: "IMS Ghaziabad", style: "font-serif text-[#1e3a5f] font-bold text-sm leading-tight text-center", sub: "GROUP OF INSTITUTIONS" },
  { name: "NYKAA", style: "font-black text-[#e91e63] text-xl tracking-wider italic font-sans" },
  { name: "Crompton", style: "font-bold text-[#004b87] text-xl tracking-tight font-sans" },
  { name: "apollo", style: "font-black text-[#581c87] text-xl lowercase font-sans", sub: "TYRES" },
  { name: "Radisson", style: "font-serif text-[#1e3a8a] text-lg font-bold", sub: "MUMBAI GOREGAON" },
  { name: "airtel", style: "font-bold text-[#e11d48] text-xl lowercase font-sans" }
];

// Complete 22 Product Categories requested by client
export const INITIAL_PRODUCTS = [
  // 1. Round Neck T-Shirts
  {
    id: "clk-rn-01",
    name: "Customized Round Neck T-Shirts With Your Own Logo/Design",
    category: "t-shirts",
    subHeaderTitle: "ROUND NECK T-SHIRT",
    fabricPill: "180 GSM COTTON",
    packBadge: "Pack Of 2",
    price: 1299,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 168,
    badge: "Bestseller",
    gsm: "180 GSM Bio-Washed",
    fit: "Regular Comfort Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Dark Green", hex: "#1c3d2f" },
      { name: "Jet Black", hex: "#000000" },
      { name: "Navy Blue", hex: "#0f172a" },
      { name: "Pure White", hex: "#ffffff" }
    ],
    moreColorsCount: 15,
    images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#1c3d2f",
    mockupBackColor: "#1c3d2f",
    collarZoomColor: "#1c3d2f",
    description: "100% super-combed bio-washed round neck cotton t-shirt with front chest logo and custom back artwork.",
    stock: 90
  },
  // 2. Polo T-Shirts
  {
    id: "clk-po-02",
    name: "Customized Premium Polo T-Shirts With Embroidered / Printed Logo",
    category: "t-shirts",
    subHeaderTitle: "POLO T-SHIRT",
    fabricPill: "220 GSM PIQUE",
    packBadge: "Pack Of 2",
    price: 1499,
    originalPrice: 2299,
    rating: 4.9,
    reviewsCount: 145,
    badge: "Corporate Pick",
    gsm: "220 GSM Honeycomb Pique",
    fit: "Smart Ribbed Collar Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Royal Blue", hex: "#1d4ed8" },
      { name: "Charcoal", hex: "#374151" },
      { name: "Black", hex: "#111827" },
      { name: "White", hex: "#ffffff" }
    ],
    moreColorsCount: 12,
    images: ["https://images.unsplash.com/photo-1625910513413-7ec224f8e916?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#1d4ed8",
    mockupBackColor: "#1d4ed8",
    collarZoomColor: "#1d4ed8",
    description: "Executive pique polo t-shirt with flat-knit collar and mother-of-pearl buttons. Ideal for company uniforms and events.",
    stock: 80
  },
  // 3. Oversized T-Shirts
  {
    id: "clk-os-03",
    name: "Customized Heavyweight 240 GSM Oversized T-Shirts",
    category: "t-shirts",
    subHeaderTitle: "OVERSIZED T-SHIRT",
    fabricPill: "240 GSM HEAVYWEIGHT",
    packBadge: "Pack Of 2",
    price: 1399,
    originalPrice: 2199,
    rating: 5.0,
    reviewsCount: 198,
    badge: "Streetwear Drop",
    gsm: "240 GSM Heavy Cotton",
    fit: "Drop-Shoulder Boxy Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Sand Beige", hex: "#e5d5be" },
      { name: "Pitch Black", hex: "#171717" },
      { name: "Mocha Brown", hex: "#5c3d2e" }
    ],
    moreColorsCount: 8,
    images: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#e5d5be",
    mockupBackColor: "#e5d5be",
    collarZoomColor: "#e5d5be",
    description: "Trending streetwear oversized cut with drop-shoulder silhouette. High-density puff print and DTF compatible.",
    stock: 65
  },
  // 4. Dry Fit T-Shirts
  {
    id: "clk-df-04",
    name: "Customized Breathable Dry Fit Sports & Gym T-Shirts",
    category: "t-shirts",
    subHeaderTitle: "DRY FIT T-SHIRT",
    fabricPill: "160 GSM MICRO-POLY",
    packBadge: "Pack Of 2",
    price: 999,
    originalPrice: 1699,
    rating: 4.8,
    reviewsCount: 92,
    badge: "Athletic Fit",
    gsm: "160 GSM Moisture Wicking",
    fit: "Active Athletic Stretch",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Neon Lime", hex: "#84cc16" },
      { name: "Stealth Black", hex: "#0a0a0a" },
      { name: "Electric Blue", hex: "#0284c7" }
    ],
    moreColorsCount: 10,
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#0284c7",
    mockupBackColor: "#0284c7",
    collarZoomColor: "#0284c7",
    description: "Ultra-lightweight sweat-wicking dry-fit poly blend. Engineered for marathons, sports teams, and workout sessions.",
    stock: 70
  },
  // 5. Sublimation T-Shirts
  {
    id: "clk-sb-05",
    name: "All-Over Full Sublimation Multi-Color Printed T-Shirts",
    category: "t-shirts",
    subHeaderTitle: "SUBLIMATION T-SHIRT",
    fabricPill: "ALL-OVER PRINT",
    packBadge: "Vibrant Print",
    price: 1199,
    originalPrice: 1899,
    rating: 4.9,
    reviewsCount: 77,
    badge: "Zero Fade",
    gsm: "180 GSM Interlock Poly",
    fit: "Custom Digital Print",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Custom Pantone Artwork", hex: "#6366f1" }
    ],
    moreColorsCount: 5,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#6366f1",
    mockupBackColor: "#6366f1",
    collarZoomColor: "#6366f1",
    description: "Full dye-sublimation printing allowing unlimited colors, gradients, and edge-to-edge sleeve and body patterns.",
    stock: 50
  },
  // 6. Printed T-Shirts
  {
    id: "clk-pt-06",
    name: "Custom High-Density Screen & Puff Printed T-Shirts",
    category: "t-shirts",
    subHeaderTitle: "PRINTED T-SHIRT",
    fabricPill: "PUFF & SCREEN PRINT",
    packBadge: "Pack Of 2",
    price: 1199,
    originalPrice: 1799,
    rating: 4.8,
    reviewsCount: 114,
    badge: "Custom Graphics",
    gsm: "200 GSM Combed Cotton",
    fit: "Standard Graphic Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Mineral Grey", hex: "#4b5563" },
      { name: "Onyx Black", hex: "#111827" },
      { name: "Maroon", hex: "#7f1d1d" }
    ],
    moreColorsCount: 8,
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#4b5563",
    mockupBackColor: "#4b5563",
    collarZoomColor: "#4b5563",
    description: "3D raised puff printing and durable plastisol screen printing. Crack-free guarantees for 50+ wash cycles.",
    stock: 60
  },
  // 7. Embroidered T-Shirts
  {
    id: "clk-em-07",
    name: "Bespoke Computerized Embroidered Crest T-Shirts",
    category: "t-shirts",
    subHeaderTitle: "EMBROIDERED T-SHIRT",
    fabricPill: "JAPANESE EMBROIDERY",
    packBadge: "Pack Of 2",
    price: 1399,
    originalPrice: 2099,
    rating: 5.0,
    reviewsCount: 83,
    badge: "Luxury Detail",
    gsm: "220 GSM Heavyweight Cotton",
    fit: "Tailored Premium Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Classic Navy", hex: "#172554" },
      { name: "Crisp White", hex: "#ffffff" },
      { name: "Forest Green", hex: "#14532d" }
    ],
    moreColorsCount: 6,
    images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#172554",
    mockupBackColor: "#172554",
    collarZoomColor: "#172554",
    description: "High stitch-count computerized embroidery for subtle chest crests, corporate monograms, and institutional badges.",
    stock: 45
  },
  // 8. School Uniforms
  {
    id: "clk-su-08",
    name: "Custom School Uniforms (Shirts, Skirts & Trousers)",
    category: "uniforms",
    subHeaderTitle: "SCHOOL UNIFORM",
    fabricPill: "DURABLE POLY-COTTON",
    packBadge: "Bulk Custom",
    price: 899,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 156,
    badge: "Institutional",
    gsm: "Heavy Twill & Oxford Weave",
    fit: "Comfortable Student Fit",
    sizes: ["Age 4-6", "Age 7-9", "Age 10-12", "Age 13-16", "S", "M", "L"],
    colors: [
      { name: "Sky Blue & Navy", hex: "#38bdf8" },
      { name: "Check Pattern", hex: "#1e3a8a" },
      { name: "White & Grey", hex: "#cbd5e1" }
    ],
    moreColorsCount: 8,
    images: ["https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#38bdf8",
    mockupBackColor: "#38bdf8",
    collarZoomColor: "#38bdf8",
    description: "Complete uniform sets manufactured for schools and academies with custom embroidered school crest and reinforced seams.",
    stock: 120
  },
  // 9. Preschool Uniforms
  {
    id: "clk-ps-09",
    name: "Gentle Organic Cotton Preschool & Kindergarten Uniforms",
    category: "uniforms",
    subHeaderTitle: "PRESCHOOL UNIFORM",
    fabricPill: "100% SOFT COTTON",
    packBadge: "Kids Safe",
    price: 699,
    originalPrice: 1199,
    rating: 5.0,
    reviewsCount: 64,
    badge: "Hypoallergenic",
    gsm: "180 GSM Soft Combed",
    fit: "Easy Slip-on Elasticated",
    sizes: ["2-3 Yrs", "3-4 Yrs", "4-5 Yrs", "5-6 Yrs"],
    colors: [
      { name: "Sunshine Yellow", hex: "#facc15" },
      { name: "Soft Coral", hex: "#fb7185" },
      { name: "Sky Blue", hex: "#60a5fa" }
    ],
    moreColorsCount: 4,
    images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#facc15",
    mockupBackColor: "#facc15",
    collarZoomColor: "#facc15",
    description: "Tear-resistant, non-toxic dyed cotton garments for toddlers and playgroups with easy-button fasteners.",
    stock: 80
  },
  // 10. PT Uniforms
  {
    id: "clk-pt-10",
    name: "School & College Physical Training (PT) Uniform Kits",
    category: "uniforms",
    subHeaderTitle: "PT UNIFORM",
    fabricPill: "DRY-FIT ACTIVEWEAR",
    packBadge: "House Colors",
    price: 799,
    originalPrice: 1399,
    rating: 4.8,
    reviewsCount: 91,
    badge: "House Colors",
    gsm: "170 GSM Honeycomb Dry-Fit",
    fit: "Athletic Motion Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Red House", hex: "#dc2626" },
      { name: "Blue House", hex: "#2563eb" },
      { name: "Green House", hex: "#16a34a" },
      { name: "Yellow House", hex: "#ca8a04" }
    ],
    moreColorsCount: 4,
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#dc2626",
    mockupBackColor: "#dc2626",
    collarZoomColor: "#dc2626",
    description: "Includes house color sports t-shirt and breathable track pant with school house name printing.",
    stock: 100
  },
  // 11. Corporate Uniforms
  {
    id: "clk-cu-11",
    name: "Executive Corporate Uniforms & Formal Workwear",
    category: "uniforms",
    subHeaderTitle: "CORPORATE UNIFORM",
    fabricPill: "WRINKLE-RESISTANT",
    packBadge: "Corporate Tier",
    price: 1199,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 130,
    badge: "Office Staff",
    gsm: "Premium Poly-Viscose & Cotton",
    fit: "Tailored Professional",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      { name: "Executive Navy", hex: "#1e293b" },
      { name: "Charcoal Slate", hex: "#334155" },
      { name: "Crisp White", hex: "#f8fafc" }
    ],
    moreColorsCount: 6,
    images: ["https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#1e293b",
    mockupBackColor: "#1e293b",
    collarZoomColor: "#1e293b",
    description: "Standard uniform dress code for corporate sales teams, hospitality staff, and retail floor employees.",
    stock: 90
  },
  // 12. College Fest T-Shirts
  {
    id: "clk-cf-12",
    name: "Custom College Fest & Annual Gathering T-Shirts",
    category: "bulk-quotes",
    subHeaderTitle: "COLLEGE FEST T-SHIRT",
    fabricPill: "FEST EDITION 190 GSM",
    packBadge: "Fest Committee",
    price: 599,
    originalPrice: 999,
    rating: 5.0,
    reviewsCount: 245,
    badge: "Bulk Rates",
    gsm: "190 GSM Combed Cotton",
    fit: "Modern Regular / Oversized",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Festival Black", hex: "#18181b" },
      { name: "Neon Violet", hex: "#7c3aed" },
      { name: "Royal Blue", hex: "#1d4ed8" }
    ],
    moreColorsCount: 12,
    images: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#7c3aed",
    mockupBackColor: "#7c3aed",
    collarZoomColor: "#7c3aed",
    description: "Produced for university cultural, sports, and technical fests across Mumbai and India. Back print committee roles included.",
    stock: 150
  },
  // 13. Event T-Shirts
  {
    id: "clk-ev-13",
    name: "Promotional & Marathon Event T-Shirts (Fast Turnaround)",
    category: "bulk-quotes",
    subHeaderTitle: "EVENT T-SHIRT",
    fabricPill: "EVENT GRADE POLY-COTTON",
    packBadge: "Min 15 Pcs",
    price: 499,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 180,
    badge: "Fast Dispatch",
    gsm: "160-180 GSM",
    fit: "Universal Unisex Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Bright Orange", hex: "#ea580c" },
      { name: "Sunny Yellow", hex: "#eab308" },
      { name: "Pure White", hex: "#ffffff" }
    ],
    moreColorsCount: 15,
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#ea580c",
    mockupBackColor: "#ea580c",
    collarZoomColor: "#ea580c",
    description: "Cost-effective promotional apparel for roadshows, brand activations, conferences, and charity marathons.",
    stock: 200
  },
  // 14. Sports Jerseys
  {
    id: "clk-sj-14",
    name: "Custom Football, Cricket & Basketball Sports Jerseys",
    category: "jerseys",
    subHeaderTitle: "SPORTS JERSEY",
    fabricPill: "DRI-FIT JACQUARD",
    packBadge: "Name & Number",
    price: 899,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 135,
    badge: "Pro Kit",
    gsm: "175 GSM Anti-Bacterial Poly",
    fit: "Raglan Sleeve Sport Fit",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Midnight Navy & Gold", hex: "#0f172a" },
      { name: "Flame Red & White", hex: "#b91c1c" },
      { name: "Cyber Teal", hex: "#0d9488" }
    ],
    moreColorsCount: 8,
    images: ["https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#0f172a",
    mockupBackColor: "#0f172a",
    collarZoomColor: "#0f172a",
    description: "Breathable jacquard mesh jerseys with player name and number sublimation printing on back.",
    stock: 75
  },
  // 15. Hoodies
  {
    id: "clk-hd-15",
    name: "Custom Heavyweight French Terry Hoodies (380 GSM)",
    category: "outerwear",
    subHeaderTitle: "HOODIES",
    fabricPill: "380 GSM FRENCH TERRY",
    packBadge: "Pack Of 2",
    price: 1899,
    originalPrice: 2899,
    rating: 4.9,
    reviewsCount: 160,
    badge: "Winter Drop",
    gsm: "380 GSM Loopback Cotton",
    fit: "Oversized Streetwear Drapes",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Pitch Black", hex: "#111827" },
      { name: "Beige Cream", hex: "#e5e7eb" },
      { name: "Espresso Brown", hex: "#451a03" }
    ],
    moreColorsCount: 6,
    images: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#111827",
    mockupBackColor: "#111827",
    collarZoomColor: "#111827",
    description: "Thick double-layered hood without strings for clean aesthetic. Deep kangaroo pocket and ribbed cuffs.",
    stock: 55
  },
  // 16. Sweatshirts
  {
    id: "clk-sw-16",
    name: "Custom Crewneck Fleece Sweatshirts (320 GSM)",
    category: "outerwear",
    subHeaderTitle: "SWEATSHIRT",
    fabricPill: "320 GSM BRUSHED FLEECE",
    packBadge: "Pack Of 2",
    price: 1499,
    originalPrice: 2299,
    rating: 4.8,
    reviewsCount: 88,
    badge: "Cozy Fleece",
    gsm: "320 GSM Brushed Cotton",
    fit: "Classic Crewneck Drop",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Mustard Gold", hex: "#eab308" },
      { name: "Charcoal Grey", hex: "#374151" },
      { name: "Deep Navy", hex: "#1e3a8a" }
    ],
    moreColorsCount: 7,
    images: ["https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#eab308",
    mockupBackColor: "#eab308",
    collarZoomColor: "#eab308",
    description: "Soft brushed interior crewneck pullover for campus departments, dance crews, and casual tech offices.",
    stock: 50
  },
  // 17. Varsity Jackets
  {
    id: "clk-vj-17",
    name: "Custom Collegiate Varsity Jackets (PU Leather Sleeves 350 GSM)",
    category: "outerwear",
    subHeaderTitle: "VARSITY JACKET",
    fabricPill: "MELTON WOOL + LEATHER",
    packBadge: "Signature",
    price: 2499,
    originalPrice: 4299,
    rating: 5.0,
    reviewsCount: 172,
    badge: "Flagship",
    gsm: "350 GSM Heavy Melton Wool",
    fit: "Custom Bomber Silhouette",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Burgundy & Cream", hex: "#701a75" },
      { name: "Black & White Leather", hex: "#18181b" },
      { name: "Forest & Bone", hex: "#14532d" }
    ],
    moreColorsCount: 5,
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#701a75",
    mockupBackColor: "#701a75",
    collarZoomColor: "#701a75",
    description: "Our signature varsity jacket with melton wool torso, vegan PU leather sleeves, and chenille patch embroidery.",
    stock: 40
  },
  // 18. Customized Caps
  {
    id: "clk-cp-18",
    name: "Custom Embroidered Streetwear Caps & Dad Hats",
    category: "merchandise",
    subHeaderTitle: "CUSTOM CAP",
    fabricPill: "100% CHINO TWILL",
    packBadge: "Min 15 Pcs",
    price: 549,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 95,
    badge: "Headwear",
    gsm: "Heavy Chino Cotton Twill",
    fit: "Adjustable Antique Brass Strap",
    sizes: ["One Size Fits All"],
    colors: [
      { name: "Washed Black", hex: "#1f2937" },
      { name: "Desert Tan", hex: "#d4b996" },
      { name: "Navy Blue", hex: "#1e3a8a" }
    ],
    moreColorsCount: 6,
    images: ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#1f2937",
    mockupBackColor: "#1f2937",
    collarZoomColor: "#1f2937",
    description: "6-panel low profile dad hat with 3D raised embroidery of your company or society emblem.",
    stock: 80
  },
  // 19. Customized Bags
  {
    id: "clk-bg-19",
    name: "Custom Heavyweight Canvas Tote & Duffle Bags",
    category: "merchandise",
    subHeaderTitle: "CUSTOM BAG",
    fabricPill: "12 OZ DUCK CANVAS",
    packBadge: "Eco Friendly",
    price: 399,
    originalPrice: 699,
    rating: 4.8,
    reviewsCount: 78,
    badge: "Utility Merch",
    gsm: "360 GSM Natural Canvas",
    fit: "15 x 16 Inch Heavy Duty",
    sizes: ["Tote (Standard)", "Gym Duffle"],
    colors: [
      { name: "Natural Ecru", hex: "#fef3c7" },
      { name: "Midnight Black", hex: "#18181b" }
    ],
    moreColorsCount: 4,
    images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#fef3c7",
    mockupBackColor: "#fef3c7",
    collarZoomColor: "#fef3c7",
    description: "Reinforced cross-stitch organic canvas tote and gym duffle bags with screen printed brand graphics.",
    stock: 90
  },
  // 20. Customized Mugs
  {
    id: "clk-mg-20",
    name: "Customized Ceramic Coffee Mugs (Gloss & Matte)",
    category: "merchandise",
    subHeaderTitle: "CUSTOM MUG",
    fabricPill: "CERAMIC 350 ML",
    packBadge: "Corporate Gifting",
    price: 249,
    originalPrice: 499,
    rating: 4.7,
    reviewsCount: 65,
    badge: "Gifting",
    gsm: "Grade-A Ceramic",
    fit: "11 Oz / 350 Ml Capacity",
    sizes: ["Standard 350 ml"],
    colors: [
      { name: "Gloss White", hex: "#ffffff" },
      { name: "Matte Black", hex: "#18181b" }
    ],
    moreColorsCount: 3,
    images: ["https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#18181b",
    mockupBackColor: "#18181b",
    collarZoomColor: "#18181b",
    description: "Microwave and dishwasher safe ceramic mugs with full wrap sublimation printing for welcome kits.",
    stock: 120
  },
  // 21. Corporate Merchandise
  {
    id: "clk-cm-21",
    name: "Corporate Welcome Kits (Diary, Pen, Mug, Tee, Bag)",
    category: "merchandise",
    subHeaderTitle: "CORPORATE MERCHANDISE",
    fabricPill: "ALL-IN-ONE KIT",
    packBadge: "HR Welcome Kit",
    price: 1899,
    originalPrice: 3299,
    rating: 5.0,
    reviewsCount: 140,
    badge: "HR Favorite",
    gsm: "Curated Box Set",
    fit: "Custom Branded Gift Box",
    sizes: ["Standard Executive Kit"],
    colors: [
      { name: "Premium Black & Gold", hex: "#09090b" },
      { name: "Navy & Silver", hex: "#1e3a8a" }
    ],
    moreColorsCount: 3,
    images: ["https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#09090b",
    mockupBackColor: "#09090b",
    collarZoomColor: "#09090b",
    description: "Comprehensive employee onboarding kit featuring branded polo tee, metal bottle, engraved pen, diary, and mug.",
    stock: 60
  },
  // 22. Custom Printing & Embroidery
  {
    id: "clk-cpe-22",
    name: "Contract Custom Printing & Embroidery Services (Workshop Direct)",
    category: "bulk-quotes",
    subHeaderTitle: "PRINT & EMBROIDERY",
    fabricPill: "DTF • PUFF • EMBROIDERY",
    packBadge: "Workshop Service",
    price: 49,
    originalPrice: 99,
    rating: 5.0,
    reviewsCount: 310,
    badge: "Wholesale",
    gsm: "Any Garment Supplied",
    fit: "Custom Specs",
    sizes: ["Chest", "Back", "Sleeves", "Collar"],
    colors: [
      { name: "Custom Pantone Inks", hex: "#ec4899" }
    ],
    moreColorsCount: 20,
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"],
    mockupFrontColor: "#ec4899",
    mockupBackColor: "#ec4899",
    collarZoomColor: "#ec4899",
    description: "Direct Mumbai workshop printing and embroidery services. We print on your supplied blanks or our manufactured garments.",
    stock: 500
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
    customerPhone: "+91 82916 74943",
    customerAddress: "Flat 402, Sea Green Apts, Bandra West, Mumbai 400050",
    date: "2026-11-21",
    items: [
      { name: "Customized Round Neck T-Shirts With Your Own Logo/Design", size: "L", color: "Dark Green", qty: 2, price: 1299 }
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
      { name: "Custom Collegiate Varsity Jackets (PU Leather Sleeves 350 GSM)", size: "M", color: "Burgundy & Cream", qty: 1, price: 2499 }
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
    phone: "+91 82916 74943",
    garmentType: "College Fest T-Shirts",
    brandingType: "Puff Print & DTF",
    quantity: 120,
    budget: "₹71,880",
    date: "2026-11-21",
    status: "New Inquiry",
    notes: "Need oversized black college fest tees with committee logo on front and sponsor logos on back."
  }
];
