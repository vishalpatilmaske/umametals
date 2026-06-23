import ProductCategoryPage from './ProductCategoryPage';

const products = [
  {
    title: 'Hex Bolts & Nuts Set',
    image: '/assets/products/Hex.png',
    badge: 'In Stock',
    description:
      'Grade 8.8 and Grade 10.9 metric hex bolts and compatible hex nuts in zinc-plated and black finish.',
    points: [
      'Grade 8.8 for general use',
      'Grade 10.9 for high strength',
      'Compatible nuts available',
      'Bulk supply supported',
    ],
  },
  {
    title: 'Allen Key / Hex Wrench Set',
    image: '/assets/products/Allen.png',
    badge: 'ISO',
    description:
      'Industrial-grade CrV steel hex key sets and T-handle hex wrenches for maintenance use.',
    points: [
      'CrV steel construction',
      'Ball-end long-arm versions',
      'Industrial sets in fold-up holders',
      'Metric sizes available',
    ],
  },
  {
    title: 'Stainless Steel Screws',
    image: '/assets/products/Screws.png',
    badge: 'ISO',
    description:
      'A2 SS 304 and A4 SS 316 stainless steel machine screws, self-tapping screws and fasteners.',
    points: [
      'A2-70 SS 304 screws',
      'A4-80 SS 316 screws',
      'Non-magnetic options',
      'Corrosion resistant',
    ],
  },
  {
    title: 'Washers & Lock Nuts',
    image: '/assets/products/Washers.png',
    badge: 'ISO',
    description:
      'MS, stainless and hardened flat washers, spring washers and locknuts for vibration resistance.',
    points: [
      'Hardened washers available',
      'Nyloc nuts for vibration resistance',
      'Large OD fender washers',
      'Multiple sizes available',
    ],
  },
  {
    title: 'Industrial Fasteners Kit',
    image: '/assets/products/Fasteners.png',
    badge: 'ISO',
    description:
      'Pre-configured industrial fastener kits with assorted bolts, nuts, washers and screws.',
    points: [
      'Curated for maintenance teams',
      'Custom kit configuration',
      'Stackable trays available',
      'Easy inventory control',
    ],
  },
];

export default function ToolsNutsBoltsPage() {
  return (
    <ProductCategoryPage
      metaTitle="Tools, Nuts & Bolts | UMA Metal Craft"
      metaDescription="High-tensile industrial fasteners, hex bolts, nuts, washers and tool sets for engineering, construction and manufacturing sectors."
      breadcrumb="Tools, Nuts & Bolts"
      title="Tools, Nuts & Bolts"
      description="High-tensile industrial fasteners, hex bolts, nuts, washers and tool sets for engineering, construction and manufacturing sectors."
      heroImage="/assets/products/Allen.png"
      features={[
        { icon: 'precision', label: 'Premium Grade Material' },
        { icon: 'iso', label: 'ISO Certified' },
        { icon: 'custom', label: 'Standard & Custom Sizes' },
        { icon: 'bulk', label: 'Bulk Orders Supported' },
      ]}
      products={products}
      ctaTitle="Need Bulk Fasteners or Tools?"
      ctaText="We supply standard and custom fasteners, nuts, bolts and tools for industrial requirements."
    />
  );
}