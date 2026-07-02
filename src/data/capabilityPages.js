export const makeCapabilitySlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/\//g, '-')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const capabilityPages = [
  {
    slug: 'cnc-laser-cutting',
    aliases: ['laser-cutting', 'cnc-laser-cutting-services'],
    title: 'CNC Laser Cutting',
    eyebrow: 'Precision Cutting Service',
    image: '/assets/capabilities/laser-cutting.png',
    metaTitle: 'CNC Laser Cutting Services in Nagpur | UMA Metal Craft',
    metaDescription:
      'High precision CNC laser cutting services for MS, SS, aluminium and sheet metal components.',
    short:
      'High-precision laser cutting for steel, aluminium and specialty metals with tight tolerances.',
    description:
      'Our CNC laser cutting service is built for businesses that need clean edges, accurate profiles and repeatable quality. From single prototypes to bulk production, we cut components as per your drawing, DXF file or sample.',
    highlights: [
      'High accuracy cutting for complex profiles',
      'Clean edge finish with minimum material wastage',
      'Suitable for prototype and bulk production',
      'Fast turnaround for urgent industrial requirements',
    ],
    materials: ['Mild Steel', 'Stainless Steel', 'Aluminium', 'Galvanized Sheet', 'Metal Plates'],
    applications: ['Machine parts', 'Industrial panels', 'Brackets', 'Enclosures', 'Custom fabrication parts'],
  },
  {
    slug: 'metal-fabrication',
    aliases: ['fabrication', 'custom-metal-fabrication', 'sheet-metal-fabrication'],
    title: 'Metal Fabrication',
    eyebrow: 'End-to-End Fabrication',
    image: '/assets/capabilities/metal-fabrication.png',
    metaTitle: 'Metal Fabrication Services in Nagpur | UMA Metal Craft',
    metaDescription:
      'Complete metal fabrication services including cutting, bending, welding, assembly and finishing.',
    short:
      'Complete fabrication services including welding, bending and assembly for industrial applications.',
    description:
      'Our fabrication service is designed for businesses that need finished components instead of only raw cutting or bending. We manage multiple processes under one roof to reduce coordination issues and improve delivery timelines.',
    highlights: [
      'Cutting, bending, welding and finishing under one roof',
      'Custom fabrication as per drawing',
      'Suitable for small and large assemblies',
      'Reliable production coordination',
    ],
    materials: ['MS', 'SS', 'Aluminium', 'GI Sheet'],
    applications: ['Industrial frames', 'Equipment parts', 'Panels', 'Covers', 'Custom assemblies'],
  },
  {
    slug: 'cnc-machining',
    aliases: ['vmc-machining', 'cnc-machine-work', 'machining'],
    title: 'CNC Machining',
    eyebrow: 'Precision Machining',
    image: '/assets/capabilities/cnc-machining.png',
    metaTitle: 'CNC Machining Services in Nagpur | UMA Metal Craft',
    metaDescription:
      'Precision CNC machining services for complex components and tight dimensional requirements.',
    short:
      'Precision CNC machining for complex components and tight dimensional requirements.',
    description:
      'Our CNC machining capability helps manufacturers get accurate components with tight dimensional control. We machine custom parts based on engineering drawings, samples and production requirements.',
    highlights: [
      'Accurate hole, slot and profile machining',
      'Ideal for custom machine parts',
      'Suitable for prototype and production jobs',
      'Reliable dimensional inspection',
    ],
    materials: ['Mild Steel', 'Aluminium', 'Stainless Steel', 'Tool Steel'],
    applications: ['Machine components', 'Die parts', 'Mounting plates', 'Fixtures', 'Automation parts'],
  },
  {
    slug: 'press-machine-work',
    aliases: ['press-work', 'press-machine', 'stamping', 'forming'],
    title: 'Press Machine Work',
    eyebrow: 'Pressing & Forming',
    image: '/assets/capabilities/press-machine.png',
    metaTitle: 'Press Machine Work Services | UMA Metal Craft',
    metaDescription:
      'Heavy-duty press operations for stamping, forming and shaping metal components at scale.',
    short:
      'Heavy-duty press operations for stamping, forming and shaping metal components at scale.',
    description:
      'We provide press machine work for industrial components that need accurate shaping, forming and repeatable production. Our process is suitable for batch production and custom component requirements.',
    highlights: [
      'Pressing and forming for metal components',
      'Suitable for batch production',
      'Consistent shape and dimensional output',
      'Industrial-grade production support',
    ],
    materials: ['Mild Steel', 'Stainless Steel', 'Aluminium', 'GI Sheet'],
    applications: ['Stamped parts', 'Formed components', 'Brackets', 'Mounting parts', 'Industrial fittings'],
  },
  {
    slug: 'sheet-metal-work',
    aliases: ['sheet-metal', 'sheet-metal-fabrication', 'sheet-metal-components'],
    title: 'Sheet Metal Work',
    eyebrow: 'Sheet Metal Solutions',
    image: '/assets/capabilities/sheet-metal.png',
    metaTitle: 'Sheet Metal Work Services | UMA Metal Craft',
    metaDescription:
      'Expert sheet metal cutting, forming and finishing for enclosures, panels and structural parts.',
    short:
      'Expert sheet metal cutting, forming and finishing for enclosures, panels and structural parts.',
    description:
      'Our sheet metal work service covers cutting, forming, bending and finishing support for industrial sheet metal components. We manufacture panels, covers, enclosures and custom sheet parts as per requirement.',
    highlights: [
      'Cutting and forming support',
      'Suitable for panels and enclosures',
      'Custom sheet metal parts as per drawing',
      'Clean finish and reliable fitment',
    ],
    materials: ['MS Sheet', 'SS Sheet', 'Aluminium Sheet', 'GI Sheet'],
    applications: ['Panels', 'Enclosures', 'Machine covers', 'Cabinets', 'Sheet metal assemblies'],
  },
  {
    slug: 'aluminium-fabrication',
    aliases: ['aluminum-fabrication', 'aluminium-work', 'aluminium-processing'],
    title: 'Aluminium Fabrication',
    eyebrow: 'Aluminium Processing',
    image: '/assets/capabilities/aluminium.png',
    metaTitle: 'Aluminium Fabrication Services | UMA Metal Craft',
    metaDescription:
      'Specialized aluminium processing including cutting, welding, forming and precision fabrication.',
    short:
      'Specialized aluminium processing including extrusion, welding and precision forming.',
    description:
      'We provide aluminium fabrication support for lightweight, corrosion-resistant and precision industrial components. Our team handles aluminium cutting, forming, welding and custom fabrication requirements.',
    highlights: [
      'Lightweight fabrication support',
      'Suitable for corrosion-resistant parts',
      'Custom aluminium cutting and forming',
      'Good finish for industrial applications',
    ],
    materials: ['Aluminium Sheet', 'Aluminium Plate', 'Aluminium Sections', 'Aluminium Profiles'],
    applications: ['Aluminium panels', 'Frames', 'Machine guards', 'Custom parts', 'Industrial covers'],
  },
  {
    slug: 'die-tool-making',
    aliases: ['die-making', 'tool-making', 'die-and-tool-making', 'tooling-support'],
    title: 'Die & Tool Making',
    eyebrow: 'Tooling Support',
    image: '/assets/capabilities/die-tools.png',
    metaTitle: 'Die & Tool Making Services | UMA Metal Craft',
    metaDescription:
      'Custom die design and tool manufacturing for production runs and specialized applications.',
    short:
      'Custom die design and tool manufacturing for production runs and specialized applications.',
    description:
      'We support clients with die and tool making requirements for manufacturing operations. Our team focuses on practical, production-ready tooling that improves repeatability and reduces manual effort.',
    highlights: [
      'Custom die development',
      'Production-focused tooling',
      'Improves repeatability',
      'Support from design to trial',
    ],
    materials: ['Tool Steel', 'MS', 'Aluminium', 'Custom Materials'],
    applications: ['Production dies', 'Fixtures', 'Jigs', 'Tooling parts', 'Custom manufacturing tools'],
  },
  {
    slug: 'machine-job-work',
    aliases: ['job-work', 'machine-work', 'turning-milling', 'custom-machine-job'],
    title: 'Machine Job Work',
    eyebrow: 'General Machine Shop',
    image: '/assets/capabilities/machine-job.png',
    metaTitle: 'Machine Job Work Services | UMA Metal Craft',
    metaDescription:
      'General machine shop services including turning, milling and custom part production.',
    short:
      'General machine shop services including turning, milling and custom part production.',
    description:
      'Our machine job work service supports customers with custom machining, turning, milling and modification work. It is ideal for one-off jobs, repair support and small-to-medium batch component production.',
    highlights: [
      'Custom machining support',
      'Turning and milling job work',
      'Suitable for one-off and batch jobs',
      'Flexible support for industrial requirements',
    ],
    materials: ['Mild Steel', 'Stainless Steel', 'Aluminium', 'Brass', 'Custom Materials'],
    applications: ['Custom parts', 'Repair components', 'Machine spares', 'Bushes', 'Shafts', 'Industrial fittings'],
  },
  {
    slug: 'surface-finishing',
    aliases: ['finishing', 'powder-coating', 'painting', 'metal-finishing'],
    title: 'Surface Finishing',
    eyebrow: 'Finishing & Treatment',
    image: '/assets/surface.png',
    metaTitle: 'Surface Finishing Services | UMA Metal Craft',
    metaDescription:
      'Surface finishing support for fabricated metal components including cleaning, coating, painting and final finishing.',
    short:
      'Finishing support for fabricated parts to improve appearance, durability and final usability.',
    description:
      'Our surface finishing support helps clients receive ready-to-use fabricated components with improved appearance, protection and durability. We coordinate finishing requirements based on application, material and client specifications.',
    highlights: [
      'Finishing support for fabricated components',
      'Improves appearance and durability',
      'Suitable for industrial and commercial parts',
      'Final inspection before dispatch',
    ],
    materials: ['Mild Steel', 'Stainless Steel', 'Aluminium', 'Fabricated Assemblies'],
    applications: ['Machine covers', 'Panels', 'Frames', 'Industrial parts', 'Custom fabricated components'],
  },
];

export const getCapabilityBySlug = (slug = '') => {
  const normalizedSlug = makeCapabilitySlug(slug);

  return capabilityPages.find((item) => {
    const allSlugs = [item.slug, item.title, ...(item.aliases || [])].map(makeCapabilitySlug);
    return allSlugs.includes(normalizedSlug);
  });
};