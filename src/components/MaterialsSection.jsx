import { ShieldCheck, FileText, Drill, Download } from 'lucide-react';
import './materialsSection.css';

const materials = [
  {
    title: 'Mild Steel (MS)',
    icon: 'I',
    grade: 'IS 2062 Grade A/B',
    desc: 'High strength and durability for general engineering and fabrication.',
    spec: 'Up to 25mm laser cut',
  },
  {
    title: 'Stainless Steel',
    Icon: ShieldCheck,
    grade: 'SS 304 / 316',
    desc: 'Corrosion-resistant grades ideal for food, pharma and high-end applications.',
    spec: 'Up to 12mm laser cut',
  },
  {
    title: 'CRCA Sheet',
    Icon: FileText,
    grade: 'IS 513 Grade D',
    desc: 'Perfect for panels, electrical enclosures and precision applications.',
    spec: '0.8mm to 3mm laser cut',
  },
  {
    title: 'Aluminium',
    icon: 'Al',
    grade: '1100 / 5052 / 6061 / 6063',
    desc: 'Lightweight, corrosion-resistant and excellent for a wide range of industrial uses.',
    spec: 'Up to 10mm laser cut',
  },
  {
    title: 'HR Structural Plate',
    icon: 'I',
    grade: 'IS 2062',
    desc: 'High strength plates for heavy structures, construction and critical applications.',
    spec: 'Up to 25mm laser cut',
  },
  {
    title: 'Tool Steel',
    Icon: Drill,
    grade: 'EN31 / D2',
    desc: 'High hardness and wear resistance for dies, tools and precision components.',
    spec: '55–62 HRC',
  },
];

export default function MaterialsSection() {
  return (
    <section className="materials-section">
      <div className="materials-container">
        <div className="materials-header">
          <p className="materials-eyebrow">
            <span />
            Full Material Capability
            <span />
          </p>

          <h2>Materials We Work With</h2>

          <div className="materials-title-line" />

          <p>
            We work with a wide range of metals and alloys to deliver
            precision-cut, high-quality components for every industrial need.
          </p>
        </div>

        <div className="materials-grid-new">
          {materials.map((item) => {
            const Icon = item.Icon;

            return (
              <div className="material-modern-card" key={item.title}>
                <span className="material-dot" />

                <div className="material-main">
                  <div className="material-icon">
                    {Icon ? <Icon size={32} strokeWidth={1.9} /> : item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <span className="material-small-line" />
                    <h4>{item.grade}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <div className="material-divider" />

                <div className="material-spec">
                  <span>
                    <Download size={16} />
                  </span>
                  <p>{item.spec}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}