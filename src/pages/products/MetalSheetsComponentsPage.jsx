import ProductCategoryPage from './ProductCategoryPage';

const products = [
  {
    title: 'Metal Sheet (Mild Steel)',
    image: '/assets/products/mild.png',
    badge: 'Best Seller',
    description:
      'IS 2062 Grade A mild steel sheets and plates laser-cut to precise dimensions for fabrication.',
    points: [
      'Sourced from Tata Steel, SAIL and JSPL',
      'Burr-free laser-cut edges',
      'Available in HR and CRCA',
      'Custom thickness available',
    ],
  },
  {
    title: 'Stainless Steel Sheet',
    image: '/assets/products/stainless.png',
    badge: 'ISO',
    description:
      'SS 304 and SS 316 sheets precision laser-cut with nitrogen assist gas for smooth finish.',
    points: [
      'Nitrogen assist gas cutting',
      'No edge discolouration',
      'MTCs available on request',
      'Corrosion resistant finish',
    ],
  },
  {
    title: 'Galvanized Sheet',
    image: '/assets/products/Galvanized.png',
    badge: 'ISO',
    description:
      'Hot-dip galvanized and electro-galvanized sheets for corrosion-resistant fabrication needs.',
    points: [
      'Pre-galvanized sheets available',
      'Z275 coating support',
      'No post-fabrication galvanising required',
      'Long outdoor life',
    ],
  },
  {
    title: 'Perforated Metal Sheet',
    image: '/assets/products/Perforated.png',
    badge: 'ISO',
    description:
      'Laser-cut or punched perforated panels in mild steel, stainless steel and aluminium.',
    points: [
      'Custom perforation patterns',
      'Consistent hole quality',
      'Border areas left solid',
      'Ideal for panels and guards',
    ],
  },
  {
    title: 'Checkered Plate (Chequer Plate)',
    image: '/assets/products/Checkered.png',
    badge: 'ISO',
    description:
      'MS and aluminium chequer plates with raised anti-slip pattern for flooring and platforms.',
    points: [
      'CNC laser cut sizes',
      'MS chequer plate available',
      'Aluminium chequer plate available',
      'Lightweight and durable',
    ],
  },
];

export default function MetalSheetsComponentsPage() {
  return (
    <ProductCategoryPage
      metaTitle="Metal Sheets & Components | UMA Metal Craft"
      metaDescription="Precision laser-cut metal sheets in mild steel, stainless steel, CRCA and galvanised grades for B2B industrial supply."
      breadcrumb="Metal Sheets & Components"
      title="Metal Sheets & Components"
      description="Precision laser-cut metal sheets in mild steel, stainless steel, CRCA and galvanised grades for B2B industrial supply across India."
      heroImage="/assets/products/Checkered.png"
      features={[
        { icon: 'iso', label: 'IS Certified Material' },
        { icon: 'precision', label: 'Laser Cut Precision' },
        { icon: 'custom', label: 'Custom Sizes Available' },
        { icon: 'bulk', label: 'Bulk Orders Supported' },
      ]}
      products={products}
      ctaTitle="Need Custom Metal Sheet Cutting?"
      ctaText="We provide laser-cut sheets and fabricated sheet metal components as per your exact requirement."
    />
  );
}