export const company = {
  name: 'UMA METAL CRAFT',
  shortName: 'UMA Metal Craft',
  established: 2003,
  location: 'Nagpur, India',
  email: 'info@umametalcraft.com',
  phone: '+91 98765 43210',
  whatsapp: '+919876543210',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Industrial Components', href: '/products/industrial-components' },
      { label: 'Gym Equipment', href: '/products/gym-equipment' },
      { label: 'Aluminium Products', href: '/products/aluminium-products' },
      { label: 'Automation & Machine Parts', href: '/products/automation-machine-parts' },
      { label: 'Metal Sheets & Components', href: '/products/metal-sheets-components' },
      { label: 'Tools, Nuts & Bolts', href: '/products/tools-nuts-bolts' },
    ],
  },
  {
    label: 'Calculators',
    href: '/calculator',
    children: [
      { label: 'Laser Cutting Cost', href: '/calculators/laser-cutting-cost' },
      { label: 'Metal Weight', href: '/calculators/metal-weight' },
      { label: 'Pipe Weight', href: '/calculators/pipe-weight' },
      { label: 'Bend Allowance', href: '/calculators/bend-allowance' },
      { label: 'Unit Converter', href: '/calculators/unit-converter' },
    ],
  },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const heroBadges = [
  { icon: 'target', title: '±0.01mm Precision Accuracy', description: 'High-tolerance manufacturing' },
  { icon: 'shieldCheck', title: 'ISO 9001:2015 Certified Company', description: 'Quality assured processes' },
  { icon: 'lightning', title: 'Fast Turnaround On-Time Delivery', description: 'Reliable production schedules' },
];

export const heroStats = [
  { icon: 'award', value: '22+', label: 'Years Experience' },
  { icon: 'users', value: '300+', label: 'Happy Clients' },
  { icon: 'briefcase', value: '1500+', label: 'Projects Delivered' },
  { icon: 'target', value: '±0.01mm', label: 'Tolerance Accuracy' },
  { icon: 'clockFast', value: '24 Hrs', label: 'Fast Turnaround' },
];

export const trustedPartners = [
  {
    name: 'Tata Motors',
    logo: '/logos/tata.png',
  },
  {
    name: 'Mahindra',
    logo: '/logos/mahindra.png',
  },
  {
    name: 'Larsen & Toubro',
    logo: '/logos/lnt.png',
  },
  {
    name: 'Siemens',
    logo: '/logos/siemens.png',
  },
  {
    name: 'Bosch',
    logo: '/logos/bosch.png',
  },
  {
    name: 'BHEL',
    logo: '/logos/bhel.png',
  },
];

export const heavyIndustryFeatures = [
  {
    icon: 'roboticArm',
    title: 'Modern Machinery',
    description: 'State-of-the-art CNC laser cutting, machining, and fabrication equipment for precision manufacturing.',
  },
  {
    icon: 'shieldCheck',
    title: 'Uncompromising Quality',
    description: 'ISO 9001:2015 certified processes ensuring consistent quality across every production run.',
  },
  {
    icon: 'clockFast',
    title: 'Rapid Turnaround',
    description: 'Efficient production workflows with 24-hour turnaround capability for urgent requirements.',
  },
  {
    icon: 'ruler',
    title: 'Custom Engineering',
    description: 'Tailored solutions from CAD design to finished components — built to your exact specifications.',
  },
];

