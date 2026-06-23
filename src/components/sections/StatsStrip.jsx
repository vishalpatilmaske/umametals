import { heroStats } from '../../data/content';
import { DynamicIcon } from '../icons/Icons';
import Reveal from '../Reveal';

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Company statistics">
      <div className="container">
        <div className="stats-strip__grid">
          {heroStats.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 60}
              className="stats-strip__item"
            >
              <span className="stats-strip__icon" aria-hidden="true">
                <DynamicIcon name={item.icon} size={26} />
              </span>

              <div>
                <span className="stats-strip__value">{item.value}</span>
                <span className="stats-strip__label">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}