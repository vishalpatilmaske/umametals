import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle, Factory, FileText, Settings, Truck } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import Reveal from '../../components/Reveal';
import InnerPageCta from '../../components/InnerPageCta';
import FaqSection from '../../components/sections/FaqSection';
import BlogPreview from '../../components/sections/BlogPreview';
import { ArrowRightIcon } from '../../components/icons/Icons';
import { getCapabilityBySlug, capabilityPages } from '../../data/capabilityPages';
import './capabilityDetail.css';

const workSteps = [
  {
    icon: FileText,
    title: 'Share Requirement',
    text: 'Send us your drawing, sample, material details or production quantity.',
  },
  {
    icon: Settings,
    title: 'Technical Review',
    text: 'Our team checks feasibility, process requirements and material planning.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    text: 'The job is produced using suitable machines, operators and quality checks.',
  },
  {
    icon: Truck,
    title: 'Dispatch',
    text: 'Finished parts are packed and delivered as per agreed timeline.',
  },
];

export default function CapabilityDetailPage() {
  const { slug } = useParams();
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    return <Navigate to="/capabilities" replace />;
  }

  usePageMeta(capability.metaTitle, capability.metaDescription);

  return (
    <>
      <section className="cap-detail-hero">
        <div className="container cap-detail-hero__inner">
          <div className="cap-detail-hero__content">
            <div className="cap-detail-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/capabilities">Capabilities</Link>
              <span>›</span>
              <span>{capability.title}</span>
            </div>

            <p className="cap-detail-eyebrow">{capability.eyebrow}</p>
            <h1>{capability.title}</h1>
            <p>{capability.description}</p>

            <div className="cap-detail-actions">
              <Link to="/contact" className="cap-detail-btn cap-detail-btn--primary">
                Request Quote <ArrowRightIcon size={15} />
              </Link>
              <Link to="/facilities" className="cap-detail-btn cap-detail-btn--outline">
                View Facility
              </Link>
            </div>
          </div>

          <div className="cap-detail-hero__image">
            <img src={capability.image} alt={capability.title} />
          </div>
        </div>
      </section>

      <section className="cap-detail-section">
        <div className="container cap-detail-overview">
          <Reveal className="cap-detail-overview__left">
            <p className="cap-detail-section-tag">
              <span /> Service Overview
            </p>
            <h2>
              Professional {capability.title} for Industrial Requirements
            </h2>
            <p>{capability.short}</p>
          </Reveal>

          <Reveal delay={80} className="cap-detail-highlight-box">
            {capability.highlights.map((item) => (
              <div key={item}>
                <CheckCircle size={20} />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cap-detail-section cap-detail-section--muted">
        <div className="container">
          <Reveal className="cap-detail-header">
            <p>
              <span /> How We Work <span />
            </p>
            <h2>Clear process from enquiry to delivery</h2>
          </Reveal>

          <div className="cap-detail-process">
            {workSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 45} className="cap-detail-process-card">
                  <span className="cap-detail-process-card__count">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="cap-detail-process-card__icon">
                    <Icon size={24} />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cap-detail-section">
        <div className="container cap-detail-info-grid">
          <Reveal className="cap-detail-info-card">
            <h2>Materials We Handle</h2>
            <p>
              We work with commonly used industrial metals based on project
              requirement, drawing specification and application.
            </p>

            <ul>
              {capability.materials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="cap-detail-info-card">
            <h2>Common Applications</h2>
            <p>
              Our service is suitable for custom components, production jobs and
              industrial fabrication requirements.
            </p>

            <ul>
              {capability.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="cap-detail-section cap-detail-section--dark">
        <div className="container">
          <Reveal className="cap-detail-header cap-detail-header--dark">
            <p>
              <span /> Other Capabilities <span />
            </p>
            <h2>Explore more manufacturing services</h2>
          </Reveal>

          <div className="cap-detail-related">
            {capabilityPages
              .filter((item) => item.slug !== capability.slug)
              .slice(0, 4)
              .map((item) => (
                <Link key={item.slug} to={`/capabilities/${item.slug}`}>
                  <strong>{item.title}</strong>
                  <span>{item.short}</span>
                  <ArrowRightIcon size={14} />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="cap-detail-extra">
        <FaqSection />
        <BlogPreview />
      </section>

      <InnerPageCta
        title={`Need ${capability.title}?`}
        lead="Send us your drawing, sample or production requirement. Our team will review and share the best manufacturing solution."
        primaryLabel="Request a Quote"
      />
    </>
  );
}