export const capabilityServices = [
  {
    title: 'CNC Laser Cutting',
    description: 'High-precision laser cutting for steel, aluminium, and specialty metals with tight tolerances.',
    image: '/assets/capabilities/laser-cutting.jpg',
    icon: 'laser',
    slug: 'cnc-laser-cutting',
  },
  {
    title: 'Metal Fabrication',
    description: 'Complete fabrication services including welding, bending, and assembly for industrial applications.',
    image: '/assets/capabilities/metal-fabrication.jpg',
    icon: 'welder',
    slug: 'metal-fabrication',
  },
  {
    title: 'CNC Machining',
    description: 'Precision CNC machining for complex components and tight dimensional requirements.',
    image: '/assets/capabilities/cnc-machining.jpg',
    icon: 'drill',
    slug: 'cnc-machining',
  },
  {
    title: 'Press Machine Work',
    description: 'Heavy-duty press operations for stamping, forming, and shaping metal components at scale.',
    image: '/assets/capabilities/press-machine.jpg',
    icon: 'press',
    slug: 'press-machine-work',
  },
  {
    title: 'Sheet Metal Work',
    description: 'Expert sheet metal cutting, forming, and finishing for enclosures, panels, and structural parts.',
    image: '/assets/capabilities/sheet-metal.jpg',
    icon: 'sheets',
    slug: 'sheet-metal-work',
  },
  {
    title: 'Aluminium Fabrication',
    description: 'Specialized aluminium processing including extrusion, welding, and precision forming.',
    image: '/assets/capabilities/aluminium.jpg',
    icon: 'aluminium',
    slug: 'aluminium-fabrication',
  },
  {
    title: 'Die & Tool Making',
    description: 'Custom die design and tool manufacturing for production runs and specialized applications.',
    image: '/assets/capabilities/die-tools.jpg',
    icon: 'mold',
    slug: 'die-tool-making',
  },
  {
    title: 'Machine Job Work',
    description: 'General machine shop services including turning, milling, and custom part production.',
    image: '/assets/capabilities/machine-job.jpg',
    icon: 'gear',
    slug: 'machine-job-work',
  },
];

export const homeProducts = [
  {
    title: 'Aluminium Products',
    description: 'Precision-formed aluminium plates and components for industrial applications.',
    image: '/assets/products/aluminium.jpg',
    icon: 'layers',
  },
  {
    title: 'Industrial Components',
    description: 'Heavy-duty metal components engineered for secure fit and structural integrity.',
    image: '/assets/products/components.jpg',
    icon: 'gear',
  },
  {
    title: 'Gym Equipment',
    description: 'Fabricated steel gym frames and fitness equipment structures.',
    image: '/assets/products/gym-equipment.jpg',
    icon: 'dumbbell',
  },
  {
    title: 'Metal Sheets & Components',
    description: 'Precision-cut and formed metal sheets for enclosures and assemblies.',
    image: '/assets/products/metal-sheets.jpg',
    icon: 'profile',
  },
  {
    title: 'Automation & Machine Parts',
    description: 'CNC machined parts for automation systems and industrial machinery.',
    image: '/assets/products/automation.jpg',
    icon: 'robotArm',
  },
  {
    title: 'Tools, Nuts & Bolts',
    description: 'Precision fasteners, tools, and hardware for industrial applications.',
    image: '/assets/products/tools.jpg',
    icon: 'nutBolt',
  },
];

export const blogArticles = [
  {
    slug: 'cnc-laser-cutting-tolerances',
    title: 'Understanding CNC Laser Cutting Tolerances',
    excerpt: 'Learn how tolerance specifications affect your manufacturing outcomes and what to expect from precision laser cutting services.',
    category: 'Technology',
    categoryIcon: 'gear',
    date: 'Oct 12, 2023',
    image: '/assets/blog/blog-1.jpg',
    featured: false,
  },
  {
    slug: 'industrial-metal-fabrication-types',
    title: '5 Types of Industrial Metal Fabrication Explained',
    excerpt: 'From laser cutting to welding and assembly — a comprehensive guide to the main fabrication processes used in heavy industry.',
    category: 'Guides',
    categoryIcon: 'book',
    date: 'Sep 28, 2023',
    image: '/assets/blog/blog-2.jpg',
    featured: true,
  },
  {
    slug: 'aluminium-vs-stainless-steel',
    title: 'Aluminium vs Stainless Steel for Automotive Parts',
    excerpt: 'Compare material properties, cost factors, and application suitability for automotive component manufacturing.',
    category: 'Materials',
    categoryIcon: 'layers',
    date: 'Sep 15, 2023',
    image: '/assets/blog/blog-3.jpg',
    featured: false,
  },
];

