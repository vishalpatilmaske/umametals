import { usePageMeta } from '../hooks/usePageMeta';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { company } from '../data/content';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Target,
  Users,
  Timer,
  Settings,
  Headphones,
} from 'lucide-react';
import FaqSection from '../components/sections/FaqSection';
import './contactPage.css';

const contactItems = [
  {
    icon: Phone,
    title: 'Phone',
    text: company.phone,
    href: `tel:${company.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    title: 'Email',
    text: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    title: 'Factory Address',
    text: 'MIDC, Amar Nagar, Hingna, Wanadongri, Maharashtra 441110, India',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    text: 'Mon – Sat  |  9:00 AM – 7:00 PM',
  },
];

const whyChoose = [
  {
    icon: Award,
    title: '22+ Years of Experience',
    text: 'Over two decades of industry expertise delivering precision engineering solutions.',
    image: '/assets/img1.png',
  },
  {
    icon: Target,
    title: 'Precision Manufacturing',
    text: 'Advanced technology and skilled craftsmanship ensure high accuracy and consistency.',
    image: '/assets/img2.png',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    text: 'Stringent quality checks at every stage to meet the highest industry standards.',
    image: '/assets/img3.png',
  },
  {
    icon: Users,
    title: 'Customer Centric Approach',
    text: 'We understand your needs and deliver solutions that create lasting value.',
    image: '/assets/img4.png',
  },
];

const bottomFeatures = [
  [ShieldCheck, 'Reliable & Trusted'],
  [Timer, 'On-time Delivery'],
  [Settings, 'Custom Solutions'],
  [Headphones, 'Dedicated Support'],
];

export default function ContactPage() {
  usePageMeta(
    'Contact Us & Request Quote | UMA Metal Craft',
    'Send us your manufacturing requirements, CAD files, or technical queries. Our engineering team responds within 24 hours.'
  );

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <img src="/assets/contact-hero.png" alt="Contact UMA Metal Craft" />
        </div>
        <div className="contact-hero__overlay" />

        <div className="container contact-hero__inner">
          <Reveal className="contact-hero__content">
            <p className="contact-hero__tag">
              <span /> Get In Touch
            </p>

            <h1>
              Contact <br />
              <strong>UMA Metal Craft</strong>
            </h1>

            <div className="contact-orange-line" />

            <p className="contact-hero__lead">
              Have a manufacturing requirement? Our engineering team is ready
              to help you with the right solution.
            </p>
          </Reveal>

          <Reveal delay={100} className="contact-hero__stats">
            <div className="contact-stat">
              <strong>24hr</strong>
              <span>Response Time</span>
            </div>

            <div className="contact-stat">
              <strong>22+</strong>
              <span>Years Experience</span>
            </div>

            <div className="contact-stat">
              <strong>All India</strong>
              <span>Service Support</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container contact-main-grid">
          <Reveal className="contact-info-panel">
            <p className="contact-section-tag">
              <span /> Let&apos;s Connect
            </p>

            <h2>Get In Touch</h2>

            <p className="contact-info-lead">
              Share your drawings, project details, quantity, or technical query.
              Our team will review and respond with the right manufacturing
              solution.
            </p>

            <div className="contact-info-list">
              {contactItems.map(({ icon: Icon, title, text, href }) => (
                <div className="contact-info-item" key={title}>
                  <span>
                    <Icon />
                  </span>

                  <div>
                    <h3>{title}</h3>
                    {href ? <a href={href}>{text}</a> : <p>{text}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-time-card">
              <span>
                <ShieldCheck />
              </span>

              <div>
                <h3>We value your time</h3>
                <p>Our team responds to all inquiries within 24 business hours.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="contact-form-card">
            <ContactForm submitLabel="Send Inquiry" />
          </Reveal>
        </div>
      </section>

      <section className="contact-why-section">
        <div className="container">
          <Reveal className="contact-section-header">
            <p>
              <span /> Why Choose UMA <span />
            </p>

            <h2>
              Reliable Manufacturing <strong>Partner</strong>
            </h2>

            <small>
              We combine experience, precision, and quality to deliver
              manufacturing solutions you can rely on.
            </small>
          </Reveal>

          <div className="contact-why-grid">
            {whyChoose.map(({ icon: Icon, title, text, image }, index) => (
              <Reveal delay={index * 60} className="contact-why-card" key={title}>
                <div className="contact-why-card__image">
                  <img src={image} alt={title} loading="lazy" />
                </div>

                <div className="contact-why-card__body">
                  <span className="contact-why-icon">
                    <Icon />
                  </span>

                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="contact-feature-row">
            {bottomFeatures.map(([Icon, label]) => (
              <div key={label}>
                <Icon />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <FaqSection />
      </section>
    </>
  );
}