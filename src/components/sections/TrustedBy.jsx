import { trustedPartners } from '../../data/content';
import Reveal from '../Reveal';

export default function TrustedBy() {
  return (
    <section className="trusted-by" aria-label="Trusted partners">
      <div className="container">
        <Reveal>
          <div className="trusted-by__heading">
            <span className="trusted-by__line" />
            <p className="trusted-by__title">
              Trusted by India’s leading manufacturers
            </p>
            <span className="trusted-by__line" />
          </div>
        </Reveal>

        <div className="trusted-by__logos">
          {trustedPartners.map((partner, i) => (
            <Reveal
              key={partner.name || partner}
              delay={i * 70}
              className="trusted-by__logo-card"
            >
              {typeof partner === 'string' ? (
                <span className="trusted-by__logo-text">{partner}</span>
              ) : (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="trusted-by__logo-img"
                  loading="lazy"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}