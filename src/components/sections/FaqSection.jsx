import {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HeadsetIcon,
} from '../icons/Icons';
import Reveal from '../Reveal';
import './faqSection.css';

const faqItems = [
  {
    question: 'What materials can you laser cut?',
    answer:
      'We laser cut a wide range of materials including mild steel, stainless steel, aluminium, brass, copper, and various alloys. Our CNC laser systems handle sheet thicknesses from 0.5mm to 25mm with precision tolerances of ±0.01mm.',
  },
  {
    question: 'What is your typical lead time?',
    answer:
      'Standard orders typically ship within 3–5 business days. We offer 24-hour express turnaround for urgent requirements. Lead times vary based on complexity, material availability, and current production schedule.',
  },
  {
    question: 'Do you accept small batch orders?',
    answer:
      'Yes, we accommodate both prototype runs and small batch production. Whether you need a single custom part or a run of 50 units, our flexible manufacturing setup accommodates orders of all sizes.',
  },
  {
    question: 'Are you ISO certified?',
    answer:
      'Yes, UMA Metal Craft is ISO 9001:2015 certified. Our quality management system ensures consistent processes, documented procedures, and continuous improvement across all manufacturing operations.',
  },
  {
    question: 'Do you provide CAD design services?',
    answer:
      'We offer CAD design support to help optimize your parts for manufacturing. Our engineering team can review your drawings, suggest design improvements, and create production-ready files from concepts or sketches.',
  },
  {
    question: 'Do you offer delivery?',
    answer:
      'Yes, we provide delivery across Nagpur, Maharashtra, and pan-India shipping for bulk orders. Local pickup is also available from our Hingna manufacturing facility.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="container faq-section__container">
        <div className="faq-section__grid">
          <div className="faq-section__left">
            <Reveal>
              <div className="faq-section__image-wrap">
                <img
                  src="/assets/faq-illustration.png"
                  alt="FAQ support illustration"
                  className="faq-section__image"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="faq-help-card">
                <div className="faq-help-card__icon">
                  <HeadsetIcon size={30} />
                </div>

                <div className="faq-help-card__content">
                  <h3>Still have questions?</h3>
                  <p>
                    Our team is here to help you with any further information.
                  </p>
                </div>

                <Link to="/contact" className="faq-help-card__button">
                  Contact Us
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="faq-section__right">
            <Reveal>
              <p className="faq-section__eyebrow">
                FAQ <span />
              </p>

              <h2 id="faq-heading" className="faq-section__title">
                Frequently Asked Questions
              </h2>

              <p className="faq-section__lead">
                Find answers to common questions about our services, processes,
                and capabilities.
              </p>
            </Reveal>

            <div className="faq-accordion">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <Reveal key={item.question} delay={60 + index * 40}>
                    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                      <button
                        type="button"
                        className="faq-item__trigger"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                        <span>{item.question}</span>

                        <span className="faq-item__chevron">
                          {isOpen ? (
                            <ChevronUpIcon size={20} />
                          ) : (
                            <ChevronDownIcon size={20} />
                          )}
                        </span>
                      </button>

                      <div className="faq-item__answer-wrap">
                        <div className="faq-item__answer-inner">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}