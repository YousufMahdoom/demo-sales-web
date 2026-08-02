// ================= DATA DEFINITIONS =================
const VEHICLES_DATA = [
  {
    id: "wr-fz-2023",
    title: "Suzuki Wagon R FZ Hybrid",
    category: "wagonr",
    badge: "Flagship Stock",
    year: 2023,
    mileage: "14,500 km",
    transmission: "Automatic (CVT)",
    engine: "660cc Mild Hybrid ISG",
    fuel: "Petrol Hybrid (30+ km/L)",
    color: "Pearl White Z7T",
    condition: "Unregistered / Mint",
    price: "Rs. 6,850,000",
    isPriceContact: false,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "HUD (Head-Up Display)",
      "Safety Package / Collision Mitigation System",
      "Dual Airbags & ABS with EBD",
      "Push Start & Keyless Entry",
      "Alloy Wheels & Fog Lamps",
      "Automatic Climate Control AC"
    ],
    description: "The Suzuki Wagon R FZ Hybrid is Sri Lanka's ultimate modern city car, delivering incredible fuel efficiency exceeding 30 km/L. Fully inspected, auction grade 4.5/B."
  },
  {
    id: "wr-stingray-2022",
    title: "Suzuki Wagon R Stingray HYBRID T",
    category: "wagonr",
    badge: "Premium Sport",
    year: 2022,
    mileage: "18,200 km",
    transmission: "Automatic (CVT)",
    engine: "660cc Turbocharged Hybrid",
    fuel: "Petrol Hybrid",
    color: "Brave Khaki Pearl / Black Roof",
    condition: "Unregistered",
    price: "Rs. 7,250,000",
    isPriceContact: false,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "LED Headlamps & Signature Chrome Grille",
      "Paddle Shifters & Turbo Boost",
      "Leather-wrapped Multi-function Steering",
      "Reverse Camera & 7-inch Touch Display",
      "Dual Sensor Brake Support (DSBS)",
      "Factory 15-inch Sport Alloys"
    ],
    description: "Sporty edition of the iconic Wagon R lineup. Features aggressive LED styling front fascia, turbo performance with hybrid economy."
  },
  {
    id: "wr-fx-2023",
    title: "Suzuki Wagon R FX Safety Package",
    category: "wagonr",
    badge: "High Value",
    year: 2023,
    mileage: "11,000 km",
    transmission: "Automatic",
    engine: "660cc Mild Hybrid",
    fuel: "Petrol Hybrid",
    color: "Silky Silver Metallic",
    condition: "Unregistered",
    price: "Rs. 6,450,000",
    isPriceContact: false,
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Lane Departure Warning",
      "Seat Heaters (Driver & Passenger)",
      "Rear Parking Sensors",
      "Eco-Cool AC Unit",
      "Power Windows & Power Retractable Mirrors"
    ],
    description: "Extremely practical, spacious cabin and unmatched fuel economy. Perfect choice for family and daily city commute."
  },
  {
    id: "honda-fit-crosstar",
    title: "Honda Fit Crosstar e:HEV Hybrid",
    category: "other",
    badge: "Luxury Hatch",
    year: 2022,
    mileage: "22,000 km",
    transmission: "Automatic (e-CVT)",
    engine: "1500cc Dual-Motor Hybrid",
    fuel: "Petrol Hybrid",
    color: "Two-Tone Premium Sunlit White",
    condition: "Unregistered / Like New",
    price: "Contact for Price",
    isPriceContact: true,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Honda SENSING Suite",
      "Water-repellent Fabric Seats",
      "Roof Rails & Rugged Body Styling",
      "Digital Instrument Cluster",
      "Brake Hold & Electric Parking Brake"
    ],
    description: "Premium Japanese hybrid crossover edition with high ground clearance, dual-motor hybrid smoothness, and class-leading cabin versatility."
  },
  {
    id: "toyota-vitz-2019",
    title: "Toyota Vitz F Safety Edition III",
    category: "other",
    badge: "Best Seller",
    year: 2019,
    mileage: "34,000 km",
    transmission: "Automatic",
    engine: "1000cc 1KR-FE",
    fuel: "Petrol",
    color: "Jewel Rose / Pearl White",
    condition: "Registered",
    price: "Rs. 5,950,000",
    isPriceContact: false,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "Toyota Safety Sense C",
      "Auto High Beam & Lane Assist",
      "Push Start Button",
      "Reverse Camera & Multimedia",
      "Fabric Interior with Dark Accent"
    ],
    description: "Reliable Toyota hatchback engineered for low maintenance costs, strong resale value, and durable performance on Sri Lankan roads."
  },
  {
    id: "nissan-dayz-2022",
    title: "Nissan Dayz Highway Star X ProPILOT",
    category: "other",
    badge: "Modern Tech",
    year: 2022,
    mileage: "16,500 km",
    transmission: "Automatic",
    engine: "660cc Mild Hybrid",
    fuel: "Petrol Hybrid",
    color: "Monarch Orange Metallic",
    condition: "Unregistered",
    price: "Rs. 6,300,000",
    isPriceContact: false,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000"
    ],
    features: [
      "ProPILOT Autonomous Highway Assist",
      "360 Around View Camera Monitor",
      "9-inch Touch Navigation System",
      "LED Signature Lamps & Chrome Grill",
      "SOS Emergency Call System"
    ],
    description: "Loaded with high-tech autonomous driver assistance, 360-degree cameras, and premium Highway Star styling."
  }
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "New Suzuki Wagon R FZ Unloading",
    category: "Shipment",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Kurunegala Showroom Floor",
    category: "Showroom",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Customer Handover Ceremony",
    category: "Deliveries",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Japan Auction Vehicle Inspection",
    category: "Quality Inspection",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Wagon R Stingray LED Styling Detail",
    category: "Showcase",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Wholesale Carrier Fleet Loading",
    category: "Wholesale",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
  }
];

