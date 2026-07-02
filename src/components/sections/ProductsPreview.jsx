import { Link } from 'react-router-dom';
import { homeProducts } from '../../data/content';
import { ArrowRightIcon, DynamicIcon } from '../icons/Icons';
import Reveal from '../Reveal';
import TrustFeatureBar from '../TrustFeatureBar';

const productRouteMap = {
  'Industrial Components': '/products/industrial-components',
  'Gym Equipment': '/products/gym-equipment',
  'Aluminium Products': '/products/aluminium-products',
  'Automation & Machine Parts': '/products/automation-machine-parts',
  'Metal Sheets & Components': '/products/metal-sheets-components',
  'Tools, Nuts & Bolts': '/products/tools-nuts-bolts',
};

export default function ProductsPreview() {
  return (
    <section className="section products-preview" aria-labelledby="products-heading">
      <div className="container">
        <Reveal className="section-header-block section-header-block--centered">
          <div className="section-header-block__text">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" aria-hidden="true" />
              Our Products
              <span className="section-eyebrow__line" aria-hidden="true" />
            </p>

            <h2 id="products-heading" className="section-title-lg">
              Precision <span className="title-accent">Manufactured</span> Products
            </h2>

            <p className="section-lead">
              High-tolerance industrial components and materials for heavy manufacturing.
            </p>
          </div>
        </Reveal>

        <div className="products-preview__grid">
          {homeProducts.map((product, i) => {
            const productLink = productRouteMap[product.title] || '/products';

            return (
              <Reveal key={product.title} delay={i * 60}>
                <Link to={productLink} className="product-card-v2">
                  <div className="product-card-v2__image">
                    <img src={product.image} alt={product.title} loading="lazy" />
                  </div>

                  <div className="product-card-v2__body">
                    <span className="product-card-v2__icon" aria-hidden="true">
                      <DynamicIcon name={product.icon} size={22} />
                    </span>

                    <div className="product-card-v2__content">
                      <h3 className="product-card-v2__title">{product.title}</h3>
                      <p className="product-card-v2__desc">{product.description}</p>
                    </div>

                    <ArrowRightIcon size={20} className="product-card-v2__arrow" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <TrustFeatureBar />
      </div>
    </section>
  );
}