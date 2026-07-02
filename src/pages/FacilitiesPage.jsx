import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import InnerPageCta from '../components/InnerPageCta';
import Reveal from '../components/Reveal';
import { aboutMachinery, facilityHighlights } from '../data/innerPages';
import { ArrowRightIcon } from '../components/icons/Icons';
import './facilitiesPage.css';

export default function FacilitiesPage() {
  usePageMeta(
    'Manufacturing Facility | UMA Metal Craft — Nagpur',
    'Tour our 20,000 sq ft Nagpur manufacturing facility — fibre laser cutters, CNC press brakes, VMC machining centres, and advanced welding stations.'
  );

  return (
    <>
      <section className="facility-hero">
        <div className="facility-hero__bg">
          <img
            src="/assets/factory-wide.jpg"
            alt="UMA Metal Craft manufacturing facility"
          />
        </div>
        <div className="facility-hero__overlay" />

        <div className="container facility-hero__inner">
          <Reveal className="facility-hero__content">
            <p className="facility-hero__tag">
              <span /> Nagpur, Maharashtra, India
            </p>

            <h1>
              Our Manufacturing <br />
              <strong>Facility</strong>
            </h1>

            <div className="facility-orange-line" />

            <p className="facility-hero__lead">
              A 20,000 sq ft state-of-the-art facility housing fibre laser
              cutters, CNC press brakes, VMC machining centres, welding bays
              and surface finishing capabilities.
            </p>

            <div className="facility-hero__actions">
              <Link to="/contact" className="facility-btn facility-btn--primary">
                Schedule Visit <ArrowRightIcon size={15} />
              </Link>

              <Link to="/capabilities" className="facility-btn facility-btn--outline">
                View Capabilities <ArrowRightIcon size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="facility-hero__stats">
            <div className="facility-stat">
              <strong>20K</strong>
              <span>Sq. Ft Facility</span>
            </div>

            <div className="facility-stat">
              <strong>CNC</strong>
              <span>Advanced Machinery</span>
            </div>

            <div className="facility-stat">
              <strong>QC</strong>
              <span>Inspection Process</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="facility-section">
        <div className="container">
          <Reveal className="facility-section-header">
            <p>
              <span /> Factory Floor <span />
            </p>
            <h2>
              Built for Precision <strong>Manufacturing</strong>
            </h2>
          </Reveal>

          <div className="facility-gallery">
            <Reveal className="facility-gallery__main">
              <img
                src="/assets/factory-wide.jpg"
                alt="Wide view of UMA Metal Craft factory floor"
                loading="lazy"
              />
            </Reveal>

            <div className="facility-gallery__side">
              <Reveal delay={80}>
                <img
                  src="/assets/factory-close.jpg"
                  alt="Close-up of CNC manufacturing equipment"
                  loading="lazy"
                />
              </Reveal>

              <Reveal delay={120}>
                <img
                  src="/assets/hero-cnc.jpg"
                  alt="CNC laser cutting in operation"
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="facility-section facility-section--muted">
        <div className="container">
          <Reveal className="facility-section-header">
            <p>
              <span /> On the Factory Floor <span />
            </p>
            <h2>
              Facility <strong>Highlights</strong>
            </h2>
          </Reveal>

          <div className="facility-highlight-grid">
            {facilityHighlights.map((item, i) => (
              <Reveal key={item} delay={i * 35} className="facility-highlight-card">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="facility-process-section">
        <div className="container">
          <Reveal className="facility-section-header facility-section-header--dark">
            <p>
              <span /> Equipment <span />
            </p>
            <h2>
              Manufacturing <strong>Machinery</strong>
            </h2>
          </Reveal>

          <div className="facility-machinery-grid">
            {aboutMachinery.map((item, i) => (
              <Reveal key={item.title} delay={i * 45} className="facility-machinery-card">
                <span className="facility-machinery-step">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3>{item.title}</h3>
                <p>{item.specs}</p>
                <strong>{item.materials}</strong>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="facility-center-action">
              <Link to="/contact" className="facility-btn facility-btn--primary">
                Schedule a Facility Visit
                <ArrowRightIcon size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="facility-section">
        <div className="container facility-split">
          <Reveal className="facility-split__content">
            <p className="facility-section-tag">
              <span /> Production Ready
            </p>

            <h2>
              Designed for Bulk, Custom and <strong>Repeat Orders</strong>
            </h2>

            <div className="facility-orange-line" />

            <p>
              Our facility supports multiple manufacturing stages under one roof,
              reducing coordination delays and improving quality control across
              every job.
            </p>

            <ul>
              <li>Dedicated areas for cutting, bending, machining and welding</li>
              <li>Suitable for prototypes, small batches and recurring orders</li>
              <li>Inspection-led process before dispatch</li>
              <li>Central India location for convenient logistics</li>
            </ul>

            <Link to="/contact" className="facility-btn facility-btn--primary">
              Request a Quote <ArrowRightIcon size={15} />
            </Link>
          </Reveal>

          <Reveal delay={100} className="facility-split__image">
            <img
              src="/assets/factory-close.jpg"
              alt="UMA Metal Craft production area"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <InnerPageCta
        title="Ready to See Our Capabilities in Action?"
        lead="Send us your drawings for a detailed quote, or contact us to arrange a facility tour."
        primaryLabel="Request a Quote"
      />
    </>
  );
}