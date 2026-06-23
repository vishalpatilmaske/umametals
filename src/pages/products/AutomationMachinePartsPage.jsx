import ProductCategoryPage from './ProductCategoryPage';

const products = [
  {
    title: 'Cylinder Automation Parts',
    image: '/assets/products/Cylinder.png',
    badge: 'Precision Made',
    description:
      'Precision-machined cylinder barrels, end covers, piston rods and porting blocks for automation systems.',
    points: [
      'H7 bore tolerance as standard',
      'Port threads as per BSP / NPT',
      'CMM first-article inspection',
      'Custom sizes available',
    ],
  },
  {
    title: 'Press Machine Components',
    image: '/assets/products/Press.png',
    badge: 'ISO',
    description:
      'Custom press machine components including bolsters, die plates, strippers and guide blocks.',
    points: [
      'Heat treated EN31/D2 die steel',
      'Wire EDM profiles available',
      'Guide pillars and bushes',
      'Precision surface finish',
    ],
  },
  {
    title: 'Pneumatic Fixture Parts',
    image: '/assets/products/Pneumatic.png',
    badge: 'ISO',
    description:
      'Machined and fabricated pneumatic fixture components for clamps, swing arms and automation fixtures.',
    points: [
      'Flat mounting faces',
      'Air distribution manifolds',
      'Anodised aluminium fixtures',
      'Long-term durability',
    ],
  },
  {
    title: 'Custom Stamped Parts',
    image: '/assets/products/Stamped.png',
    badge: 'ISO',
    description:
      'High-volume stamped and press-formed metal parts in mild steel, stainless steel and aluminium.',
    points: [
      'Progressive tool stamping',
      'Laser-cut blanks available',
      'In-house tool maintenance',
      'Bulk production supported',
    ],
  },
  {
    title: 'Die Cast Components',
    image: '/assets/products/DieCast.png',
    badge: 'ISO',
    description:
      'Post-machined aluminium and zinc die cast components for industrial and automation assemblies.',
    points: [
      'Post-casting VMC machining',
      'Drilling and tapping',
      'Quality inspection with CMM',
      'Batch production available',
    ],
  },
];

export default function AutomationMachinePartsPage() {
  return (
    <ProductCategoryPage
      metaTitle="Automation & Machine Parts | UMA Metal Craft"
      metaDescription="Tight-tolerance machined and fabricated automation parts for pneumatic systems, CNC machinery and industrial automation applications."
      breadcrumb="Automation & Machine Parts"
      title="Automation & Machine Parts"
      description="Tight-tolerance machined and fabricated automation parts for pneumatic systems, CNC machinery, and industrial automation applications."
      heroImage="/assets/products/auto-hero.png"
      features={[
        { icon: 'iso', label: 'ISO Certified Products' },
        { icon: 'precision', label: 'Tight Tolerances' },
        { icon: 'custom', label: 'Custom Manufacturing' },
        { icon: 'bulk', label: 'Bulk Orders Supported' },
      ]}
      products={products}
      ctaTitle="Need Custom Automation Parts?"
      ctaText="We manufacture precision automation components as per your drawings, samples and technical requirements."
    />
  );
}