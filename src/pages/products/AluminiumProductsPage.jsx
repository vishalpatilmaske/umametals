import ProductCategoryPage from './ProductCategoryPage';

const products = [
  {
    title: 'Aluminium Plates',
    image: '/assets/products/plate.png',
    badge: 'ISO Certified',
    description: 'High strength aluminium plates available in various thickness and grades.',
    points: ['Thickness: 1mm – 200mm', 'Grade: 1100, 6061, 6063, 5083', 'Custom Cut Sizes', 'Smooth Surface Finish'],
  },
  {
    title: 'Aluminum Sheet',
    image: '/assets/products/sheet.png',
    badge: 'ISO Certified',
    description: 'Premium quality aluminium sheets for industrial and commercial applications.',
    points: ['Thickness: 0.3mm – 10mm', 'Width: 1000mm – 2000mm', 'Multiple Alloy Options', 'Corrosion Resistant'],
  },
  {
    title: 'Aluminum Seedy',
    image: '/assets/products/seedy.png',
    badge: 'ISO Certified',
    description: 'Seedy checker aluminium sheets for flooring and industrial applications.',
    points: ['Pattern: 2 Bar, 3 Bar, 5 Bar', 'Thickness: 1.5mm – 6mm', 'Anti-Slip Surface', 'High Durability'],
  },
  {
    title: 'Aluminium Rolls',
    image: '/assets/products/rools.png',
    badge: 'ISO Certified',
    description: 'High quality aluminium rolls suitable for various industrial processes.',
    points: ['Thickness: 0.2mm – 6mm', 'Width: 500mm – 2000mm', 'Various Core Sizes', 'Excellent Surface Finish'],
  },
  {
    title: 'Aluminum Dhacha',
    image: '/assets/products/dhacha.png',
    badge: 'ISO Certified',
    description: 'Aluminium dhacha for structures, frames, and custom fabrication requirements.',
    points: ['Custom Fabrication', 'Various Section Available', 'High Load Capacity', 'Precision Manufactured'],
  },
];

export default function AluminiumProductsPage() {
  return (
    <ProductCategoryPage
      metaTitle="Aluminium Products | UMA Metal Craft"
      metaDescription="High quality aluminium products for industrial, construction, automotive and engineering applications."
      breadcrumb="Aluminium Products"
      title="Aluminium Products"
      description="High quality aluminium products for industrial, construction, automotive and engineering applications. Precision manufactured with custom sizes and thickness available."
      heroImage="/assets/products/alu-her.jpg"
      heroSplit
      features={[
        { icon: 'iso', label: 'ISO Certified Products' },
        { icon: 'custom', label: 'Custom Sizes Available' },
        { icon: 'precision', label: 'Premium Quality' },
        { icon: 'bulk', label: 'Bulk Orders Supported' },
      ]}
      products={products}
      ctaTitle="Need Custom Aluminium Solutions?"
      ctaText="We provide custom manufacturing as per your drawing, specifications and requirements."
      ctaDark
    />
  );
}