const TESTIMONIALS = [
  {
    name: "Dr. Nalin Bandara",
    location: "Kurunegala",
    rating: 5,
    comment: "Bought my Suzuki Wagon R FZ from DEMO SALES WEB. Absolute transparency in auction sheets and smooth registration process. Recommended 100%!",
    vehicle: "Suzuki Wagon R FZ 2023"
  },
  {
    name: "Chaminda Rathnayake",
    location: "Kandy",
    rating: 5,
    comment: "Best wholesale vehicle partner in the North Western province. Their pricing and quick document clearance made my fleet purchase seamless.",
    vehicle: "Wholesale Fleet Buyer"
  },
  {
    name: "Sanduni Fernando",
    location: "Colombo / Kurunegala",
    rating: 5,
    comment: "The team at DEMO SALES WEB helped me trade in my old Vitz for a brand new Wagon R Stingray. Fair valuation and friendly customer care.",
    vehicle: "Suzuki Wagon R Stingray"
  }
];

// ================= GLOBAL STATE =================
let selectedCategory = 'all';
let searchQuery = '';

// ================= DOM LOADED INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initInventoryCounts();
  renderVehicles();
  renderTestimonials();
  renderGallery();
  initForms();
  initModals();
});

// ================= NAVBAR SCROLL & MOBILE MENU =================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('menu-icon');

  let isTicking = false;

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          navbar.classList.remove('bg-transparent', 'py-5');
          navbar.classList.add('glass-panel', 'py-3', 'shadow-2xl', 'border-b', 'border-white/10');
        } else {
          navbar.classList.add('bg-transparent', 'py-5');
          navbar.classList.remove('glass-panel', 'py-3', 'shadow-2xl', 'border-b', 'border-white/10');
        }

        // Active link highlighting
        const sections = ['hero', 'inventory', 'about', 'sell-trade', 'wholesale', 'gallery', 'contact'];
        let current = 'hero';
        sections.forEach(section => {
          const el = document.getElementById(section);
          if (el) {
            const sectionTop = el.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
              current = section;
            }
          }
        });

        document.querySelectorAll('.nav-btn').forEach(btn => {
          if (btn.dataset.section === current) {
            btn.classList.add('bg-red-600', 'text-white', 'shadow-md', 'shadow-red-600/30');
            btn.classList.remove('text-gray-300', 'hover:bg-white/5');
          } else {
            btn.classList.remove('bg-red-600', 'text-white', 'shadow-md', 'shadow-red-600/30');
            btn.classList.add('text-gray-300', 'hover:bg-white/5');
          }
        });

        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileDrawer.classList.contains('hidden');
    if (isOpen) {
      mobileDrawer.classList.add('hidden');
      menuIcon.className = 'fa-solid fa-bars text-xl';
    } else {
      mobileDrawer.classList.remove('hidden');
      menuIcon.className = 'fa-solid fa-xmark text-xl';
    }
  });

  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      menuIcon.className = 'fa-solid fa-bars text-xl';
    });
  });
}

