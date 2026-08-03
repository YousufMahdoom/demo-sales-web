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
    image: "public/images/wagonr-fz.jpg",
    gallery: [
      "public/images/wagonr-fz.jpg",
      "public/images/cabin-ergonomics.jpg"
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
    image: "public/images/wagonr-stingray.jpg",
    gallery: [
      "public/images/wagonr-stingray.jpg",
      "public/images/cabin-ergonomics.jpg"
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
    image: "public/images/wagonr-fx.jpg",
    gallery: [
      "public/images/wagonr-fx.jpg"
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
    id: "bmw-m4-coupe-2022",
    title: "BMW M4 Competition Coupe",
    category: "luxury",
    badge: "Supercar / Exotic",
    year: 2022,
    mileage: "22,000 km",
    transmission: "Automatic (8-Speed M Steptronic)",
    engine: "3000cc Twin-Turbo Inline-6",
    fuel: "Petrol (503 HP)",
    color: "Isle of Man Green Metallic",
    condition: "Unregistered / Like New",
    price: "Contact for Best Price",
    isPriceContact: true,
    image: "public/images/honda-fit.jpg",
    gallery: [
      "public/images/honda-fit.jpg"
    ],
    features: [
      "M TwinPower Turbo 503 HP Engine",
      "M Carbon Bucket Sport Seats",
      "Adaptive M Suspension & M Differential",
      "Harman Kardon Surround Sound System",
      "Head-Up Display & M Drive Professional"
    ],
    description: "High-performance BMW M4 Competition Coupe in Isle of Man Green. Engineered with Twin-Turbo 503 HP power, carbon fiber aerodynamics, and luxury sports interior."
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
    image: "public/images/toyota-vitz.jpg",
    gallery: [
      "public/images/toyota-vitz.jpg"
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
    image: "public/images/nissan-dayz.jpg",
    gallery: [
      "public/images/nissan-dayz.jpg"
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
    image: "public/images/wagonr-fz.jpg"
  },
  {
    id: 2,
    title: "Kurunegala Showroom Floor",
    category: "Showroom",
    image: "public/images/showroom.jpg"
  },
  {
    id: 3,
    title: "Customer Handover Ceremony",
    category: "Deliveries",
    image: "public/images/deliveries.jpg"
  },
  {
    id: 4,
    title: "Japan Auction Vehicle Inspection",
    category: "Quality Inspection",
    image: "public/images/quality-inspection.jpg"
  },
  {
    id: 5,
    title: "Wagon R Stingray LED Styling Detail",
    category: "Showcase",
    image: "public/images/wagonr-stingray.jpg"
  },
  {
    id: 6,
    title: "Wholesale Carrier Fleet Loading",
    category: "Wholesale",
    image: "public/images/wholesale-fleet.jpg"
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

// ================= HERO SLIDER DATA =================
const HERO_SLIDES = [
  {
    badge: "FLAGSHIP JAPANESE IMPORT",
    brand: "SUZUKI",
    model: "WAGON R STINGRAY",
    year: "2023",
    subtitle: "2023 Mild Hybrid ISG • Grade 4.5/B",
    description: "Sri Lanka’s premier mild-hybrid hatchback with 30+ km/L efficiency, 100% verified Japanese auction sheet, and high-resale value.",
    tagline: '"A family of extreme performance cars"',
    price: "Rs. 6,850,000",
    grade: "4.5 / B Verified",
    mileage: "14,500 km",
    fuel: "30+ km/L Hybrid",
    image: "public/images/wagonr-stingray.jpg",
    modalId: "wr-stingray-2022"
  },
  {
    badge: "PREMIUM SPORT EDITION",
    brand: "SUZUKI",
    model: "WAGON R FX",
    year: "2022",
    subtitle: "2022 Mild Hybrid • Safety Package",
    description: "Extremely practical, spacious cabin and unmatched fuel economy. Perfect choice for family and daily city commute.",
    tagline: '"Unmatched turbo performance & style"',
    price: "Rs. 6,450,000",
    grade: "4.5 / A Verified",
    mileage: "11,000 km",
    fuel: "Eco Hybrid",
    image: "public/images/wagonr-fx.jpg",
    modalId: "wr-fx-2023"
  },
  {
    badge: "DUAL-MOTOR HYBRID CROSSOVER",
    brand: "HONDA",
    model: "FIT CROSSTAR",
    year: "2022",
    subtitle: "1500cc e:HEV Dual-Motor • Sunlit White",
    description: "Premium Japanese hybrid crossover edition with high ground clearance, water-repellent fabric, and Honda SENSING.",
    tagline: '"Luxury crossover versatility & efficiency"',
    price: "Contact for Direct Quote",
    grade: "5.0 / Mint",
    mileage: "22,000 km",
    fuel: "e:HEV Dual-Motor",
    image: "public/images/honda-fit.jpg",
    modalId: "honda-fit-crosstar"
  }
];

let currentHeroSlide = 0;
let heroSlideTimer = null;

// ================= GLOBAL STATE =================
let selectedCategory = 'all';
let searchQuery = '';
let filterBrand = 'all';
let filterModel = 'all';
let filterYear = 'all';
let filterFuel = 'all';
let filterTrans = 'all';
let filterPrice = 'all';

// ================= DOM LOADED INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initForms();
  initModals();
  initLazyMap();
  initInventoryCounts();
  initParallax();
  initHeroSlider();
  initCountdownTimer();
  initFinanceCalculator();
  initStatsCounters();
  initFaqAccordion();

  // Defer heavy DOM rendering so initial paint finishes instantly on Safari & iPhone
  const deferRender = (fn) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(fn, { timeout: 2000 });
    } else {
      requestAnimationFrame(() => {
        setTimeout(fn, 60);
      });
    }
  };

  deferRender(() => {
    renderVehicles();
    renderTestimonials();
    renderGallery();
  });
});

// ================= COUNTDOWN TIMER =================
function initCountdownTimer() {
  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minsEl = document.getElementById('countdown-mins');
  const secsEl = document.getElementById('countdown-secs');
  if (!daysEl) return;

  let totalSeconds = (5 * 86400) + (14 * 3600) + (38 * 60) + 42;

  setInterval(() => {
    if (totalSeconds > 0) totalSeconds--;
    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

// ================= STATS COUNTER ANIMATION =================
function initStatsCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.target, 10);
        let start = 0;
        const duration = 2000;
        const stepTime = 30;
        const increment = target / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            counter.textContent = target + (target === 100 || target === 99 ? '' : '+');
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(start) + (target === 100 || target === 99 ? '' : '+');
          }
        }, stepTime);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ================= FINANCE CALCULATOR =================
