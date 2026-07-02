import { usePageMeta } from '../hooks/usePageMeta';
import { Link } from 'react-router-dom';
import InnerPageCta from '../components/InnerPageCta';
import Reveal from '../components/Reveal';
import {
  CalendarDays,
  ShieldCheck,
  Users,
  Award,
  Target,
  Timer,
  Factory,
  BarChart3,
  Handshake,
  BadgeCheck,
  Crosshair,
  Cog,
  MapPin,
} from 'lucide-react';
import { aboutMachinery, aboutCertifications } from '../data/innerPages';
import { ArrowRightIcon } from '../components/icons/Icons';
import './aboutPage.css';
import FaqSection from '../components/sections/FaqSection';

const values = [
  {
    icon: Crosshair,
    title: 'Precision Engineering',
    text: 'Every component is manufactured to tight tolerances of ±0.1mm using advanced CNC technology. Accuracy is not optional — it’s our standard.',
  },
  {
    icon: Timer,
    title: 'Fast Turnaround',
    text: 'Standard orders are completed in 3–5 working days. Urgent runs in 24–48 hours because we understand that your production cannot wait.',
  },
  {
    icon: Factory,
    title: 'Modern Manufacturing',
    text: 'State-of-the-art CNC laser cutters, press brakes, VMC machines and welding facilities — all under one roof to deliver superior results.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    text: 'quality-focused inspection at every stage. Our QA team verifies dimensions, surface finish, and material integrity before every dispatch.',
  },
  {
    icon: BarChart3,
    title: 'Scalable Output',
    text: 'From single prototypes to 10,000+ unit production runs, our capacity scales with your demand without compromising on quality.',
  },
  {
    icon: Handshake,
    title: 'Customer Commitment',
    text: 'Transparent communication, on-time delivery, and reliable support. We build long-term partnerships based on trust and performance.',
  },
];

const journey = [
  ['2004', 'The Beginning', 'UMA Metal Craft founded in Nagpur with a single CNC lathe and 2 operators.', Factory],
  ['2008', 'Expanding Capabilities', 'Expanded to 5,000 sq ft facility. Added first CNC press brake and welding bay.', Cog],
  ['2012', 'Quality & Standards', 'Entered automotive supply chain. Established quality control lab and process standards.', Award],
  ['2016', 'Technology Upgrade', 'Installed first fiber laser cutter — capacity doubled and precision improved.', Target],
  ['2020', 'Scaling New Heights', '20,000 sq ft facility inauguration. Added VMC machining center and second laser.', Factory],
  ['2023', 'Wider Presence', '500+ B2B clients. Expanded to serve clients in Bhopal, Mumbai, Pune, and Hyderabad.', MapPin],
];

