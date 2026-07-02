import { Link } from 'react-router-dom';
import { company, productCategories } from '../data/content';
import Logo from './Logo';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa';
import {
  GiLaserPrecision,
  GiMetalBar,
  GiMechanicalArm,
} from 'react-icons/gi';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { TbTools } from 'react-icons/tb';
import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    ['CNC Laser Cutting', GiLaserPrecision],
    ['Metal Fabrication', GiMetalBar],
    ['CNC Machining', GiMechanicalArm],
    ['Press Machine Work', MdOutlinePrecisionManufacturing],
    ['Aluminium Fabrication', TbTools],
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="UMA Metal Craft">
              <Logo />
            </Link>

            <p>
              Precision CNC laser cutting, sheet metal fabrication, and die
              tools manufacturing — built for strength, fit, and long-term
              performance since {company.established}.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Services', '/capabilities'],
                ['Facilities', '/facilities'],
                ['Products', '/products'],
                ['Blog', '/blog'],
                ['Contact', '/contact'],
              ].map(([label, path]) => (
                <li key={label}>
                  <FaArrowRight />
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              {services.map(([label, Icon]) => (
                <li key={label}>
                  <Icon />
                  <Link to="/capabilities">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h3>Contact</h3>

            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>Hingna, Nagpur, Maharashtra</span>
            </div>

            <div className="footer-contact-item">
              <FaPhoneAlt />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
                {company.phone}
              </a>
            </div>

            <div className="footer-contact-item">
              <FaEnvelope />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>

            <Link to="/contact" className="footer-quote-btn">
              Request Quote
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {company.name}. All rights reserved.</p>

          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}