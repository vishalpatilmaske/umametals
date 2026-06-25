import {Link} from 'react-router-dom';
import {capabilityServices} from '../../data/content';
import {ArrowRightIcon, DynamicIcon, GridIcon} from '../icons/Icons';
import Reveal from '../Reveal';
import TrustFeatureBar from '../TrustFeatureBar';
import './capabilitiesPreview.css';

export default function CapabilitiesPreview() {
  return (
    <section
      className="capabilities-preview-dark"
      aria-labelledby="capabilities-heading">
      <div className="container">
        <Reveal className="capabilities-preview-dark__header">
          <div>
            <p className="capabilities-preview-dark__eyebrow">
              <span aria-hidden="true" />
              Our Capabilities
            </p>

            <h2
              id="capabilities-heading"
              className="capabilities-preview-dark__title">
              Industrial <span>Capabilities</span>
            </h2>

            <p className="capabilities-preview-dark__lead">
              Complete end-to-end metal manufacturing capabilities under one
              roof.
            </p>
          </div>

          <Link to="/capabilities" className="capabilities-preview-dark__btn">
            <GridIcon size={18} />
            View All Services
            <ArrowRightIcon size={16} />
          </Link>
        </Reveal>

        <div className="capabilities-preview-dark__grid">
          {capabilityServices.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 50}
              className="capability-dark-card">
              <div className="capability-dark-card__image">
                <img src={service.image} alt={service.title} loading="lazy" />

                <span className="capability-dark-card__icon" aria-hidden="true">
                  <DynamicIcon name={service.icon} size={22} />
                </span>
              </div>

              <div className="capability-dark-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link to="/capabilities" className="capability-dark-card__link">
                  Explore specs
                  <ArrowRightIcon size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="capabilities-preview-dark__trust">
          <TrustFeatureBar />
        </div>
      </div>
    </section>
  );
}