import {
  ShieldCheck,
  Settings,
  Layers,
  Truck,
  HelpCircle,
  CheckCircle2,
  MousePointerClick,
  FileText,
  Calculator,
} from 'lucide-react';
import './calculators.css';
import FaqSection from '../../components/sections/FaqSection';

export function CalculatorShell({
  crumb,
  title,
  orangeTitle,
  description,
  children,
}) {
  return (
    <main className="calc-page">
      <div className="calc-container">
        <div className="calc-breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>{crumb}</span>
        </div>

        <section className="calc-hero">
          <h1>
            {title}
            <strong>{orangeTitle}</strong>
          </h1>

          <p>{description}</p>

          <div className="calc-badges">
            <span className="calc-badge">
              <ShieldCheck size={13} /> Precision Built
            </span>
            <span className="calc-badge">
              <Settings size={13} /> Custom Fabrication
            </span>
            <span className="calc-badge">
              <Layers size={13} /> CNC Laser Cutting
            </span>
            <span className="calc-badge">
              <Truck size={13} /> Pan India Delivery
            </span>
          </div>
        </section>

        <CalculatorInfoSections />

        {children}
      </div>

      <FaqSection />
    </main>
  );
}

function CalculatorInfoSections() {
  const whyItems = [
    {
      icon: <Calculator size={20} />,
      title: 'Accurate Estimation',
      text: 'Get quick approximate values for material, cutting, bending, or fabrication requirements.',
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: 'Faster RFQ Planning',
      text: 'Understand basic quantity, weight, and cost factors before submitting your enquiry.',
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Industrial Use Case',
      text: 'Built for B2B buyers, contractors, OEMs, and procurement teams.',
    },
  ];

  const howItems = [
    {
      icon: <MousePointerClick size={20} />,
      title: 'Enter Your Details',
      text: 'Add the required dimensions, material type, quantity, or project values.',
    },
    {
      icon: <FileText size={20} />,
      title: 'Review The Result',
      text: 'Check the calculated output and use it as a planning estimate.',
    },
    {
      icon: <Truck size={20} />,
      title: 'Request Final Quote',
      text: 'Submit your requirement to get an exact commercial quote from our team.',
    },
  ];

  return (
    <section className="calc-info-section">
      <div className="calc-info-grid">
        <div className="calc-info-card">
          <div className="calc-info-head">
            <span className="calc-info-icon">
              <HelpCircle size={22} />
            </span>
            <div>
              <p>Why Use This</p>
              <h2>Smart Estimation Before RFQ</h2>
            </div>
          </div>

          <div className="calc-info-list">
            {whyItems.map((item) => (
              <div className="calc-info-item" key={item.title}>
                <span>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="calc-info-card calc-info-card--dark">
          <div className="calc-info-head">
            <span className="calc-info-icon">
              <Settings size={22} />
            </span>
            <div>
              <p>How To Use</p>
              <h2>Simple 3-Step Process</h2>
            </div>
          </div>

          <div className="calc-info-list">
            {howItems.map((item) => (
              <div className="calc-info-item" key={item.title}>
                <span>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EmptyResult({ icon, title = 'No Result Yet', text }) {
  return (
    <div className="calc-result-empty">
      <div>
        <div className="calc-empty-icon orange">{icon}</div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

export function ResultList({ items }) {
  return (
    <div className="calc-result-list">
      {items.map((item) => (
        <div key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}