import {
  ShieldCheck,
  Settings,
  Layers,
  Truck,
} from 'lucide-react';
import './calculators.css';

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
            <span className="calc-badge"><ShieldCheck size={13} /> ISO Certified</span>
            <span className="calc-badge"><Settings size={13} /> Custom Fabrication</span>
            <span className="calc-badge"><Layers size={13} /> CNC Laser Cutting</span>
            <span className="calc-badge"><Truck size={13} /> Pan India Delivery</span>
          </div>
        </section>

        {children}
      </div>
    </main>
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