function initFinanceCalculator() {
  const priceSlider = document.getElementById('calc-price-slider');
  const downSlider = document.getElementById('calc-down-slider');
  const tenureSelect = document.getElementById('calc-tenure');
  const rateInput = document.getElementById('calc-rate');

  const priceVal = document.getElementById('calc-price-val');
  const downVal = document.getElementById('calc-down-val');
  const monthlyResult = document.getElementById('calc-monthly-result');

  if (!priceSlider || !downSlider || !monthlyResult) return;

  function calculateLoan() {
    const price = parseFloat(priceSlider.value);
    const downPercent = parseFloat(downSlider.value);
    const downAmount = price * (downPercent / 100);
    const principal = price - downAmount;
    
    const tenureYears = parseInt(tenureSelect.value, 10);
    const months = tenureYears * 12;
    const annualRate = parseFloat(rateInput.value) || 14.5;
    const monthlyRate = (annualRate / 100) / 12;

    priceVal.textContent = `Rs. ${price.toLocaleString()}`;
    downVal.textContent = `Rs. ${Math.round(downAmount).toLocaleString()} (${downPercent}%)`;

    if (monthlyRate === 0) {
      const emi = principal / months;
      monthlyResult.textContent = `Rs. ${Math.round(emi).toLocaleString()} / mo`;
    } else {
      const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      monthlyResult.textContent = `Rs. ${Math.round(emi).toLocaleString()} / mo`;
    }
  }

  priceSlider.addEventListener('input', calculateLoan);
  downSlider.addEventListener('input', calculateLoan);
  tenureSelect.addEventListener('change', calculateLoan);
  rateInput.addEventListener('input', calculateLoan);

  calculateLoan();
}

