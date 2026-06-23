import { useMemo, useState } from 'react';
import { Zap } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { CalculatorShell, EmptyResult, ResultList } from './CalculatorShared';

const materialFactor = {
  mildSteel: { label: 'Mild Steel', factor: 1 },
  stainlessSteel: { label: 'Stainless Steel', factor: 1.6 },
  aluminium: { label: 'Aluminium', factor: 1.3 },
  copper: { label: 'Copper', factor: 2 },
  brass: { label: 'Brass', factor: 1.8 },
};

const complexityFactor = {
  simple: 1,
  medium: 1.35,
  complex: 1.75,
};

export default function LaserCuttingCalculatorPage() {
  usePageMeta('CNC Laser Cutting Cost Calculator | UMA Metal Craft', 'Estimate laser cutting cost by material, thickness and quantity.');

  const [material, setMaterial] = useState('mildSteel');
  const [thickness, setThickness] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [complexity, setComplexity] = useState('simple');
  const [result, setResult] = useState(null);

  const preview = useMemo(() => {
    const l = Number(length);
    const w = Number(width);
    const t = Number(thickness);
    const q = Number(quantity);
    if (!l || !w || !t || !q) return null;

    const area = (l * w) / 1000000;
    const base = area * t * materialFactor[material].factor * 1000;
    const total = Math.max(250, base * complexityFactor[complexity] * q);

    return { area, base, total, perPiece: total / q };
  }, [length, width, thickness, quantity, material, complexity]);

  return (
    <CalculatorShell
      crumb="CNC Laser Cutting Cost Calculator"
      title="CNC Laser Cutting"
      orangeTitle="Cost Calculator"
      description="Get an instant price estimate for CNC laser cutting jobs based on material, thickness, complexity and quantity."
    >
      <section className="calc-grid">
        <div className="calc-card">
          <h2 className="calc-card-title">
            <span className="calc-title-icon"><Zap size={18} /></span>
            Job Details
          </h2>

          <div className="calc-field">
            <label>Material</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)}>
              {Object.entries(materialFactor).map(([key, item]) => (
                <option key={key} value={key}>{item.label}</option>
              ))}
            </select>
          </div>

          <div className="calc-field">
            <label>Material Thickness (MM)</label>
            <input value={thickness} onChange={(e) => setThickness(e.target.value)} placeholder="e.g. 3" type="number" />
          </div>

          <div className="calc-row">
            <div className="calc-field">
              <label>Length (MM)</label>
              <input value={length} onChange={(e) => setLength(e.target.value)} placeholder="e.g. 500" type="number" />
            </div>

            <div className="calc-field">
              <label>Width (MM)</label>
              <input value={width} onChange={(e) => setWidth(e.target.value)} placeholder="e.g. 300" type="number" />
            </div>
          </div>

          <div className="calc-field">
            <label>Quantity</label>
            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="1" type="number" />
          </div>

          <div className="calc-field">
            <label>Part Complexity</label>
            <div className="calc-segment">
              {['simple', 'medium', 'complex'].map((item) => (
                <button key={item} onClick={() => setComplexity(item)} className={complexity === item ? 'active' : ''}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button className="calc-btn" onClick={() => setResult(preview)}>Estimate Cost</button>
        </div>

        <div className="calc-card">
          <h2 className="calc-card-title">Cost Estimate</h2>

          {!result ? (
            <EmptyResult icon={<Zap size={28} />} text="Enter job details and click Estimate Cost" />
          ) : (
            <div className="calc-result-box">
              <div className="calc-result-main">
                <span>Estimated Cost</span>
                <strong>₹{result.total.toFixed(0)}</strong>
              </div>

              <ResultList
                items={[
                  { label: 'Area', value: `${result.area.toFixed(3)} m²` },
                  { label: 'Per Piece', value: `₹${result.perPiece.toFixed(0)}` },
                  { label: 'Complexity', value: complexity.toUpperCase() },
                  { label: 'Material Factor', value: `${materialFactor[material].factor}x` },
                ]}
              />
            </div>
          )}
        </div>
      </section>

      <section className="calc-info">
        <h2>How Laser Cutting Cost is <span>Calculated</span></h2>

        <div className="calc-info-grid">
          <div>
            <div className="calc-code">{`# Cost Formula

Area (m²) = (L × W) ÷ 1,000,000
Base Cost = Area × Thickness Factor × Material Factor × 1000
Total Cost = Base Cost × Complexity × Quantity`}</div>

            <div className="calc-table">
              <div><span>MS</span><strong>1.0x</strong></div>
              <div><span>SS</span><strong>1.6x</strong></div>
              <div><span>Al</span><strong>1.3x</strong></div>
              <div><span>Cu</span><strong>2.0x</strong></div>
              <div><span>Brass</span><strong>1.8x</strong></div>
              <div><span>&lt;3mm</span><strong>1.0x</strong></div>
              <div><span>3–6mm</span><strong>1.4x</strong></div>
              <div><span>&gt;12mm</span><strong>2.5x</strong></div>
            </div>
          </div>

          <div className="calc-info-list">
            <p className="calc-orange"><b>COST FACTORS</b></p>
            <div className="calc-factor"><strong>Material:</strong> Different metals cut at different speeds and cause varying wear on laser optics.</div>
            <div className="calc-factor"><strong>Thickness:</strong> Thicker sheets need more laser power and slower feeds.</div>
            <div className="calc-factor"><strong>Complexity:</strong> More cuts, holes and details increase machine time.</div>
            <div className="calc-factor"><strong>Quantity:</strong> Larger runs reduce per-piece setup cost.</div>
          </div>
        </div>
      </section>
    </CalculatorShell>
  );
}