export const faqItems = [
  {
    question: 'What materials can you laser cut?',
    answer: 'We laser cut a wide range of materials including mild steel, stainless steel, aluminium, brass, copper, and various alloys. Our CNC laser systems handle sheet thicknesses from 0.5mm to 25mm with precision tolerances of ±0.01mm.',
  },
  {
    question: 'What is your typical lead time?',
    answer: 'Standard orders typically ship within 3–5 business days. We offer 24-hour express turnaround for urgent requirements. Lead times vary based on complexity, material availability, and current production schedule.',
  },
  {
    question: 'Do you accept small batch orders?',
    answer: 'Yes, we accommodate both prototype runs and small batch production. Whether you need a single custom part or a run of 50 units, our flexible manufacturing setup accommodates orders of all sizes.',
  },
  {
    question: 'Are you ISO certified?',
    answer: 'Yes, UMA Metal Craft is ISO 9001:2015 certified. Our quality management system ensures consistent processes, documented procedures, and continuous improvement across all manufacturing operations.',
  },
  {
    question: 'Do you provide CAD design services?',
    answer: 'We offer CAD design support to help optimize your parts for manufacturing. Our engineering team can review your drawings, suggest design improvements, and create production-ready files from concepts or sketches.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes, we provide delivery across Nagpur, Maharashtra, and pan-India shipping for bulk orders. Local pickup is also available from our Hingna manufacturing facility.',
  },
];

export const trustFeatures = [
  { icon: 'target', title: 'High Precision', description: '±0.01mm Tolerance' },
  { icon: 'shieldCheck', title: 'Quality Assured', description: 'ISO 9001:2015 Certified' },
  { icon: 'clockFast', title: 'On-Time Delivery', description: 'Fast & Reliable Service' },
  { icon: 'gears', title: 'Custom Solutions', description: 'Tailored to Your Needs' },
  { icon: 'headset', title: 'Expert Support', description: '24/7 Customer Support' },
];

export const trustItems = [
  { value: '2004', label: 'Established' },
  { value: 'Hingna, Nagpur', label: 'Manufacturing Base' },
  { value: 'Precision', label: 'Manufacturing Focus' },
  { value: 'Bulk & Custom', label: 'Order Support' },
];

export const productCategories = [
  {
    title: 'Aluminium Products',
    description: 'Precision-formed aluminium plates and components for industrial applications requiring lightweight strength and consistent finish.',
    items: ['Aluminium plates', 'Aluminium product fabrication'],
  },
  {
    title: 'Clamps & Brackets',
    description: 'Reliable clamping and bracket solutions engineered for secure fit, structural integrity, and repeated industrial use.',
    items: ['Power clamps', 'Realtime U brackets'],
  },
  {
    title: 'Rings, Caps & Bearings',
    description: 'Fabricated rings, end caps, and bearing components built to specification for assembly and mechanical performance.',
    items: ['Securing rings', 'Sheet metal end caps', 'Hinged cap bearing', 'Radial bearing'],
  },
  {
    title: 'Security & Industrial Components',
    description: 'Purpose-built metal components for security, sealing, and industrial equipment integration requirements.',
    items: ['Security seals', 'Industrial securing components'],
  },
  {
    title: 'Custom Fabrication',
    description: 'Tailored metal fabrication for non-standard requirements — from one-off prototypes to recurring production runs.',
    items: ['Custom metal components', 'Gym stand / fabricated structures', 'Bulk fabrication orders'],
  },
];