// ================= FAQ ACCORDION =================
function initFaqAccordion() {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');
      const isOpen = !content.classList.contains('hidden');

      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-toggle i').forEach(i => i.classList.remove('rotate-180'));

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

// ================= INVENTORY RENDER & MULTI-FILTERS =================
function initInventoryCounts() {
  const toggleBtn = document.getElementById('toggle-filter-btn');
  const drawerPanel = document.getElementById('filter-drawer-panel');

  if (toggleBtn && drawerPanel) {
    toggleBtn.addEventListener('click', () => {
      drawerPanel.classList.toggle('hidden');
    });
  }

  // Category Cards Listener
  const catCardBtns = document.querySelectorAll('.cat-card-btn');
  catCardBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catCardBtns.forEach(b => b.classList.remove('border-red-500', 'bg-red-600/10'));
      btn.classList.add('border-red-500', 'bg-red-600/10');
      
      selectedCategory = btn.dataset.catSelect || 'all';
      renderVehicles();
    });
  });

  // Dropdown Select Filters
  const brandSelect = document.getElementById('filter-brand');
  const modelSelect = document.getElementById('filter-model');
  const yearSelect = document.getElementById('filter-year');
  const fuelSelect = document.getElementById('filter-fuel');
  const transSelect = document.getElementById('filter-trans');
  const priceSelect = document.getElementById('filter-price');
  const searchInput = document.getElementById('vehicle-search');

  if (brandSelect) brandSelect.addEventListener('change', (e) => { filterBrand = e.target.value; renderVehicles(); });
  if (modelSelect) modelSelect.addEventListener('change', (e) => { filterModel = e.target.value; renderVehicles(); });
  if (yearSelect) yearSelect.addEventListener('change', (e) => { filterYear = e.target.value; renderVehicles(); });
  if (fuelSelect) fuelSelect.addEventListener('change', (e) => { filterFuel = e.target.value; renderVehicles(); });
  if (transSelect) transSelect.addEventListener('change', (e) => { filterTrans = e.target.value; renderVehicles(); });
  if (priceSelect) priceSelect.addEventListener('change', (e) => { filterPrice = e.target.value; renderVehicles(); });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderVehicles();
    });
  }

  const clearAllBtn = document.getElementById('clear-all-filters-btn');
  const resetFallbackBtn = document.getElementById('reset-filter-btn');

  const resetAllFilters = () => {
    selectedCategory = 'all';
    searchQuery = '';
    filterBrand = 'all';
    filterModel = 'all';
    filterYear = 'all';
    filterFuel = 'all';
    filterTrans = 'all';
    filterPrice = 'all';

    if (brandSelect) brandSelect.value = 'all';
    if (modelSelect) modelSelect.value = 'all';
    if (yearSelect) yearSelect.value = 'all';
    if (fuelSelect) fuelSelect.value = 'all';
    if (transSelect) transSelect.value = 'all';
    if (priceSelect) priceSelect.value = 'all';
    if (searchInput) searchInput.value = '';

    catCardBtns.forEach(b => b.classList.remove('border-red-500', 'bg-red-600/10'));
    if (catCardBtns[0]) catCardBtns[0].classList.add('border-red-500', 'bg-red-600/10');

    renderVehicles();
  };

  if (clearAllBtn) clearAllBtn.addEventListener('click', resetAllFilters);
  if (resetFallbackBtn) resetFallbackBtn.addEventListener('click', resetAllFilters);
}

