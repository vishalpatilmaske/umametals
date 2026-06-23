import ProductCategoryPage from './ProductCategoryPage';

const products = [
  {
    title: 'Power Clamps',
    image: '/assets/products/power.png',
    description: 'Heavy duty power clamps for secure holding and high pressure applications.',
    points: ['High Holding Force', 'Precision Fit', 'Heat Treated Components', 'Long Service Life'],
  },
  {
    title: 'Securing Ring',
    image: '/assets/products/secure.png',
    description: 'Durable securing rings for shafts and bores in various industrial applications.',
    points: ['High Durability', 'Corrosion Resistant', 'Strong & Reliable', 'Precision Manufactured'],
  },
  {
    title: 'Sheet Metal End Cap',
    image: '/assets/products/cpas.png',
    description: 'Precision sheet metal end caps for tubing, pipes and structural uses.',
    points: ['Smooth Surface Finish', 'Leak Proof Design', 'Custom Sizes Available', 'Rust & Corrosion Resistant'],
  },
  {
    title: 'U Bracket',
    image: '/assets/products/u-bracket.png',
    description: 'Strong and versatile U brackets for structural and industrial use.',
    points: ['High Strength', 'Various Thickness Options', 'Accurate Dimensions', 'Easy to Install'],
  },
  {
    title: 'Bearing Cap',
    image: '/assets/products/bearing.png',
    description: 'Precision machined bearing caps for smooth operation and long life.',
    points: ['Precision Machined', 'Perfect Alignment', 'Wear & Corrosion Resistant', 'High Load Capacity'],
  },
];

export default function IndustrialComponentsPage() {
  return (
    <ProductCategoryPage
      metaTitle="Industrial Components | UMA Metal Craft"
      metaDescription="High precision industrial components engineered for durability, performance and perfect fit."
      breadcrumb="Industrial Components"
      title="Industrial Components"
      description="High precision industrial components engineered for durability, performance and perfect fit in critical applications across various industries."
      heroImage="/assets/products/ind-hero.png"
      features={[
        { icon: 'iso', label: 'ISO Certified Products' },
        { icon: 'custom', label: 'Custom Sizes Available' },
        { icon: 'precision', label: 'Precision Manufactured' },
        { icon: 'bulk', label: 'Bulk Orders Supported' },
      ]}
      products={products}
      ctaTitle="Need Custom Industrial Components?"
      ctaText="We manufacture custom components as per your drawing, specifications and requirements."
      ctaDark
    />
  );
}