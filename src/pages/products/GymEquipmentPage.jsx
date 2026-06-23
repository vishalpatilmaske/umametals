import ProductCategoryPage from './ProductCategoryPage';

const products = [
  {
    title: 'Gym Stand',
    image: '/assets/products/gym-stand.png',
    description: 'Heavy-duty gym stands for squats, bench press and multiple exercises.',
    points: ['High Load Capacity', 'Sturdy Steel Construction', 'Powder Coated Finish', 'Easy to Assemble'],
  },
  {
    title: 'Dumbbell Rack Stand',
    image: '/assets/products/dumbbell-rack.png',
    description: 'Durable and compact rack stand for organized dumbbell storage.',
    points: ['Multiple Capacity Options', 'Stable & Strong Design', 'Space Saving', 'Corrosion Resistant'],
  },
  {
    title: 'Barbell Holder Stand',
    image: '/assets/products/barbell-holder.png',
    description: 'Secure barbell storage stand for gym and fitness centers.',
    points: ['Multiple Bar Storage', 'Heavy Duty Frame', 'Anti-Slip Base', 'Premium Finish'],
  },
  {
    title: 'Weight Plate Tree Stand',
    image: '/assets/products/weight-plate-tree.png',
    description: 'Organize weight plates efficiently with our plate tree stand.',
    points: ['Heavy Load Capacity', 'Compact & Space Saving', 'Easy Plate Access', 'Strong Steel Build'],
  },
  {
    title: 'Multi-purpose Gym Frame',
    image: '/assets/products/gym-frame.png',
    description: 'Versatile multi-gym frame for full body workouts and training.',
    points: ['Multi Exercise Support', 'Heavy Duty Steel Frame', 'Customizable Attachments', 'Commercial Grade Quality'],
  },
];

export default function GymEquipmentPage() {
  return (
    <ProductCategoryPage
      metaTitle="Gym Equipment | UMA Metal Craft"
      metaDescription="Strong, reliable and precision engineered gym equipment for commercial and home fitness setups."
      breadcrumb="Gym Equipment"
      title="Gym Equipment"
      description="Strong, reliable & precision engineered gym equipment for commercial and home fitness setups. Built with high quality materials for maximum strength, durability and safety."
      heroImage="/assets/products/gym-equipment.jpg"
      features={[
        { icon: 'iso', label: 'High Strength Construction' },
        { icon: 'precision', label: 'Powder Coated Finish' },
        { icon: 'custom', label: 'Custom Sizes Available' },
        { icon: 'bulk', label: 'Bulk Orders Supported' },
      ]}
      products={products}
      ctaTitle="Looking For Custom Gym Equipment?"
      ctaText="We manufacture custom gym equipment as per your requirements. Bulk orders and OEM available."
      ctaDark={false}
    />
  );
}