function updateActiveChips() {
  const chipsContainer = document.getElementById('active-chips');
  const labelEl = document.getElementById('active-tag-label');
  const clearBtn = document.getElementById('clear-all-filters-btn');
  const badgeEl = document.getElementById('active-filter-badge');
  if (!chipsContainer) return;

  chipsContainer.innerHTML = '';
  let activeCount = 0;

  const addChip = (label, resetFn) => {
    activeCount++;
    const chip = document.createElement('span');
    chip.className = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-semibold";
    chip.innerHTML = `<span>${label}</span><button class="hover:text-white font-bold ml-1">&times;</button>`;
    chip.querySelector('button').onclick = resetFn;
    chipsContainer.appendChild(chip);
  };

  if (selectedCategory !== 'all') addChip(`Category: ${selectedCategory}`, () => { selectedCategory = 'all'; renderVehicles(); });
  if (filterBrand !== 'all') addChip(`Brand: ${filterBrand}`, () => { filterBrand = 'all'; const el = document.getElementById('filter-brand'); if(el) el.value='all'; renderVehicles(); });
  if (filterModel !== 'all') addChip(`Model: ${filterModel}`, () => { filterModel = 'all'; const el = document.getElementById('filter-model'); if(el) el.value='all'; renderVehicles(); });
  if (filterYear !== 'all') addChip(`Min Year: ${filterYear}`, () => { filterYear = 'all'; const el = document.getElementById('filter-year'); if(el) el.value='all'; renderVehicles(); });
  if (filterFuel !== 'all') addChip(`Fuel: ${filterFuel}`, () => { filterFuel = 'all'; const el = document.getElementById('filter-fuel'); if(el) el.value='all'; renderVehicles(); });
  if (filterTrans !== 'all') addChip(`Trans: ${filterTrans}`, () => { filterTrans = 'all'; const el = document.getElementById('filter-trans'); if(el) el.value='all'; renderVehicles(); });
  if (filterPrice !== 'all') addChip(`Price: Under ${(parseInt(filterPrice)/1000000).toFixed(1)}M`, () => { filterPrice = 'all'; const el = document.getElementById('filter-price'); if(el) el.value='all'; renderVehicles(); });
  if (searchQuery !== '') addChip(`Search: "${searchQuery}"`, () => { searchQuery = ''; const el = document.getElementById('vehicle-search'); if(el) el.value=''; renderVehicles(); });

  if (activeCount > 0) {
    if (labelEl) labelEl.classList.remove('hidden');
    if (clearBtn) clearBtn.classList.remove('hidden');
    if (badgeEl) badgeEl.classList.remove('hidden');
  } else {
    if (labelEl) labelEl.classList.add('hidden');
    if (clearBtn) clearBtn.classList.add('hidden');
    if (badgeEl) badgeEl.classList.add('hidden');
  }
}

// ================= PARALLAX EFFECT =================
function initParallax() {
  const heroSection = document.getElementById('hero');
  const parallaxElements = document.querySelectorAll('.parallax-layer');
  const tiltCard = document.querySelector('.hero-tilt-card');
  if (!heroSection) return;

  const isMobileOrReduced = window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let lastScrollY = window.scrollY;
  let isTicking = false;

  // Track mouse movement globally when on desktop
  if (!isMobileOrReduced) {
    window.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        requestUpdate();
      }
    });
  }

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    requestUpdate();
  }, { passive: true });

  function requestUpdate() {
    if (!isTicking) {
      requestAnimationFrame(updateParallax);
      isTicking = true;
    }
  }

  function updateParallax() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    const scrollPos = lastScrollY;

    // Smooth scroll transform across parallax layers
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || '0.05');
      const mouseSpeed = parseFloat(el.dataset.mouseSpeed || '20');

      const transX = currentX * mouseSpeed;
      const transY = (scrollPos * speed) + (currentY * mouseSpeed);

      el.style.transform = `translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0)`;
    });

    // Award-winning smooth scroll-zoom & scale exit effect
    if (tiltCard) {
      const rotateX = (-currentY * 12).toFixed(2);
      const rotateY = (currentX * 14).toFixed(2);
      // Smooth continuous scale down as user scrolls down page
      const scrollScale = Math.max(0.88, 1 - (scrollPos / 1400));
      const scrollOpacity = Math.max(0, 1 - (scrollPos / 550));
      
      tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scrollScale.toFixed(3)}, ${scrollScale.toFixed(3)}, ${scrollScale.toFixed(3)})`;
      tiltCard.style.opacity = scrollOpacity.toFixed(2);
    }

    if (Math.abs(mouseX - currentX) > 0.0005 || Math.abs(mouseY - currentY) > 0.0005 || lastScrollY !== window.scrollY) {
      requestAnimationFrame(updateParallax);
    } else {
      isTicking = false;
    }
  }

  requestUpdate();
}

// ================= HERO SLIDER CONTROLLER =================
function initHeroSlider() {
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  if (prevBtn) prevBtn.addEventListener('click', () => changeHeroSlide(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeHeroSlide(1));

  startHeroTimer();
}

function startHeroTimer() {
  stopHeroTimer();
  heroSlideTimer = setInterval(() => {
    changeHeroSlide(1);
  }, 7000);
}

function stopHeroTimer() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
}

function changeHeroSlide(direction) {
  currentHeroSlide = (currentHeroSlide + direction + HERO_SLIDES.length) % HERO_SLIDES.length;
  updateHeroSlide();
  startHeroTimer();
}

function updateHeroSlide() {
  const slide = HERO_SLIDES[currentHeroSlide];
  if (!slide) return;

  const badgeEl = document.getElementById('hero-badge');
  const brandEl = document.getElementById('hero-brand');
  const modelEl = document.getElementById('hero-model');
  const subtitleEl = document.getElementById('hero-subtitle');
  const descEl = document.getElementById('hero-desc');
  const taglineEl = document.getElementById('hero-tagline');
  const priceEl = document.getElementById('hero-price');
  const gradeEl = document.getElementById('hero-grade');
  const mileageEl = document.getElementById('hero-mileage');
  const fuelEl = document.getElementById('hero-fuel');
  const imageEl = document.getElementById('hero-image');
  const indexCurrentEl = document.getElementById('hero-index-current');
  const progressFillEl = document.getElementById('hero-progress-fill');
  const reserveBtnEl = document.getElementById('hero-reserve-btn');

  if (badgeEl) badgeEl.textContent = slide.badge;
  if (brandEl) brandEl.textContent = slide.brand;
  if (modelEl) modelEl.textContent = slide.model;
  if (subtitleEl) subtitleEl.textContent = slide.subtitle;
  if (descEl) descEl.textContent = slide.description;
  if (taglineEl) taglineEl.textContent = slide.tagline;
  if (priceEl) priceEl.textContent = slide.price;
  if (gradeEl) gradeEl.textContent = slide.grade;
  if (mileageEl) mileageEl.textContent = slide.mileage;
  if (fuelEl) fuelEl.textContent = slide.fuel;
  if (indexCurrentEl) indexCurrentEl.textContent = `0${currentHeroSlide + 1}`;

  if (progressFillEl) {
    progressFillEl.style.width = '0%';
    setTimeout(() => {
      progressFillEl.style.width = '100%';
    }, 50);
  }

  if (imageEl) {
    imageEl.style.opacity = '0';
    imageEl.style.transform = 'scale(0.95)';
    setTimeout(() => {
      imageEl.src = slide.image;
      imageEl.alt = `${slide.brand} ${slide.model}`;
      imageEl.style.opacity = '1';
      imageEl.style.transform = 'scale(1)';
    }, 200);
  }

  if (reserveBtnEl) {
    const waMsg = encodeURIComponent(`Hello DEMO SALES WEB! I want to reserve or inspect the ${slide.brand} ${slide.model} (${slide.year}).`);
    reserveBtnEl.href = `https://wa.me/94755331445?text=${waMsg}`;
  }
}