export default function AboutPage() {
  usePageMeta(
    'About UMA Metal Craft | CNC Laser Cutting & Metal Fabrication, Nagpur',
    "Forging precision since 2004. Central India's trusted industrial manufacturing partner for CNC laser cutting, metal fabrication, and precision machining."
  );

  return (
    <>
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="/assets/about-hero.png" alt="UMA Metal Craft factory" />
        </div>
        <div className="about-hero__overlay" />

        <div className="container about-hero__inner">
          <div className="about-hero__content">
            <p className="about-hero__tag"><span /> Nagpur, Maharashtra, India</p>

            <h1>
              About <br />
              <strong>UMA</strong> Metal Craft
            </h1>

            <div className="about-hero__line" />

            <p className="about-hero__lead">
              Established in <strong>2004</strong>, UMA Metal Craft has been
              delivering precision engineering solutions for over{' '}
              <strong>22 years</strong>. We specialize in CNC laser cutting,
              metal fabrication, and precision machining with a commitment to
              quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="about-hero__stats">
            <div className="about-stat"><CalendarDays /><div><strong>2004</strong><span>Established</span></div></div>
            <div className="about-stat"><ShieldCheck /><div><strong>22+</strong><span>Years of Experience</span></div></div>
            <div className="about-stat"><Users /><div><strong>1000+</strong><span>Happy Customers</span></div></div>
            <div className="about-stat"><Award /><div><strong>Quality</strong><span>Our Commitment</span></div></div>
          </div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="container about-story-grid">
          <Reveal>
            <p className="about-section-tag"><span /> Our Story</p>

            <h2>
              From a Single Machine to Central India&apos;s Leading{' '}
              <strong>Metal Fabricator</strong>
            </h2>

            <div className="about-orange-line" />

            <p className="about-story-lead">
              UMA Metal Craft was founded in 2004 in Nagpur with one mission:
              to provide B2B clients with uncompromising precision in metal
              fabrication. What began as a single CNC lathe and two skilled
              operators has grown into a 20,000 sq ft manufacturing facility
              serving over 500 clients across India.
            </p>

            <div className="about-story-points">
              <div>
                <span><Target /></span>
                <p><strong>Precision is our Promise</strong>We understand that in heavy industry, tolerances are not just numbers on a drawing — they are the difference between a seamless assembly line and a costly shutdown.</p>
              </div>

              <div>
                <span><Cog /></span>
                <p><strong>End-to-End Manufacturing Under One Roof</strong>Today we operate fiber laser cutters, CNC press brakes, VMC machining centers, and a full welding and surface finishing line — all under one roof.</p>
              </div>
            </div>

            <div className="about-story-actions">
              <Link to="/facilities">View Our Facility <ArrowRightIcon size={16} /></Link>
              <Link to="/contact">Talk to Our Team <ArrowRightIcon size={16} /></Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="about-story-image">
            <img src="/assets/about-story.png" alt="UMA Metal Craft operator" />
          </Reveal>
        </div>
      </section>

      {/* <section className="about-values-section">
        <div className="container">
          <Reveal className="about-section-header">
            <p><span /> Why We&apos;re Different <span /></p>
            <h2>
              Our Core Values Drive Every <strong>Weld, Cut, and Bend</strong>
            </h2>
            <small>Built on precision. Driven by commitment. Delivered with pride.</small>
            <i />
          </Reveal>

          <div className="about-values-grid">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 50} className="about-value-card">
                  <span className="about-value-icon"><Icon /></span>
                  <b>{String(index + 1).padStart(2, '0')}</b>
                  <h3>{item.title}</h3>
                  <i />
                  <p>{item.text}</p>
                  <ArrowRightIcon size={20} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section> */}
{/* 
      <section className="section inner-section inner-section--muted">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" />
              State-of-the-Art Equipment
              <span className="section-eyebrow__line" />
            </p>
            <h2 className="section-title-lg">
              Our Manufacturing <span className="title-accent">Machinery</span>
            </h2>
          </Reveal>

          <div className="machinery-grid">
            {aboutMachinery.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="machinery-card">
                <h3 className="machinery-card__title">{item.title}</h3>
                <p className="machinery-card__specs">{item.specs}</p>
                <span className="machinery-card__materials">{item.materials}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      <section className="about-journey-section">
        <div className="container">
          <Reveal className="about-section-header">
            <p><span /> Our Journey <span /></p>
            <h2>
              A Decade of <strong>Growth and Innovation</strong>
            </h2>
            <small>From a small beginning to a trusted manufacturing partner.</small>
            <i />
          </Reveal>

          <div className="journey-timeline">
            {journey.map(([year, title, text, Icon], index) => (
              <Reveal
                key={year}
                delay={index * 50}
                className={`journey-card ${index % 2 === 0 ? 'journey-left' : 'journey-right'}`}
              >
                <div className="journey-year">{year}</div>
                <span className="journey-icon"><Icon /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section inner-section inner-section--dark">
        <div className="container">
          <Reveal className="section-header-block section-header-block--centered">
            <p className="section-eyebrow section-eyebrow--centered">
              <span className="section-eyebrow__line" />
              Quality &amp; Compliance
              <span className="section-eyebrow__line" />
            </p>

            <h2 className="section-title-lg" style={{ color: '#fff' }}>
              Reliable and <span className="title-accent">Trusted</span>
            </h2>
          </Reveal>

          <div className="cert-grid">
            {aboutCertifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 60} className="cert-card">
                <strong className="cert-card__title">{cert.title}</strong>
                <span className="cert-card__subtitle">{cert.subtitle}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection/>

      <InnerPageCta
        title="Ready to Work With Us?"
        lead="Send us your technical drawings and let our engineering team provide a detailed quotation within 24 hours."
        primaryLabel="Request a Quote"
      />
    </>
  );
}