export const capabilities = [
  {
    title: 'Precision Sheet Metal Fabrication',
    description: 'Accurate cutting, forming, and finishing for components that must meet tight dimensional requirements.',
  },
  {
    title: 'Custom Component Manufacturing',
    description: 'Fabrication support for bespoke parts — developed from your drawings, samples, or specification briefs.',
  },
  {
    title: 'Industrial Fabrication Support',
    description: 'Practical manufacturing solutions for plant equipment, assemblies, and recurring industrial supply needs.',
  },
  {
    title: 'Bulk Order Handling',
    description: 'Structured production approach for volume requirements with consistent quality across every batch.',
  },
  {
    title: 'Long-Term Performance Focus',
    description: 'Components built for durability, fit, and finish — not just initial appearance.',
  },
  {
    title: 'Business Inquiry Support',
    description: 'Direct communication for manufacturing discussions, quotations, and custom fabrication requirements.',
  },
];

export const whyChooseUs = [
  {
    number: '01',
    title: 'Precision-First Approach',
    description: 'Manufacturing discipline focused on dimensional accuracy, material handling, and repeatable output.',
  },
  {
    number: '02',
    title: 'Premium Quality Standards',
    description: 'Consistent finish, fit, and workmanship across standard products and custom fabrication work.',
  },
  {
    number: '03',
    title: 'Reliable Fit & Durability',
    description: 'Components designed for industrial use — where performance under load and over time matters.',
  },
  {
    number: '04',
    title: 'Custom Fabrication Flexibility',
    description: 'Support for varied requirements — from specific part geometries to bulk production schedules.',
  },
  {
    number: '05',
    title: 'Industrial-Use Focus',
    description: 'Solutions oriented toward real manufacturing, assembly, and field application needs.',
  },
  {
    number: '06',
    title: 'Responsive Inquiry Support',
    description: 'Clear communication channels for quotes, bulk orders, and fabrication discussions.',
  },
];

export const showcaseProducts = [
  {
    title: 'Aluminium Plates',
    description: 'Flat-formed aluminium plates for industrial mounting, enclosure, and structural applications.',
    tag: 'Aluminium',
  },
  {
    title: 'Power Clamps',
    description: 'Robust clamping components for secure fastening in fabrication and assembly environments.',
    tag: 'Clamps',
  },
  {
    title: 'Sheet Metal End Caps',
    description: 'Precision-formed end caps for enclosures, tubes, and fabricated assemblies.',
    tag: 'Sheet Metal',
  },
  {
    title: 'Securing Rings',
    description: 'Fabricated rings for mechanical securing, retention, and assembly applications.',
    tag: 'Rings',
  },
  {
    title: 'Radial Bearing',
    description: 'Metal bearing components manufactured to support rotational and load-bearing requirements.',
    tag: 'Bearings',
  },
  {
    title: 'Custom Components',
    description: 'Bespoke metal parts developed from your specifications for unique industrial applications.',
    tag: 'Custom',
  },
];

export const processSteps = [
  { step: '01', title: 'Requirement Discussion', description: 'Share your fabrication needs, quantities, and application context.' },
  { step: '02', title: 'Design & Specification', description: 'Review drawings, dimensions, materials, and finish requirements together.' },
  { step: '03', title: 'Fabrication & Manufacturing', description: 'Production carried out with precision-focused manufacturing discipline.' },
  { step: '04', title: 'Quality Check', description: 'Dimensional and visual inspection before dispatch.' },
  { step: '05', title: 'Dispatch & Delivery', description: 'Coordination for delivery across Nagpur and wider Maharashtra.' },
];

export const featuredArticle = {
  slug: 'precision-sheet-metal-fabrication',
  title: 'Precision Sheet Metal Fabrication: What Industrial Buyers Should Look For',
  excerpt: 'Understanding tolerances, material selection, and fabrication quality helps industrial buyers choose partners who deliver components that perform reliably in real applications.',
  date: 'June 2026',
  readTime: '8 min read',
};
