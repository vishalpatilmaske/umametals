import { usePageMeta } from '../hooks/usePageMeta';
import Hero from '../components/sections/Hero';
import StatsStrip from '../components/sections/StatsStrip';
import TrustedBy from '../components/sections/TrustedBy';
import HeavyIndustry from '../components/sections/HeavyIndustry';
import CapabilitiesPreview from '../components/sections/CapabilitiesPreview';
import ProductsPreview from '../components/sections/ProductsPreview';
import BlogPreview from '../components/sections/BlogPreview';
import FaqSection from '../components/sections/FaqSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ProductShowcase from '../components/sections/ProductShowcase';

export default function HomePage() {
  usePageMeta(
    'UMA Metal Craft | Precision CNC Laser Cutting — Nagpur, India',
    'UMA Metal Craft — precision CNC laser cutting, sheet metal fabrication, and die & tools manufacturing in Nagpur, India. ISO 9001:2015 certified since 2003.'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'UMA METAL CRAFT',
            description: 'Precision CNC laser cutting, sheet metal fabrication, and die & tools manufacturing',
            foundingDate: '2003',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Hingna',
              addressRegion: 'Maharashtra',
              addressCountry: 'IN',
            },
            areaServed: 'Maharashtra, India',
          }),
        }}
      />
      <Hero />
      <StatsStrip />
      <TrustedBy />
      <HeavyIndustry />
          <CapabilitiesPreview />
      <ProductsPreview />   
      <BlogPreview />
      <FaqSection />
    </>
  );
}
