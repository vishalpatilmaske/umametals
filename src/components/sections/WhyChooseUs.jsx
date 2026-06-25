import { whyChooseUs } from '../../data/content';
import Reveal from '../Reveal';
import './whyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-layout">

          <Reveal className="why-intro">
            <p className="why-eyebrow">
              <span />
              WHY CHOOSE US
            </p>

            <h2 id="why-heading" className="why-heading">
              Built for Buyers Who
              <br />
              Need More Than a
              <br />
              <span>Standard Part</span>
            </h2>

            <p className="why-lead">
              Industrial procurement demands consistency, communication,
              and components that perform under real-world conditions.
              That is the standard we work toward on every fabrication project.
            </p>

            <div className="why-stats">
              <div>
                <strong>22+</strong>
                <small>Years Experience</small>
              </div>

              <div>
                <strong>300+</strong>
                <small>Happy Clients</small>
              </div>
            </div>
          </Reveal>

          <div className="why-list">
            {whyChooseUs.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 70}
                className="why-item"
              >
                <div className="why-icon" />

                <div className="why-content">
                  <h3 className="why-title">{item.title}</h3>

                  <p className="why-desc">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}