function initLazyMap() {
  const mapContainer = document.getElementById('map-container');
  const loadBtn = document.getElementById('load-map-btn');
  if (!mapContainer || !loadBtn) return;

  const loadMap = () => {
    mapContainer.innerHTML = `<iframe title="DEMO SALES WEB Location Map Kurunegala" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63301.76189912781!2d80.328325!3d7.486307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a1e74f17789%3A0xb23ed01a88b50f7e!2sKurunegala%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" width="100%" height="100%" style="border:0; filter: grayscale(0.6) invert(0.9) contrast(1.2);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  };

  loadBtn.addEventListener('click', loadMap);
}

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
        const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');

        if (window.scrollY > 40 || !isHomePage) {
          navbar.classList.remove('bg-transparent', 'py-5');
          navbar.classList.add('glass-panel', 'py-3', 'shadow-2xl', 'border-b', 'border-white/10', 'bg-black/80', 'backdrop-blur-xl');
        } else {
          navbar.classList.add('bg-transparent', 'py-5');
          navbar.classList.remove('glass-panel', 'py-3', 'shadow-2xl', 'border-b', 'border-white/10', 'bg-black/80', 'backdrop-blur-xl');
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

        document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
          if (btn.dataset.section === current) {
            btn.classList.add('bg-red-600', 'text-white', 'font-semibold');
            btn.classList.remove('text-gray-300', 'font-medium', 'hover:bg-white/5');
          } else {
            btn.classList.remove('bg-red-600', 'text-white', 'font-semibold');
            btn.classList.add('text-gray-300', 'font-medium', 'hover:bg-white/5');
          }
        });

        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

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

function renderVehicles() {
  const container = document.getElementById('vehicles-grid');
  const noResults = document.getElementById('no-results');
  if (!container) return;
  container.innerHTML = '';

  const filtered = VEHICLES_DATA.filter(v => {
    // Body Type Category matching
    let matchesCat = true;
    if (selectedCategory !== 'all') {
      const catLower = selectedCategory.toLowerCase();
      const bodyTypeVal = (v.bodyType || '').toLowerCase();
      const titleVal = v.title.toLowerCase();
      const fuelVal = v.fuel.toLowerCase();

      if (catLower === 'hatchback') {
        matchesCat = bodyTypeVal === 'hatchback' || titleVal.includes('wagon r') || titleVal.includes('vitz') || titleVal.includes('fit');
      } else if (catLower === 'electric') {
        matchesCat = fuelVal.includes('hybrid') || fuelVal.includes('electric') || bodyTypeVal === 'electric';
      } else {
        matchesCat = bodyTypeVal === catLower || titleVal.includes(catLower) || (v.category && v.category.toLowerCase() === catLower);
      }
    }

    const matchesBrand = filterBrand === 'all' || v.title.toLowerCase().includes(filterBrand);
    const matchesModel = filterModel === 'all' || v.title.toLowerCase().includes(filterModel);
    const matchesYear = filterYear === 'all' || v.year >= parseInt(filterYear, 10);
    const matchesFuel = filterFuel === 'all' || v.fuel.toLowerCase().includes(filterFuel);
    const matchesTrans = filterTrans === 'all' || v.transmission.toLowerCase().includes(filterTrans);
    const matchesPrice = filterPrice === 'all' || (v.price !== 'Contact for Price' && parseInt(v.price.replace(/[^0-9]/g, ''), 10) <= parseInt(filterPrice, 10));

    const matchesSearch = searchQuery === '' ||
                          v.title.toLowerCase().includes(searchQuery) ||
                          v.color.toLowerCase().includes(searchQuery) ||
                          v.engine.toLowerCase().includes(searchQuery) ||
                          v.fuel.toLowerCase().includes(searchQuery);

    return matchesCat && matchesBrand && matchesModel && matchesYear && matchesFuel && matchesTrans && matchesPrice && matchesSearch;
  });

  updateActiveChips();

  if (filtered.length === 0) {
    if (noResults) noResults.classList.remove('hidden');
    return;
  } else {
    if (noResults) noResults.classList.add('hidden');
  }

  // If on home page (index.html), show only top 6 latest arrivals
  const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  const displayList = isHomePage ? filtered.slice(0, 6) : filtered;

  displayList.forEach(vehicle => {
    const waMsg = encodeURIComponent(`Hello DEMO SALES WEB! I am interested in the ${vehicle.title} (${vehicle.year}). Please send me full pricing details and photos.`);
    
    const card = document.createElement('div');
    card.className = "glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer border border-white/10 hover:border-red-500/50 shadow-xl";
    
    // Clicking card opens modal unless clicking directly on WhatsApp link
    card.onclick = (e) => {
      if (e.target.closest('a[target="_blank"]')) return;
      openVehicleModal(vehicle.id);
    };

    card.innerHTML = `
      <div>
        <div class="relative aspect-[16/10] overflow-hidden bg-black/50">
          <img src="${vehicle.image}" alt="${vehicle.title}" loading="lazy" decoding="async" class="w-full h-full object-cover object-center group-hover:scale-[1.08] transition-transform duration-500" />
          ${vehicle.badge ? `<div class="absolute top-2 left-2 glass-panel px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-red-400 border border-red-500/30 uppercase tracking-wider">${vehicle.badge}</div>` : ''}
          <div class="absolute top-2 right-2 bg-black/80 lg:backdrop-blur-md no-blur-mobile px-1.5 py-0.5 rounded-md text-[9px] sm:text-xs font-semibold text-gray-200 border border-white/10">${vehicle.condition}</div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span class="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Click to view details</span>
              <i class="fa-solid fa-arrow-right text-red-400 text-xs"></i>
            </span>
          </div>
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

          <div class="grid grid-cols-3 gap-1.5 sm:gap-2 py-2 border-y border-white/5">
            <div class="p-1.5 sm:p-2 rounded-xl bg-white/5 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] sm:text-[10px] uppercase font-semibold text-gray-400 flex items-center gap-1">
                <i class="fa-regular fa-calendar text-red-400 text-[10px]"></i>
                <span>Year</span>
              </span>
              <span class="text-xs sm:text-sm font-bold text-white mt-0.5">${vehicle.year}</span>
            </div>
            <div class="p-1.5 sm:p-2 rounded-xl bg-white/5 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] sm:text-[10px] uppercase font-semibold text-gray-400 flex items-center gap-1">
                <i class="fa-solid fa-gauge-high text-red-400 text-[10px]"></i>
                <span>Mileage</span>
              </span>
              <span class="text-xs sm:text-sm font-bold text-white mt-0.5 truncate max-w-full">${vehicle.mileage.replace(' km', '')} <span class="text-[9px] text-gray-400 font-normal">km</span></span>
            </div>
            <div class="p-1.5 sm:p-2 rounded-xl bg-white/5 flex flex-col items-center justify-center text-center">
              <span class="text-[9px] sm:text-[10px] uppercase font-semibold text-gray-400 flex items-center gap-1">
                <i class="fa-solid fa-gas-pump text-red-400 text-[10px]"></i>
                <span>Fuel</span>
              </span>
              <span class="text-xs sm:text-sm font-bold text-white mt-0.5 truncate max-w-full" title="${vehicle.fuel}">${vehicle.fuel.split(' ')[0]}</span>
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

        <a href="https://wa.me/94755331445?text=${waMsg}" target="_blank" rel="noreferrer" class="w-full py-2.5 px-3 rounded-xl bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20">
          <i class="fa-brands fa-whatsapp text-sm"></i>
          <span>Inquire via WhatsApp</span>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// ================= TESTIMONIALS RENDER =================
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;
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
  if (!container) return;
  container.innerHTML = '';
  GALLERY_ITEMS.forEach(item => {
    const div = document.createElement('div');
    div.className = "group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer shadow-xl transition-all duration-300 transform hover:-translate-y-1";
    div.onclick = () => openGalleryLightbox(item);
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
  const tradeForm = document.getElementById('trade-form');
  if (tradeForm) {
    tradeForm.addEventListener('submit', (e) => {
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
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
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
}

// ================= MODAL CONTROLS =================
function initModals() {
  const vehicleModal = document.getElementById('vehicle-modal');
  const galleryLightbox = document.getElementById('gallery-lightbox');
  const comparisonModal = document.getElementById('comparison-modal');

  const openCompBtn = document.getElementById('open-comparison-btn');
  const closeCompBtn = document.getElementById('close-comparison-btn');

  if (openCompBtn) {
    openCompBtn.addEventListener('click', () => {
      if (comparisonModal) comparisonModal.classList.remove('hidden');
    });
  }

  if (closeCompBtn) {
    closeCompBtn.addEventListener('click', () => {
      if (comparisonModal) comparisonModal.classList.add('hidden');
    });
  }

  const closeModalBtn = document.getElementById('close-modal-btn');
  const closeGalleryBtn = document.getElementById('close-gallery-btn');

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (closeGalleryBtn) closeGalleryBtn.addEventListener('click', closeGallery);

  // Close when clicking dark backdrop area outside modal panel
  if (vehicleModal) {
    vehicleModal.addEventListener('click', (e) => {
      if (e.target === vehicleModal) closeModal();
    });
  }

  if (galleryLightbox) {
    galleryLightbox.addEventListener('click', (e) => {
      if (e.target === galleryLightbox) closeGallery();
    });
  }

  if (comparisonModal) {
    comparisonModal.addEventListener('click', (e) => {
      if (e.target === comparisonModal) comparisonModal.classList.add('hidden');
    });
  }

  // Close on Escape keypress for accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeGallery();
      if (comparisonModal) comparisonModal.classList.add('hidden');
    }
  });
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

  const modal = document.getElementById('vehicle-modal');
  modal.classList.remove('hidden');
  modal.classList.add('animate-fade-in');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('vehicle-modal');
  modal.classList.add('hidden');
  modal.classList.remove('animate-fade-in');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

function openGalleryLightbox(item) {
  document.getElementById('lightbox-img').src = item.image;
  document.getElementById('lightbox-category').textContent = item.category;
  document.getElementById('lightbox-title').textContent = item.title;
  const modal = document.getElementById('gallery-lightbox');
  modal.classList.remove('hidden');
  modal.classList.add('animate-fade-in');
}

function closeGallery() {
  const modal = document.getElementById('gallery-lightbox');
  modal.classList.add('hidden');
  modal.classList.remove('animate-fade-in');
}