// ================= INVENTORY RENDER & FILTERS =================
function initInventoryCounts() {
  document.getElementById('count-all').textContent = VEHICLES_DATA.length;
  document.getElementById('count-wagonr').textContent = VEHICLES_DATA.filter(v => v.category === 'wagonr').length;
  document.getElementById('count-other').textContent = VEHICLES_DATA.filter(v => v.category === 'other').length;

  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => {
        b.classList.remove('bg-red-600', 'text-white', 'shadow-lg', 'shadow-red-600/30');
        b.classList.add('text-gray-400', 'hover:text-white', 'hover:bg-white/5');
      });
      btn.classList.add('bg-red-600', 'text-white', 'shadow-lg', 'shadow-red-600/30');
      btn.classList.remove('text-gray-400', 'hover:text-white', 'hover:bg-white/5');
      
      selectedCategory = btn.dataset.cat;
      renderVehicles();
    });
  });

  const searchInput = document.getElementById('vehicle-search');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderVehicles();
  });

  document.getElementById('reset-filter-btn').addEventListener('click', () => {
    selectedCategory = 'all';
    searchQuery = '';
    searchInput.value = '';
    catBtns[0].click();
  });
}

function renderVehicles() {
  const container = document.getElementById('vehicles-grid');
  const noResults = document.getElementById('no-results');
  container.innerHTML = '';

  const filtered = VEHICLES_DATA.filter(v => {
    const matchesCat = selectedCategory === 'all' || v.category === selectedCategory;
    const matchesSearch = v.title.toLowerCase().includes(searchQuery) ||
                          v.color.toLowerCase().includes(searchQuery) ||
                          v.engine.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    return;
  } else {
    noResults.classList.add('hidden');
  }

  filtered.forEach(vehicle => {
    const waMsg = encodeURIComponent(`Hello DEMO SALES WEB! I am interested in the ${vehicle.title} (${vehicle.year}). Please send me full pricing details and photos.`);
    
    const card = document.createElement('div');
    card.className = "glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 transform hover:-translate-y-1.5";
    card.innerHTML = `
      <div>
        <div class="relative aspect-[16/10] overflow-hidden bg-black/50">
          <img src="${vehicle.image}" alt="${vehicle.title}" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500" />
          ${vehicle.badge ? `<div class="absolute top-2 left-2 glass-panel px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-red-400 border border-red-500/30 uppercase tracking-wider">${vehicle.badge}</div>` : ''}
          <div class="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-1.5 py-0.5 rounded-md text-[9px] sm:text-xs font-semibold text-gray-200 border border-white/10">${vehicle.condition}</div>
        </div>

        <div class="p-3.5 sm:p-5 space-y-3 sm:space-y-4">
          <div>
            <h3 class="text-sm sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">${vehicle.title}</h3>
            <p class="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 flex items-center gap-1.5 sm:gap-2">
              <span class="font-semibold text-gray-300">${vehicle.color}</span>
              <span>•</span>
              <span>${vehicle.engine}</span>
            </p>
          </div>

          <div class="grid grid-cols-3 gap-1 sm:gap-2 py-1.5 sm:py-2 border-y border-white/5">
            <div class="text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-white/5">
              <i class="fa-regular fa-calendar text-red-400 text-xs block mb-1"></i>
              <span class="text-[9px] sm:text-[11px] text-gray-400 block">Year</span>
              <span class="text-[10px] sm:text-xs font-bold text-white">${vehicle.year}</span>
            </div>
            <div class="text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-white/5">
              <i class="fa-solid fa-gauge-high text-red-400 text-xs block mb-1"></i>
              <span class="text-[9px] sm:text-[11px] text-gray-400 block">Mileage</span>
              <span class="text-[10px] sm:text-xs font-bold text-white truncate block">${vehicle.mileage}</span>
            </div>
            <div class="text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-white/5">
              <i class="fa-solid fa-gas-pump text-red-400 text-xs block mb-1"></i>
              <span class="text-[9px] sm:text-[11px] text-gray-400 block">Fuel</span>
              <span class="text-[10px] sm:text-xs font-bold text-white truncate block px-1">${vehicle.fuel.split(' ')[0]}</span>
            </div>
          </div>

          <ul class="hidden sm:block space-y-1.5 pt-1">
            ${vehicle.features.slice(0, 3).map(f => `
              <li class="text-xs text-gray-300 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span class="truncate">${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="p-3.5 sm:p-5 pt-0 space-y-2.5 sm:space-y-3">
        <div class="flex items-baseline justify-between pt-1.5 sm:pt-2 border-t border-white/5">
          <div>
            <span class="text-[9px] sm:text-[11px] text-gray-400 uppercase tracking-wider block">Price</span>
            <span class="text-sm sm:text-lg font-extrabold text-white">
              ${vehicle.isPriceContact ? '<span class="text-red-400 text-xs sm:text-base">Contact for Best Price</span>' : vehicle.price}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-1.5 sm:gap-2">
          <button onclick="openVehicleModal('${vehicle.id}')" class="py-2 px-1.5 sm:py-2.5 sm:px-3 rounded-lg sm:rounded-xl glass-panel text-white hover:bg-white/10 text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 border border-white/10">
            <span>Full Specs</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </button>
          <a href="https://wa.me/94755331445?text=${waMsg}" target="_blank" rel="noreferrer" class="py-2 px-1.5 sm:py-2.5 sm:px-3 rounded-lg sm:rounded-xl bg-green-600 hover:bg-green-500 text-white text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-lg shadow-green-600/20">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Inquire</span>
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ================= TESTIMONIALS RENDER =================
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  container.innerHTML = '';
  TESTIMONIALS.forEach(t => {
    const card = document.createElement('div');
    card.className = "glass-card p-6 rounded-2xl flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="flex text-amber-400 gap-1 mb-3">
          ${'<i class="fa-solid fa-star text-xs"></i>'.repeat(t.rating)}
        </div>
        <p class="text-gray-300 text-sm italic">"${t.comment}"</p>
      </div>
      <div class="mt-6 pt-4 border-t border-white/5">
        <span class="text-white font-bold text-sm block">${t.name}</span>
        <span class="text-gray-400 text-xs">${t.location} • <strong class="text-red-400">${t.vehicle}</strong></span>
      </div>
    `;
    container.appendChild(card);
  });
}

// ================= GALLERY RENDER =================
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  container.innerHTML = '';
  GALLERY_ITEMS.forEach(item => {
    const div = document.createElement('div');
    div.className = "group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer shadow-xl transition-all duration-300 transform hover:-translate-y-1";
    div.onclick = () => openGalleryLightbox(item);
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-6">
        <span class="self-end p-1.5 sm:p-2 rounded-full glass-panel text-white">
          <i class="fa-solid fa-expand text-xs"></i>
        </span>
        <div>
          <span class="text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider block">${item.category}</span>
          <h4 class="text-sm sm:text-lg font-bold text-white mt-0.5">${item.title}</h4>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

// ================= FORMS HANDLING =================
function initForms() {
  // Trade Form
  document.getElementById('trade-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('trade-name').value;
    const phone = document.getElementById('trade-phone').value;
    const model = document.getElementById('trade-model').value;
    const year = document.getElementById('trade-year').value;
    const mileage = document.getElementById('trade-mileage').value;
    const price = document.getElementById('trade-price').value;
    const notes = document.getElementById('trade-notes').value;

    const waMsg = encodeURIComponent(
      `Hello DEMO SALES WEB! I want to Sell / Trade-in my vehicle:\n\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Vehicle: ${model} (${year})\n` +
      `• Mileage: ${mileage} km\n` +
      `• Expected Valuation: ${price}\n` +
      `• Notes: ${notes}`
    );
    window.open(`https://wa.me/94755331445?text=${waMsg}`, '_blank');
  });

  // Contact Form
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const msg = document.getElementById('contact-msg').value;

    const waMsg = encodeURIComponent(
      `Hello DEMO SALES WEB!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${msg}`
    );
    window.open(`https://wa.me/94755331445?text=${waMsg}`, '_blank');
  });
}

// ================= MODAL CONTROLS =================
function initModals() {
  document.getElementById('close-modal-btn').addEventListener('click', closeModal);
  document.getElementById('close-gallery-btn').addEventListener('click', closeGallery);
}

function openVehicleModal(id) {
  const vehicle = VEHICLES_DATA.find(v => v.id === id);
  if (!vehicle) return;

  document.getElementById('modal-main-img').src = vehicle.image;
  document.getElementById('modal-badge').textContent = vehicle.badge || vehicle.condition;
  document.getElementById('modal-title').textContent = vehicle.title;
  document.getElementById('modal-description').textContent = vehicle.description;
  document.getElementById('modal-price').textContent = vehicle.isPriceContact ? "Contact for Direct Quote" : vehicle.price;
  
  document.getElementById('modal-year').textContent = vehicle.year;
  document.getElementById('modal-mileage').textContent = vehicle.mileage;
  document.getElementById('modal-trans').textContent = vehicle.transmission;
  document.getElementById('modal-engine').textContent = vehicle.engine;
  document.getElementById('modal-color').textContent = vehicle.color;
  document.getElementById('modal-fuel').textContent = vehicle.fuel;

  // Render Thumbnails
  const thumbsContainer = document.getElementById('modal-thumbs');
  thumbsContainer.innerHTML = '';
  if (vehicle.gallery && vehicle.gallery.length > 1) {
    vehicle.gallery.forEach((imgUrl) => {
      const btn = document.createElement('button');
      btn.className = "relative w-20 h-14 rounded-xl overflow-hidden border-2 border-transparent opacity-60 hover:opacity-100 transition-all flex-shrink-0";
      btn.onclick = () => {
        document.querySelectorAll('#modal-thumbs button').forEach(b => b.className = "relative w-20 h-14 rounded-xl overflow-hidden border-2 border-transparent opacity-60 hover:opacity-100 transition-all flex-shrink-0");
        btn.className = "relative w-20 h-14 rounded-xl overflow-hidden border-2 border-red-500 scale-105 transition-all flex-shrink-0";
        document.getElementById('modal-main-img').src = imgUrl;
      };
      btn.innerHTML = `<img src="${imgUrl}" alt="Thumbnail" class="w-full h-full object-cover" />`;
      thumbsContainer.appendChild(btn);
    });
  }

  // Render Features
  const featuresContainer = document.getElementById('modal-features');
  featuresContainer.innerHTML = vehicle.features.map(f => `
    <li class="flex items-center gap-2">
      <i class="fa-solid fa-check text-green-400"></i>
      <span>${f}</span>
    </li>
  `).join('');

  const waMsg = encodeURIComponent(
    `Hello DEMO SALES WEB! I am reviewing the ${vehicle.title} (${vehicle.year}, ${vehicle.color}) on your website. I would like to schedule an inspection / request pricing details.`
  );
  document.getElementById('modal-wa-btn').href = `https://wa.me/94755331445?text=${waMsg}`;

  document.getElementById('vehicle-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('vehicle-modal').classList.add('hidden');
}

function openGalleryLightbox(item) {
  document.getElementById('lightbox-img').src = item.image;
  document.getElementById('lightbox-category').textContent = item.category;
  document.getElementById('lightbox-title').textContent = item.title;
  document.getElementById('gallery-lightbox').classList.remove('hidden');
}

function closeGallery() {
  document.getElementById('gallery-lightbox').classList.add('hidden');
}
