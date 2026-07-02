import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import InnerPageCta from '../components/InnerPageCta';
import Reveal from '../components/Reveal';
import MaterialsSection from '../components/MaterialsSection';
import FactoryFloorSection from '../components/FactoryFloorSection';
import { productPageItems, productsWhyChoose } from '../data/innerPages';
import { ArrowRightIcon, DynamicIcon } from '../components/icons/Icons';
import FaqSection from '../components/sections/FaqSection';
import './productsPage.css';

const productRouteMap = {
  'Industrial Components': '/products/industrial-components',
  'Gym Equipment': '/products/gym-equipment',
  'Aluminium Products': '/products/aluminium-products',
  'Automation & Machine Parts': '/products/automation-machine-parts',
  'Metal Sheets & Components': '/products/metal-sheets-components',
  'Tools, Nuts & Bolts': '/products/tools-nuts-bolts',
};

export default function ProductsPage() {
  usePageMeta(
    'Industrial Metal Products | CNC Laser Cut Components, Aluminium, Steel | UMA Metal Craft Nagpur',
    'Precision-manufactured components, sheets, and assemblies for B2B industrial clients across India. CNC laser cut, machined, and fabricated to your exact specifications.'
  );

  return (
    <>
      <section className="products-hero">
        <div className="products-hero__bg">
          <img
            src="/assets/products/products-hero.png"
            alt="Industrial Metal Products"
            className="products-hero__image"
          />
        </div>

        <div className="products-hero__overlay" />

        <div className="container products-hero__inner">
          <div className="products-hero__content">
            <p className="products-hero__tag">
              <span />
              Made in Nagpur, India
            </p>

            <h1 className="products-hero__title">
              Industrial <br />
              <strong>Metal</strong> Products
            </h1>

            <p className="products-hero__lead">
              Precision-manufactured components, sheets, and assemblies for B2B
              industrial clients across India. CNC laser cut, machined, and
              fabricated to your exact specifications.
            </p>

            <div className="products-hero__actions">
              <Link
                to="/contact"
                className="products-hero__btn products-hero__btn--primary"
              >
                Request a Quote
                <ArrowRightIcon size={18} />
              </Link>

              <a
                href="#product-range"
                className="products-hero__btn products-hero__btn--outline"
              >
                Explore Products
                <ArrowRightIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="product-range" className="section inner-section">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Product Categories
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>

            <h2 className="section-title-lg">
              Browse Our <span className="title-accent">Product Range</span>
            </h2>

            <p className="section-lead">
              Each product is manufactured to order — custom dimensions,
              tolerances, and material grades available on all categories.
            </p>
          </Reveal>

          <div className="products-page-grid">
            {productPageItems.map((product, i) => {
              const productLink = productRouteMap[product.title] || '/products';

              return (
                <Reveal
                  key={product.title}
                  delay={i * 60}
                  className="product-page-card"
                >
                  <div className="product-page-card__image">
                    <img src={product.image} alt={product.title} loading="lazy" />
                    <span className="product-page-card__badge">Quality Grade</span>
                  </div>

                  <div className="product-page-card__body">
                    <span className="product-page-card__icon" aria-hidden="true">
                      <DynamicIcon name={product.icon} size={22} />
                    </span>

                    <h3 className="product-page-card__title">
                      {product.title}
                    </h3>

                    <p className="product-page-card__desc">
                      {product.description}
                    </p>

                    <Link to={productLink} className="product-page-card__link">
                      View Specifications
                      <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <MaterialsSection />

      <section className="section inner-section">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Quality You Can Trust
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>

            <h2 className="section-title-lg">
              Why Choose <span className="title-accent">UMA Metal Craft?</span>
            </h2>
          </Reveal>

          <div className="feature-cards">
            {productsWhyChoose.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 50}
                className="feature-card"
              >
                <span className="feature-card__icon" aria-hidden="true">
                  <DynamicIcon name={item.icon} size={24} />
                </span>

                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__desc">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FactoryFloorSection />

      <FaqSection />

      <InnerPageCta
        title="Looking for a Specific Product?"
        lead="Submit your drawings and quantity. We'll send back a competitive per-part quote within 24 hours — no commitment required."
        primaryLabel="Submit Your RFQ"
      />
    </>
  );
}