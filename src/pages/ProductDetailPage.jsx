import { Link, useParams } from 'react-router-dom';
import {
  ShieldCheck,
  Settings,
  Package,
  Truck,
  Phone,
  MessageCircle,
  FileText,
  Box,
  Clock,
  Tag,
  Layers,
  Ruler,
  Thermometer,
  Grid2X2,
  CheckCircle,
  Award,
  Factory,
  Users,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { umaProducts } from '../data/umaProduct';
        import FaqSection from '../components/sections/FaqSection';
import './productDetailPage.css';

const specIcons = {
  material: Layers,
  standard: ShieldCheck,
  thickness: Ruler,
  width: Ruler,
  length: Ruler,
  density: Box,
  'surface finish': Sparkles,
  tolerance: ShieldCheck,
  'temperature range': Thermometer,
  applications: Grid2X2,
};

const badgeIcons = [ShieldCheck, Settings, Package, Truck];

export default function ProductDetailPage() {
  const { slug } = useParams();

  const product =
    umaProducts.find((item) => item.slug === slug) || umaProducts[0];

  const related = product.relatedProducts
    .map((item) => umaProducts.find((p) => p.slug === item.slug) || item)
    .filter(Boolean);

  return (
    <main className="product-detail-page">
      <section className="pdp-hero">
        <div className="pdp-container pdp-hero__inner">
          <div className="pdp-hero__content">
            <div className="pdp-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} />
              <Link to="/products">Products</Link>
              <ChevronRight size={14} />
              <span>{product.title}</span>
            </div>

            <div className="pdp-hero__tag">★ {product.hero.badge}</div>

            <p className="pdp-eyebrow">{product.hero.categoryLabel}</p>

            <h1>{product.hero.title}</h1>

            <p className="pdp-subtitle">{product.hero.subtitle}</p>

            <div className="pdp-badges">
              {product.hero.badges.map((badge, index) => {
                const Icon = badgeIcons[index] || ShieldCheck;

                return (
                  <div className="pdp-badge-item" key={badge}>
                    <Icon size={22} />
                    <span>{badge}</span>
                  </div>
                );
              })}
            </div>

            <div className="pdp-info-strip">
              <div>
                <Box />
                <span>MOQ</span>
                <strong>{product.hero.moq}</strong>
              </div>

              <div>
                <Clock />
                <span>Lead Time</span>
                <strong>{product.hero.leadTime}</strong>
              </div>

              <div>
                <Tag />
                <span>Customization</span>
                <strong>{product.hero.customization}</strong>
              </div>
            </div>

            <div className="pdp-actions">
              <a href="tel:+919876543210" className="pdp-btn pdp-btn--light">
                <Phone size={17} />
                Call Now
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="pdp-btn pdp-btn--whatsapp"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

              <Link to="/contact" className="pdp-btn pdp-btn--orange">
                <FileText size={17} />
                Request Quote
              </Link>
            </div>
          </div>

          <div className="pdp-hero__visual">
            <div className="pdp-hero__image">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="pdp-hero__float pdp-hero__float--top">
              <ShieldCheck size={20} />
              <span>Precision Built</span>
            </div>

            <div className="pdp-hero__float pdp-hero__float--bottom">
              <Truck size={20} />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pdp-section pdp-overview-section">
        <div className="pdp-container">
          <div className="pdp-overview-card">
            <div>
              <p className="pdp-section-label">{product.overview.heading}</p>
              <h2>Premium {product.title} for Industrial Use</h2>
            </div>

            <p>{product.overview.description}</p>
          </div>
        </div>
      </section>

      <section className="pdp-section pdp-spec-section">
        <div className="pdp-container">
          <div className="pdp-section-head">
            <p className="pdp-section-label">Technical Specifications</p>
            <h2>
              Built with Precision. <span>Backed by Standards.</span>
            </h2>
            <p>
              Manufactured to exact specifications for strength, durability and
              reliable industrial performance.
            </p>
          </div>

          <div className="pdp-spec-grid">
            {product.specifications.map((spec) => {
              const Icon = specIcons[spec.label.toLowerCase()] || CheckCircle;

              return (
                <div className="pdp-spec-card" key={spec.label}>
                  <div className="pdp-spec-icon">
                    <Icon size={21} />
                  </div>

                  <strong>{spec.label}</strong>
                  <p>{spec.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pdp-section pdp-process-section">
        <div className="pdp-container">
          <div className="pdp-section-head">
            <p className="pdp-section-label">Manufacturing Process</p>
            <h2>Our Manufacturing Process</h2>
            <p>
              Precision, technology and quality come together to deliver
              superior {product.title.toLowerCase()}.
            </p>
          </div>

          <div className="pdp-process-list">
            {product.manufacturingProcess.map((step) => (
              <div className="pdp-process-row" key={step.step}>
                <div className="pdp-process-number">{step.step}</div>

                <div className="pdp-process-card">
                  <div className="pdp-process-icon">
                    <Factory size={28} />
                  </div>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <span>{step.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pdp-dark-band">
            <div className="pdp-dark-band__icon">
              <ShieldCheck size={38} />
            </div>

            <div>
              <small>OUR COMMITMENT</small>
              <h3>Quality. Precision. Reliability.</h3>
              <p>
                Manufactured to meet international standards and customer
                expectations.
              </p>
            </div>

            <div className="pdp-dark-band__cert">
              <Award size={30} />
              <div>
                <h3>Quality</h3>
                <p>Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pdp-section pdp-why-section">
        <div className="pdp-container">
          <div className="pdp-section-head">
            <p className="pdp-section-label">Why Choose</p>
            <h2>
              Why Choose <span>UMA</span> Metal Craft
            </h2>
            <p>
              Reliable manufacturing, strict quality control and custom
              engineering support.
            </p>
          </div>

          <div className="pdp-why-grid">
            {product.whyChoose.map((item) => (
              <div className="pdp-why-card" key={item.number}>
                <span>{item.number}</span>

                <div className="pdp-why-icon">
                  <CheckCircle size={32} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pdp-stats-band">
            <div className="pdp-stats-intro">
              <h3>Built on Trust. Driven by Quality.</h3>
              <p>
                Long-term relationships through transparency, reliability and
                consistent quality.
              </p>
            </div>

            {product.stats.map((stat) => (
              <div className="pdp-stat" key={stat.label}>
                <Users size={22} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pdp-section pdp-related-section">
        <div className="pdp-container">
          <div className="pdp-section-head">
            <p className="pdp-section-label">Related Products</p>
            <h2>
              {product.category.split(' ')[0]} <span>Products</span>
            </h2>
          </div>

          <div className="pdp-related-grid">
            {related.map((item) => (
              <Link
                to={`/products/${item.categorySlug || product.categorySlug}/${item.slug}`}
                className="pdp-related-card"
                key={item.slug}
              >
                <img src={item.image || product.image} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description || item.hero?.subtitle}</p>

                  <span>
                    View More
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
  
            <FaqSection/>
    </main>
  );
}