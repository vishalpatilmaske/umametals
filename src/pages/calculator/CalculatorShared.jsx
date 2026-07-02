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
  ArrowRight,
} from 'lucide-react';
import './calculators.css';
import FaqSection from '../../components/sections/FaqSection';
import FactoryFloorSection from '../../components/FactoryFloorSection';

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
          <div className="calc-hero-content">
            <p className="calc-eyebrow">
              <span />
              Industrial Calculator
            </p>

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
          </div>

          <div className="calc-hero-panel">
            <div className="calc-hero-panel-icon">
              <Calculator size={34} />
            </div>
            <h3>Quick RFQ Estimation</h3>
            <p>
              Calculate approximate project values before submitting your final
              enquiry.
            </p>
            <span>
              Start calculating <ArrowRight size={15} />
            </span>
          </div>
        </section>

        {children}
      </div>

      <CalculatorInfoSections />
      <LaserCostGuide />

      <FaqSection />
    </main>
  );
}

function CalculatorInfoSections() {
  const whyItems = [
    {
      icon: <Calculator size={18} />,
      title: 'Accurate Estimation',
      text: 'Get quick approximate values for material, cutting, bending, or fabrication requirements.',
    },
    {
      icon: <CheckCircle2 size={18} />,
      title: 'Faster RFQ Planning',
      text: 'Understand basic quantity, weight, and cost factors before submitting your enquiry.',
    },
    {
      icon: <ShieldCheck size={18} />,
      title: 'Industrial Use Case',
      text: 'Built for B2B buyers, contractors, OEMs, and procurement teams.',
    },
  ];

  const howItems = [
    {
      title: 'Enter Your Details',
      text: 'Add the required dimensions, material type, quantity, or project values.',
    },
    {
      title: 'Review The Result',
      text: 'Check the calculated output and use it as a planning estimate.',
    },
    {
      title: 'Request Final Quote',
      text: 'Submit your requirement to get an exact commercial quote from our team.',
    },
  ];

  return (
    <section className="calc-info-section">
      <div className="calc-info-container">
        <div className="calc-info-header">
          <p>
            <span />
            Calculator Guide
            <span />
          </p>
          <h2>
            Plan Better Before <strong>Requesting a Quote</strong>
          </h2>
        </div>

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
              {howItems.map((item, index) => (
                <div className="calc-info-item" key={item.title}>
                  <span>
                    <b>{index + 1}</b>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaserCostGuide() {
  const materialFactors = [
    ['MS', '1.0x'],
    ['SS', '1.6x'],
    ['Al', '1.3x'],
    ['Cu', '2.0x'],
    ['Brass', '1.8x'],
  ];

  const thicknessFactors = [
    ['<3mm', '1.0x'],
    ['3–6mm', '1.4x'],
    ['>12mm', '2.5x'],
  ];

  const costFactors = [
    {
      title: 'Material',
      text: 'Different metals cut at different speeds and cause varying wear on laser optics.',
    },
    {
      title: 'Thickness',
      text: 'Thicker sheets need more laser power and slower feeds.',
    },
    {
      title: 'Complexity',
      text: 'More cuts, holes and details increase machine time.',
    },
    {
      title: 'Quantity',
      text: 'Larger runs reduce per-piece setup cost.',
    },
  ];

  return (
    <section className="laser-cost-guide">
      <div className="laser-cost-container">
        <div className="laser-cost-header">
          <p>
            <span />
            Cost Factors
            <span />
          </p>
          <h2>
            How Laser Cutting <strong>Cost is Calculated</strong>
          </h2>
        </div>

        <div className="laser-cost-layout">
          <div className="laser-formula-card">
            <div className="laser-card-label">Cost Formula</div>

            <div className="formula-lines">
              <p>
                <strong>Area (m²)</strong>
                <span>= (L × W) ÷ 1,000,000</span>
              </p>
              <p>
                <strong>Base Cost</strong>
                <span>= Area × Thickness Factor × Material Factor × 1000</span>
              </p>
              <p>
                <strong>Total Cost</strong>
                <span>= Base Cost × Complexity × Quantity</span>
              </p>
            </div>
          </div>

          <div className="laser-factor-card">
            <div className="laser-card-label">Material Factors</div>

            <div className="factor-chip-grid">
              {materialFactors.map(([label, value]) => (
                <div className="factor-chip" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="laser-factor-card">
            <div className="laser-card-label">Thickness Factors</div>

            <div className="factor-chip-grid factor-chip-grid--three">
              {thicknessFactors.map(([label, value]) => (
                <div className="factor-chip" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="laser-cost-factors-card">
            <div className="laser-card-label">Cost Factors</div>

            <div className="cost-factor-list">
              {costFactors.map((item) => (
                <div className="cost-factor-item" key={item.title}>
                  <span />
                  <p>
                    <strong>{item.title}:</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     < FactoryFloorSection />
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