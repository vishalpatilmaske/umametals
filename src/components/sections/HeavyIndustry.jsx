import { heavyIndustryFeatures } from '../../data/content';
import { DynamicIcon } from '../icons/Icons';
import Reveal from '../Reveal';

export default function HeavyIndustry() {
  return (
    <section className="section heavy-industry" aria-labelledby="strength-heading">
      <div className="container">
        <div className="heavy-industry__grid">
          <div>
            <Reveal>
              <p className="section-eyebrow">
                <span className="section-eyebrow__line" aria-hidden="true" />
                Our Strength
              </p>
              <h2 id="strength-heading" className="section-title-lg">
                Built for <span className="title-accent">Heavy Industry</span>
              </h2>
              <p className="section-lead">
                With over two decades of manufacturing excellence, our Nagpur facility delivers
                precision metal fabrication solutions trusted by India&apos;s leading industrial companies.
              </p>
            </Reveal>

            <div className="heavy-industry__features">
              {heavyIndustryFeatures.map((item, i) => (
                <Reveal key={item.title} delay={80 + i * 60} className="heavy-industry__feature">
                  <span className="icon-circle" aria-hidden="true">
                    <DynamicIcon name={item.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="heavy-industry__feature-title">{item.title}</h3>
                    <p className="heavy-industry__feature-desc">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="heavy-industry__visual" delay={120}>
            <div className="heavy-industry__img-main">
              <img src="/assets/heavy1.png" alt="Factory worker operating industrial machinery" loading="lazy" />
            </div>
            <div className="heavy-industry__img-overlay">
              <img src="/assets/heavy2.png" alt="Close-up of precision metal cutting process" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
