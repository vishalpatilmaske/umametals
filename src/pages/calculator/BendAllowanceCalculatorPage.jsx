import { useMemo, useState } from 'react';
import { TriangleRight } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { CalculatorShell, EmptyResult, ResultList } from './CalculatorShared';

export default function BendAllowanceCalculatorPage() {
  usePageMeta('Sheet Metal Bend Allowance Calculator | UMA Metal Craft', 'Calculate bend allowance and bend deduction.');

  const [angle, setAngle] = useState('');
  const [thickness, setThickness] = useState('');
  const [radius, setRadius] = useState('');
  const [kFactor, setKFactor] = useState('0.4');
  const [result, setResult] = useState(null);

  const preview = useMemo(() => {
    const a = Number(angle);
    const t = Number(thickness);
    const r = Number(radius);
    const k = Number(kFactor);

    if (!a || !t || !r || !k) return null;

    const ba = (Math.PI / 180) * a * (r + k * t);
    const bd = 2 * (r + t) * Math.tan((a * Math.PI) / 360) - ba;

    return { ba, bd };
  }, [angle, thickness, radius, kFactor]);

  return (
    <CalculatorShell
      crumb="Bend Allowance Calculator"
      title="Sheet Metal"
      orangeTitle="Bend Allowance Calculator"
      description="Calculate bend allowance and bend deduction for sheet metal fabrication with K-factor support. Essential for press brake operators, sheet metal designers, and fabrication engineers."
    >
      <section className="calc-grid">
        <div className="calc-card">
          <h2 className="calc-card-title">Bend Parameters</h2>

          <div className="calc-field">
            <label>Bend Angle (Degrees)</label>
            <input value={angle} onChange={(e) => setAngle(e.target.value)} placeholder="e.g. 90" type="number" />
          </div>

          <div className="calc-field">
            <label>Material Thickness (MM)</label>
            <input value={thickness} onChange={(e) => setThickness(e.target.value)} placeholder="e.g. 1.5" type="number" />
          </div>

          <div className="calc-field">
            <label>Inside Radius (MM)</label>
            <input value={radius} onChange={(e) => setRadius(e.target.value)} placeholder="e.g. 2" type="number" />
          </div>

          <div className="calc-field">
            <label>K-Factor (0.33 – 0.50)</label>
            <input value={kFactor} onChange={(e) => setKFactor(e.target.value)} placeholder="0.4" type="number" step="0.01" />
            <small>Soft Al/Cu: 0.33 · Mild Steel: 0.38–0.42 · SS/Hard: 0.45–0.50</small>
          </div>

          <button className="calc-btn" onClick={() => setResult(preview)}>Calculate Bend</button>
        </div>

        <div className="calc-card">
          <h2 className="calc-card-title">Results</h2>

          {!result ? (
            <EmptyResult icon={<TriangleRight size={28} />} text="Enter bend parameters and calculate" />
          ) : (
            <div className="calc-result-box">
              <div className="calc-result-main">
                <span>Bend Allowance</span>
                <strong>{result.ba.toFixed(3)} mm</strong>
              </div>

              <ResultList
                items={[
                  { label: 'Bend Deduction', value: `${result.bd.toFixed(3)} mm` },
                  { label: 'K-Factor', value: kFactor },
                  { label: 'Inside Radius', value: `${radius} mm` },
                ]}
              />
            </div>
          )}
        </div>
      </section>

      <section className="calc-info">
        <h2>Formula <span>Explanation</span></h2>

        <div className="calc-info-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="calc-factor">
            <strong>WHAT IS BEND ALLOWANCE?</strong><br />
            The arc length of material consumed in the bend zone along the neutral axis.
          </div>

          <div className="calc-factor">
            <strong>WHAT IS BEND DEDUCTION?</strong><br />
            Material lost to the bend. BD = 2 × (R + T) × tan(Angle ÷ 2) − BA.
          </div>

          <div className="calc-factor">
            <strong>HOW K-FACTOR WORKS</strong><br />
            K = t/T is the neutral axis position ratio. K=0.5 means centered.
          </div>
        </div>
      </section>
    </CalculatorShell>
  );
}