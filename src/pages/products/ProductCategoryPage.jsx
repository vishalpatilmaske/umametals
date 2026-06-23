import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import './productCategory.css';
import { ArrowRightIcon, DynamicIcon } from '../../components/icons/Icons';

const iconMap = {
  iso: 'shieldCheck',
  custom: 'ruler',
  precision: 'award',
  bulk: 'briefcase',
  support: 'headset',
  clock: 'clockFast',
  tag: 'target',
  upload: 'document',
};

export default function ProductCategoryPage({
  metaTitle,
  metaDescription,
  breadcrumb,
  title,
  description,
  heroImage,
  features = [],
  products = [],
  ctaTitle,
  ctaText,
}) {
  usePageMeta(metaTitle, metaDescription);

  return (
    <>
      <section className="product-hero-screen">
        <div className="container product-hero-screen__inner">
          <div className="product-hero-screen__content">
            <div className="product-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products">Products</Link>
              <span>›</span>
              <span>{breadcrumb}</span>
            </div>

            <p className="product-hero-screen__eyebrow">Our Products</p>
            <h1>{title}</h1>
            <p className="product-hero-screen__desc">{description}</p>

            <div className="product-hero-features">
              {features.map((feature) => (
                <div key={feature.label} className="product-hero-feature">
                  <DynamicIcon
                    name={iconMap[feature.icon] || 'shieldCheck'}
                    size={34}
                  />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-hero-screen__image">
            <img src={heroImage} alt={title} />
          </div>
        </div>
      </section>

      <section className="product-list-section">
        <div className="container">
          <div className="screenshot-product-grid">
            {products.map((product) => (
              <article key={product.title} className="screenshot-product-card">
                <div className="screenshot-product-card__image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>

                <div className="screenshot-product-card__body">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>

                  <ul>
                    {product.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <Link to="/contact" className="screenshot-product-card__btn">
                    View Details
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="product-bottom-cta">
            <div className="product-bottom-cta__main">
              <div className="product-bottom-cta__icon">
                <DynamicIcon name="document" size={34} />
              </div>

              <div>
                <h2>{ctaTitle}</h2>
                <p>{ctaText}</p>
              </div>
            </div>

            <div className="product-bottom-cta__features">
              <div>
                <DynamicIcon name="headset" size={26} />
                <strong>Expert Support</strong>
                <span>Get professional advice</span>
              </div>

              <div>
                <DynamicIcon name="clockFast" size={26} />
                <strong>Quick Response</strong>
                <span>We reply within 24 hours</span>
              </div>

              <div>
                <DynamicIcon name="shieldCheck" size={26} />
                <strong>Best Quality</strong>
                <span>100% quality assured</span>
              </div>
            </div>

            <div className="product-bottom-cta__actions">
              <Link to="/contact" className="btn btn--primary">
                Request Custom Quote
                <ArrowRightIcon size={16} />
              </Link>

              <Link to="/contact" className="btn btn--ghost product-upload-btn">
                <DynamicIcon name="upload" size={18} />
                Upload Drawing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}