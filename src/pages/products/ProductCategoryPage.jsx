import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import { ArrowRightIcon, DynamicIcon } from '../../components/icons/Icons';
import FaqSection from '../../components/sections/FaqSection';
import BlogPreview from '../../components/sections/BlogPreview';
import './productCategory.css';

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

const categorySlugMap = {
  'Industrial Components': 'industrial-components',
  'Gym Equipment': 'gym-equipment',
  'Aluminium Products': 'aluminium-products',
  'Automation & Machine Parts': 'automation-machine-parts',
  'Metal Sheets & Components': 'metal-sheets-components',
  'Tools, Nuts & Bolts': 'tools-nuts-bolts',
};

const makeSlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

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

  const categorySlug = categorySlugMap[breadcrumb] || makeSlug(breadcrumb || title);

  return (
    <>
      <section className="product-cat-hero">
        <div className="product-cat-hero__bg">
          <img src={heroImage} alt={title} />
        </div>
        <div className="product-cat-hero__overlay" />

        <div className="container product-cat-hero__inner">
          <div className="product-cat-hero__content">
            <div className="product-cat-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/products">Products</Link>
              <span>›</span>
              <span>{breadcrumb}</span>
            </div>

            <p className="product-cat-hero__tag">
              <span /> Our Products
            </p>

            <h1>{title}</h1>

            <div className="product-cat-orange-line" />

            <p className="product-cat-hero__lead">{description}</p>

            <div className="product-cat-features">
              {features.map((feature) => (
                <div key={feature.label} className="product-cat-feature">
                  <DynamicIcon
                    name={iconMap[feature.icon] || 'shieldCheck'}
                    size={22}
                  />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-cat-hero__stats">
            <div>
              <strong>{products.length}+</strong>
              <span>Products</span>
            </div>
            <div>
              <strong>Custom</strong>
              <span>Sizes Available</span>
            </div>
            <div>
              <strong>24hr</strong>
              <span>Quote Response</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cat-section">
        <div className="container">
          <div className="product-cat-section-header">
            <p>
              <span /> Product Range <span />
            </p>
            <h2>
              Explore Our <strong>{breadcrumb}</strong>
            </h2>
          </div>

          <div className="product-cat-grid">
            {products.map((product) => {
              const productSlug = product.slug || makeSlug(product.title);

              return (
                <article key={product.title} className="product-cat-card">
                  <div className="product-cat-card__image">
                    <img src={product.image} alt={product.title} loading="lazy" />
                  </div>

                  <div className="product-cat-card__body">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>

                    <ul>
                      {(product.points || []).map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <Link
                      to={`/products/${categorySlug}/${productSlug}`}
                      className="product-cat-card__btn"
                    >
                      View Details
                      <ArrowRightIcon size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="product-cat-cta">
            <div className="product-cat-cta__main">
              <span>
                <DynamicIcon name="document" size={30} />
              </span>

              <div>
                <h2>{ctaTitle}</h2>
                <p>{ctaText}</p>
              </div>
            </div>

            <div className="product-cat-cta__features">
              <div>
                <DynamicIcon name="headset" size={24} />
                <strong>Expert Support</strong>
                <span>Get professional advice</span>
              </div>

              <div>
                <DynamicIcon name="clockFast" size={24} />
                <strong>Quick Response</strong>
                <span>We reply within 24 hours</span>
              </div>

              <div>
                <DynamicIcon name="shieldCheck" size={24} />
                <strong>Best Quality</strong>
                <span>100% quality assured</span>
              </div>
            </div>

            <div className="product-cat-cta__actions">
              <Link to="/contact" className="product-cat-btn product-cat-btn--primary">
                Request Custom Quote
                <ArrowRightIcon size={15} />
              </Link>

              <Link to="/contact" className="product-cat-btn product-cat-btn--outline">
                <DynamicIcon name="upload" size={17} />
                Upload Drawing
              </Link>
            </div>
          </div>
        </div>

        <FaqSection />
        <BlogPreview />
      </section>
    </>
  );
}