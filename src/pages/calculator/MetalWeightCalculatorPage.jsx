import { useMemo, useState } from 'react';
import { Scale } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { CalculatorShell, EmptyResult, ResultList } from './CalculatorShared';

const materials = {
  mildSteel: { label: 'Mild Steel — 7.85 g/cm³', short: 'Mild Steel', density: 7.85 },
  ss304: { label: 'Stainless Steel 304 — 7.93 g/cm³', short: 'Stainless Steel 304', density: 7.93 },
  ss316: { label: 'Stainless Steel 316 — 7.98 g/cm³', short: 'Stainless Steel 316', density: 7.98 },
  aluminium: { label: 'Aluminium — 2.70 g/cm³', short: 'Aluminium', density: 2.7 },
  copper: { label: 'Copper — 8.96 g/cm³', short: 'Copper', density: 8.96 },
  brass: { label: 'Brass — 8.50 g/cm³', short: 'Brass', density: 8.5 },
};

export default function MetalWeightCalculatorPage() {
  usePageMeta('Free Metal Weight Calculator | UMA Metal Craft', 'Calculate weight of steel, SS, aluminium, copper and brass parts.');

  const [material, setMaterial] = useState('mildSteel');
  const [shape, setShape] = useState('flat');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('');
  const [result, setResult] = useState(null);

  const preview = useMemo(() => {
    const l = Number(length);
    const w = Number(width);
    const t = Number(thickness);
    if (!l || !w || !t) return null;
    const volume = l * w * t;
    const weight = (volume * materials[material].density) / 1000;
    return { volume, weight };
  }, [length, width, thickness, material]);

  const calculate = () => setResult(preview);

  return (
    <CalculatorShell
      crumb="Metal Weight Calculator"
      title="Free Metal Weight Calculator"
      orangeTitle="Steel, SS & Aluminium"
      description="Instantly calculate the weight of steel, stainless steel, aluminium, copper, and brass metal components. Supports flat plates, round bars, square bars, pipes, and tubes."
    >
      <section className="calc-grid">
        <div className="calc-card">
          <h2 className="calc-card-title">
            <span className="calc-title-icon orange"><Scale size={18} /></span>
            Calculator Inputs
          </h2>

          <div className="calc-field">
            <label>Material</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)}>
              {Object.entries(materials).map(([key, item]) => (
                <option key={key} value={key}>{item.label}</option>
              ))}
            </select>
          </div>

          <div className="calc-field">
            <label>Shape</label>
            <select value={shape} onChange={(e) => setShape(e.target.value)}>
              <option value="flat">Flat Plate</option>
              <option value="round">Round Bar</option>
              <option value="square">Square Bar</option>
            </select>
          </div>

          <div className="calc-field">
            <label>Length (MM)</label>
            <input value={length} onChange={(e) => setLength(e.target.value)} placeholder="e.g. 1000" type="number" />
          </div>

          <div className="calc-field">
            <label>Width (MM)</label>
            <input value={width} onChange={(e) => setWidth(e.target.value)} placeholder="e.g. 500" type="number" />
          </div>

          <div className="calc-field">
            <label>Thickness (MM)</label>
            <input value={thickness} onChange={(e) => setThickness(e.target.value)} placeholder="e.g. 10" type="number" />
          </div>

          <button className="calc-btn" onClick={calculate}>Calculate Weight</button>
        </div>

        <div className="calc-card">
          <h2 className="calc-card-title">Results</h2>

          {!result ? (
            <EmptyResult icon={<Scale size={28} />} text="Enter values and click Calculate" />
          ) : (
            <div className="calc-result-box">
              <div className="calc-result-main">
                <span>Total Weight</span>
                <strong>{result.weight.toFixed(4)} kg</strong>
              </div>

              <ResultList
                items={[
                  { label: 'Material', value: materials[material].short },
                  { label: 'Density', value: `${materials[material].density} g/cm³` },
                  { label: 'Volume', value: `${result.volume.toLocaleString()} cm³` },
                ]}
              />
            </div>
          )}
        </div>
      </section>

      <section className="calc-info">
        <h2>Calculation <span>Formula</span></h2>

        <div className="calc-info-grid">
          <div>
            <div className="calc-code">{`# Weight Formula

Weight (kg) = Volume × Density ÷ 1000

# Flat Plate
Volume = L(mm) × W(mm) × T(mm) ÷ 1000

# Round Bar
Volume = π × (D/2)² × L ÷ 1000`}</div>

            <div className="calc-table">
              <div><span>Mild Steel</span><strong>7.85</strong></div>
              <div><span>Stainless Steel 304</span><strong>7.93</strong></div>
              <div><span>Stainless Steel 316</span><strong>7.98</strong></div>
              <div><span>Aluminium</span><strong>2.7</strong></div>
              <div><span>Copper</span><strong>8.96</strong></div>
              <div><span>Brass</span><strong>8.5</strong></div>
            </div>
          </div>

          <div>
            <p className="calc-orange"><b>WORKED EXAMPLE</b></p>
            <div className="calc-code">{`MS Flat Plate: 1000 × 500 × 5mm

Volume = 1000 × 500 × 5 ÷ 1000 = 2,500 cm³
Weight = 2,500 × 7.85 ÷ 1000 = 19.625 kg`}</div>
          </div>
        </div>
      </section>
    </CalculatorShell>
  );
}