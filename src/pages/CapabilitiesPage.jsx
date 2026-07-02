import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import InnerPageCta from '../components/InnerPageCta';
import Reveal from '../components/Reveal';
import {
  servicesWhyChoose,
  servicesProcess,
  industriesServed,
} from '../data/innerPages';
import { capabilityPages } from '../data/capabilityPages';
import { ArrowRightIcon, DynamicIcon } from '../components/icons/Icons';
import FactoryFloorSection from '../components/FactoryFloorSection';
import './capabilitiesPage.css';

const capabilityIconMap = {
  'cnc-laser-cutting': 'laser',
  'metal-fabrication': 'welder',
  'cnc-machining': 'drill',
  'press-machine-work': 'press',
  'sheet-metal-work': 'sheets',
  'aluminium-fabrication': 'aluminium',
  'die-tool-making': 'mold',
  'machine-job-work': 'gear',
  'surface-finishing': 'shieldCheck',
};

export default function CapabilitiesPage() {
  usePageMeta(
    'CNC Laser Cutting, Metal Fabrication & Machining Services in Nagpur | UMA Metal Craft',
    'From raw sheet to finished component — CNC laser cutting, press brake forming, VMC machining, MIG/TIG welding, die making and machine job work all under one roof.'
  );

  return (
    <>
      <section className="cap-hero">
        <div className="cap-hero__bg">
          <img
            src="/assets/factory-close.jpg"
            alt="UMA Metal Craft manufacturing services"
          />
        </div>
        <div className="cap-hero__overlay" />

        <div className="container cap-hero__inner">
          <Reveal className="cap-hero__content">
            <p className="cap-hero__tag">
              <span /> Nagpur, Maharashtra — Serving All India
            </p>

            <h1>
              Industrial <br />
              <strong>Manufacturing</strong> Services
            </h1>

            <div className="cap-orange-line" />

            <p className="cap-hero__lead">
              From raw sheet to finished component — CNC laser cutting,
              fabrication, machining, press work, sheet metal work, aluminium
              fabrication and die tool making under one roof.
            </p>

            <div className="cap-hero__actions">
              <Link to="/contact" className="cap-btn cap-btn--primary">
                Request Quote <ArrowRightIcon size={15} />
              </Link>

              <Link to="/facilities" className="cap-btn cap-btn--outline">
                View Facility <ArrowRightIcon size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="cap-hero__stats">
            <div className="cap-stat">
              <strong>{capabilityPages.length}+</strong>
              <span>Core Services</span>
            </div>

            <div className="cap-stat">
              <strong>20K</strong>
              <span>Sq. Ft Facility</span>
            </div>

            <div className="cap-stat">
              <strong>24hr</strong>
              <span>RFQ Response</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cap-section">
        <div className="container">
          <Reveal className="cap-section-header">
            <p>
              <span /> Our Capabilities <span />
            </p>
            <h2>
              Complete Manufacturing Support for <strong>B2B Clients</strong>
            </h2>
          </Reveal>

          <div className="cap-services-grid">
            {capabilityPages.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 35}
                className="cap-service-card"
              >
                <span className="cap-service-icon">
                  <DynamicIcon
                    name={capabilityIconMap[service.slug] || 'factory'}
                    size={21}
                  />
                </span>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>

                  <Link to={`/capabilities/${service.slug}`}>
                    View Details <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cap-section cap-section--muted">
        <div className="container">
          <Reveal className="cap-section-header">
            <p>
              <span /> Why B2B Clients Choose UMA <span />
            </p>
            <h2>
              Precision, Scale, and Reliability — <strong>Every Order</strong>
            </h2>
          </Reveal>

          <div className="cap-why-grid">
            {servicesWhyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 40} className="cap-why-card">
                <span>
                  <DynamicIcon name={item.icon} size={21} />
                </span>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cap-process-section">
        <div className="container">
          <Reveal className="cap-section-header cap-section-header--dark">
            <p>
              <span /> Simple &amp; Transparent <span />
            </p>
            <h2>
              How It Works — <strong>RFQ to Delivery</strong>
            </h2>
          </Reveal>

          <div className="cap-process-grid">
            {servicesProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 40} className="cap-process-card">
                <span className="cap-process-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cap-section">
        <div className="container">
          <Reveal className="cap-section-header">
            <p>
              <span /> Sector Experience <span />
            </p>
            <h2>
              Industries <strong>We Serve</strong>
            </h2>
          </Reveal>

          <div className="cap-industry-tags">
            {industriesServed.map((industry, i) => (
              <Reveal key={industry.slug || industry.name} delay={i * 25}>
                <span>{industry.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FactoryFloorSection />

      <InnerPageCta
        title="Need Custom Manufacturing Support?"
        lead="Send us your drawings, dimensions, or production requirement. Our team will review and respond with a quotation."
        primaryLabel="Request a Quote"
      />
    </>
  );
}