export interface Vehicle {
  id: string;
  title: string;
  category: string;
  badge: string;
  year: number;
  mileage: string;
  transmission: string;
  engine: string;
  fuel: string;
  color: string;
  condition: string;
  price: string;
  isPriceContact: boolean;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
}

export const VEHICLES_DATA: Vehicle[] = [
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
    image: "/images/wagonr-fz.jpg",
    gallery: [
      "/images/wagonr-fz.jpg",
      "/images/cabin-ergonomics.jpg",
    ],
    features: [
      "HUD (Head-Up Display)",
      "Safety Package / Collision Mitigation System",
      "Dual Airbags & ABS with EBD",
      "Push Start & Keyless Entry",
      "Alloy Wheels & Fog Lamps",
      "Automatic Climate Control AC",
    ],
    description:
      "The Suzuki Wagon R FZ Hybrid is Sri Lanka's ultimate modern city car, delivering incredible fuel efficiency exceeding 30 km/L. Fully inspected, auction grade 4.5/B.",
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
    image: "/images/wagonr-stingray.jpg",
    gallery: [
      "/images/wagonr-stingray.jpg",
      "/images/cabin-ergonomics.jpg",
    ],
    features: [
      "LED Headlamps & Signature Chrome Grille",
      "Paddle Shifters & Turbo Boost",
      "Leather-wrapped Multi-function Steering",
      "Reverse Camera & 7-inch Touch Display",
      "Dual Sensor Brake Support (DSBS)",
      "Factory 15-inch Sport Alloys",
    ],
    description:
      "Sporty edition of the iconic Wagon R lineup. Features aggressive LED styling front fascia, turbo performance with hybrid economy.",
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
    image: "/images/wagonr-fx.jpg",
    gallery: ["/images/wagonr-fx.jpg"],
    features: [
      "Lane Departure Warning",
      "Seat Heaters (Driver & Passenger)",
      "Rear Parking Sensors",
      "Eco-Cool AC Unit",
      "Power Windows & Power Retractable Mirrors",
    ],
    description:
      "Extremely practical, spacious cabin and unmatched fuel economy. Perfect choice for family and daily city commute.",
  },
  {
    id: "honda-fit-crosstar-2022",
    title: "Honda Fit Crosstar e:HEV",
    category: "other",
    badge: "Premium Crossover",
    year: 2022,
    mileage: "22,000 km",
    transmission: "Automatic (e-CVT)",
    engine: "1500cc e:HEV Dual-Motor Hybrid",
    fuel: "Petrol Hybrid (e:HEV)",
    color: "Sunlit White Pearl",
    condition: "Unregistered",
    price: "Contact for Best Price",
    isPriceContact: true,
    image: "/images/honda-fit.jpg",
    gallery: [
      "/images/honda-fit.jpg",
      "/images/cabin-ergonomics.jpg",
    ],
    features: [
      "Honda SENSING Safety Suite",
      "Dual-Motor e:HEV Hybrid System",
      "Water-Repellent Fabric Seats",
      "9-inch Touchscreen with Navigation",
      "High Ground Clearance Crossover Styling",
      "LED Headlamps & Roof Rails",
    ],
    description:
      "Premium Japanese hybrid crossover edition with high ground clearance, water-repellent fabric, and Honda SENSING advanced driver assistance.",
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
    image: "/images/toyota-vitz.jpg",
    gallery: ["/images/toyota-vitz.jpg"],
    features: [
      "Toyota Safety Sense C",
      "Auto High Beam & Lane Assist",
      "Push Start Button",
      "Reverse Camera & Multimedia",
      "Fabric Interior with Dark Accent",
    ],
    description:
      "Reliable Toyota hatchback engineered for low maintenance costs, strong resale value, and durable performance on Sri Lankan roads.",
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
    image: "/images/nissan-dayz.jpg",
    gallery: ["/images/nissan-dayz.jpg"],
    features: [
      "ProPILOT Autonomous Highway Assist",
      "360 Around View Camera Monitor",
      "9-inch Touch Navigation System",
      "LED Signature Lamps & Chrome Grill",
      "SOS Emergency Call System",
    ],
    description:
      "Loaded with high-tech autonomous driver assistance, 360-degree cameras, and premium Highway Star styling.",
  },
  {
    id: "toyota-hiace-2021",
    title: "Toyota HiAce Super GL Luxury Van",
    category: "van",
    badge: "Executive Van",
    year: 2021,
    mileage: "28,000 km",
    transmission: "Automatic",
    engine: "2800cc 1GD Turbo Diesel",
    fuel: "Diesel",
    color: "Pearl White",
    condition: "Unregistered",
    price: "Rs. 18,500,000",
    isPriceContact: false,
    image: "/images/toyota-hiace.jpg",
    gallery: ["/images/toyota-hiace.jpg"],
    features: [
      "5-Door Dual Sliding Doors",
      "Plush Velvet Seating & Rear AC",
      "Push Start & Smart Key",
      "Reverse Camera & Parking Sensors",
    ],
    description:
      "Executive luxury passenger and commercial van equipped with high-torque 1GD turbo diesel engine and dual sliding doors.",
  },
  {
    id: "mercedes-amg-gt-2021",
    title: "Mercedes-AMG GT Coupe",
    category: "sports",
    badge: "High Capacity",
    year: 2021,
    mileage: "18,000 km",
    transmission: "Automatic 7-Speed DCT",
    engine: "4000cc V8 Biturbo",
    fuel: "Petrol",
    color: "Selenite Grey Metallic",
    condition: "Unregistered",
    price: "Rs. 48,900,000",
    isPriceContact: false,
    image: "/images/mercedes-amg.jpg",
    gallery: ["/images/mercedes-amg.jpg"],
    features: [
      "AMG 4.0L V8 Biturbo Engine",
      "Panamericana Front Grille",
      "AMG Ride Control Sport Suspension",
      "Burmester Surround Sound System",
    ],
    description:
      "Iconic high-performance luxury sports coupe with AMG biturbo power, distinctive silver metallic finish, and track-inspired dynamics.",
  },
  {
    id: "suzuki-every-2022",
    title: "Suzuki Every Join Turbo Van 4WD",
    category: "van",
    badge: "Compact Van",
    year: 2022,
    mileage: "16,000 km",
    transmission: "Automatic",
    engine: "660cc Turbocharged",
    fuel: "Petrol 4WD",
    color: "Khaki Green",
    condition: "Unregistered",
    price: "Rs. 5,850,000",
    isPriceContact: false,
    image: "/images/suzuki-every.jpg",
    gallery: ["/images/suzuki-every.jpg"],
    features: [
      "Selectable 4WD Drive System",
      "Join Turbo Seats & Armrests",
      "Dual Airbags & ABS",
      "Power Steering & Air Conditioning",
    ],
    description:
      "Kei van with Join Turbo package and 4WD capability, ideal for commercial deliveries and island transport.",
  },
  {
    id: "range-rover-sport-2023",
    title: "Range Rover Sport HSE Dynamic",
    category: "suv",
    badge: "Luxury SUV",
    year: 2023,
    mileage: "8,500 km",
    transmission: "Automatic 8-Speed",
    engine: "3000cc Ingenium Turbo",
    fuel: "Petrol 4WD",
    color: "Santorini Black",
    condition: "Unregistered",
    price: "Rs. 64,650,000",
    isPriceContact: false,
    image: "/images/range-rover.jpg",
    gallery: ["/images/range-rover.jpg"],
    features: [
      "Terrain Response 2 All-Wheel Drive",
      "Electronic Air Suspension",
      "Meridian 3D Surround Sound",
      "Perforated Windsor Leather Seats",
    ],
    description:
      "Luxury flagship 4x4 SUV with commanding road stance, offroad terrain capability, and opulent British interior craftsmanship.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ruwan Perera",
    location: "Kurunegala",
    rating: 5,
    text: "Excellent service and completely transparent. The auction sheet was 100% verified and the car was exactly as described. Will definitely buy again!",
    avatar: "RP",
  },
  {
    name: "Nimesha Fernando",
    location: "Kandy",
    rating: 5,
    text: "Bought a Wagon R FZ last month. Smooth paperwork, fair price, and the staff were so helpful throughout. Highly recommend DEMO SALES WEB.",
    avatar: "NF",
  },
  {
    name: "Kasun Jayawardena",
    location: "Colombo",
    rating: 5,
    text: "As a sub-dealer, I trust DEMO SALES WEB for bulk orders. They always deliver on time with proper documentation. Professional team.",
    avatar: "KJ",
  },
];

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'showroom' | 'deliveries' | 'imports' | 'inspection';
  badge: string;
}

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g1',
    src: '/images/wagonr-fz.jpg',
    title: 'Suzuki Wagon R FZ Showroom Unit',
    category: 'showroom',
    badge: 'Showroom Stock',
  },
  {
    id: 'g2',
    src: '/images/wagonr-stingray.jpg',
    title: 'Wagon R Stingray HYBRID T Edition',
    category: 'showroom',
    badge: 'Flagship Display',
  },
  {
    id: 'g3',
    src: '/images/deliveries.jpg',
    title: 'Happy Customer Handover Ceremony',
    category: 'deliveries',
    badge: 'Island Delivery',
  },
  {
    id: 'g4',
    src: '/images/showroom.jpg',
    title: 'Kurunegala Main Showroom Complex',
    category: 'showroom',
    badge: 'Showroom Facility',
  },
  {
    id: 'g5',
    src: '/images/quality-inspection.jpg',
    title: '150-Point Japanese Quality Inspection',
    category: 'inspection',
    badge: 'Grade 4.5 Verified',
  },
  {
    id: 'g6',
    src: '/images/wholesale-fleet.jpg',
    title: 'Direct Japanese Import Container Arrival',
    category: 'imports',
    badge: 'Direct Japanese Import',
  },
  {
    id: 'g7',
    src: '/images/cabin-ergonomics.jpg',
    title: 'Interior Ergonomics & Touch Controls',
    category: 'inspection',
    badge: 'Japanese Spec',
  },
  {
    id: 'g8',
    src: '/images/honda-fit.jpg',
    title: 'Honda Fit Crosstar e:HEV Crossover',
    category: 'imports',
    badge: 'New Import Arrival',
  },
];
