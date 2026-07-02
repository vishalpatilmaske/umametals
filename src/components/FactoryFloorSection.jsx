import { Link } from 'react-router-dom';
import { ArrowRight, Zap, MonitorCog, Drill, PenTool } from 'lucide-react';
import './factoryFloorSection.css';

const machines = [
  {
    title: '3kW Fibre Laser Cutter',
    text: '3000×1500mm bed',
    Icon: Zap,
  },
  {
    title: 'CNC Press Brake',
    text: '220 Ton, 4000mm',
    Icon: MonitorCog,
  },
  {
    title: 'VMC Machining Centre',
    text: '±0.01mm Accuracy',
    Icon: Drill,
  },
  {
    title: 'MIG/TIG Welding',
    text: '10+ Stations',
    Icon: PenTool,
  },
];

const gallery = [
  {
    image: '/assets/laser-cutting.png',
    title: 'CNC Laser Cutting In Action',
    large: true,
  },
  {
    image: '/assets/facility.png',
    title: 'Our State-Of-The-Art Facility',
  },
  {
    image: '/assets/vmc.png',
    title: 'VMC Machining In Operation',
  },
  {
    image: '/assets/operator.png',
    title: 'Expert Operators At Work',
  },
];

export default function FactoryFloorSection() {
  return (
    <section className="factory-floor-section">
      <div className="factory-floor-container">
        <div className="factory-floor-left">
          <p className="factory-eyebrow">
            Factory Floor <span />
          </p>

          <h2>
            Manufacturing <br />
            All Products In-House
          </h2>

          <div className="factory-title-line" />

          <p className="factory-lead">
            Every product listed here is manufactured at our 20,000 sq ft
            Nagpur facility. We do not outsource production — our clients get
            direct access to our machines, operators, and quality team.
          </p>

          <div className="factory-machine-list">
            {machines.map(({ title, text, Icon }) => (
              <div className="factory-machine-item" key={title}>
                <div className="factory-machine-icon">
                  <Icon size={28} strokeWidth={1.7} />
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/facilities" className="factory-gallery-btn">
            View Facility Gallery
            <ArrowRight size={24} />
          </Link>
        </div>

        <div className="factory-gallery-grid">
          {gallery.map((item) => (
            <div className="factory-gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="factory-gallery-caption">
                <span />
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}