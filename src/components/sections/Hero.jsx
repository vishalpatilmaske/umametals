import { Link } from 'react-router-dom';
import { company } from '../../data/content';
import {
  ArrowRightIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '../icons/Icons';
import Reveal from '../Reveal';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, '')}`;

  return (
    <section className="hero-v2" aria-labelledby="hero-heading">
      <div className="hero-v2__bg" aria-hidden="true">
        <img src="/assets/hero-cnc-custom.png" alt="" loading="eager" />
        <div className="hero-v2__overlay" />
      </div>

      <div className="container hero-v2__inner">
        <div className="hero-v2__main">
          <div className="hero-v2__content">
            <Reveal>
              <p className="hero-v2__tag">
                {company.location.toUpperCase()}
                <span>•</span>
                INDUSTRIAL MANUFACTURING
                <span>•</span>
                SINCE {company.established}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 id="hero-heading" className="hero-v2__title">
                Precision CNC
                <br />
                <span>Laser Cutting,</span>
                <br />
                Sheet Metal Work
                <br />
                <span>&amp; Die Tools</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="hero-v2__orange-line" />
              <p className="hero-v2__lead">
                High-precision CNC laser cutting, sheet metal fabrication,
                and die &amp; tools manufacturing solutions for OEMs and
                industrial businesses.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-v2__actions">
                <Link to="/contact" className="hero-btn hero-btn--primary">
                  Get Instant Quote
                  <ArrowRightIcon size={16} />
                </Link>

                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="hero-btn hero-btn--dark"
                >
                  <PhoneIcon size={16} />
                  Call Now
                </a>

                <a
                  href={whatsappUrl}
                  className="hero-btn hero-btn--whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="hero-v2__floating">
          <div className="hero-v2__info-card">
            <div className="hero-v2__card-icon">⌖</div>
            <div>
              <h4>±0.01mm</h4>
              <p>Precision Accuracy</p>
            </div>
          </div>

          <div className="hero-v2__info-card">
            <div className="hero-v2__card-icon">♢</div>
            <div>
              <h4>ISO 9001:2015</h4>
              <p>Certified Company</p>
            </div>
          </div>

          <div className="hero-v2__info-card">
            <div className="hero-v2__card-icon">ϟ</div>
            <div>
              <h4>Fast Turnaround</h4>
              <p>On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}