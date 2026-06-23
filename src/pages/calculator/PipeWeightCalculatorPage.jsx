import { useMemo, useState } from 'react';
import { Circle } from 'lucide-react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { CalculatorShell, EmptyResult, ResultList } from './CalculatorShared';

const pipes = {
  ms: { label: 'MS Pipe (Mild Steel)', density: 7.85 },
  ss: { label: 'SS Pipe', density: 7.93 },
  gi: { label: 'GI Pipe', density: 7.85 },
  aluminium: { label: 'Aluminium Pipe', density: 2.7 },
};

export default function PipeWeightCalculatorPage() {
  usePageMeta('Pipe Weight Calculator | UMA Metal Craft', 'Calculate MS, SS, GI and aluminium pipe weight.');

  const [material, setMaterial] = useState('ms');
  const [od, setOd] = useState('');
  const [wall, setWall] = useState('');
  const [length, setLength] = useState('');
  const [result, setResult] = useState(null);

  const preview = useMemo(() => {
    const outer = Number(od);
    const wt = Number(wall);
    const len = Number(length);
    if (!outer || !wt || !len || outer <= wt * 2) return null;

    const id = outer - 2 * wt;
    const weightPerM = (((outer * outer - id * id) * pipes[material].density) / 4000000) * Math.PI * 1000;
    const total = weightPerM * len;

    return { id, weightPerM, total };
  }, [od, wall, length, material]);

  return (
    <CalculatorShell
      crumb="Pipe Weight Calculator"
      title="Pipe & Tube"
      orangeTitle="Weight Calculator"
      description="Calculate weight per meter and total weight for MS pipe, SS pipe, GI pipe, and aluminium pipe. Enter outer diameter, wall thickness, and length for accurate results."
    >
      <section className="calc-grid">
        <div className="calc-card">
          <h2 className="calc-card-title">Pipe Specifications</h2>

          <div className="calc-field">
            <label>Pipe Material</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)}>
              {Object.entries(pipes).map(([key, item]) => (
                <option key={key} value={key}>{item.label}</option>
              ))}
            </select>
          </div>

          <div className="calc-field">
            <label>Outer Diameter — OD (MM)</label>
            <input value={od} onChange={(e) => setOd(e.target.value)} placeholder="e.g. 50" type="number" />
          </div>

          <div className="calc-field">
            <label>Wall Thickness (MM)</label>
            <input value={wall} onChange={(e) => setWall(e.target.value)} placeholder="e.g. 3" type="number" />
          </div>

          <div className="calc-field">
            <label>Length (M)</label>
            <input value={length} onChange={(e) => setLength(e.target.value)} placeholder="e.g. 6" type="number" />
          </div>

          <button className="calc-btn" onClick={() => setResult(preview)}>Calculate Weight</button>
        </div>

        <div className="calc-card">
          <h2 className="calc-card-title">Results</h2>

          {!result ? (
            <EmptyResult icon={<Circle size={28} />} text="Enter pipe specs and calculate" />
          ) : (
            <div className="calc-result-box">
              <div className="calc-result-main">
                <span>Total Weight</span>
                <strong>{result.total.toFixed(2)} kg</strong>
              </div>

              <ResultList
                items={[
                  { label: 'Inner Diameter', value: `${result.id.toFixed(2)} mm` },
                  { label: 'Weight / Meter', value: `${result.weightPerM.toFixed(2)} kg/m` },
                  { label: 'Material Density', value: `${pipes[material].density} g/cm³` },
                ]}
              />
            </div>
          )}
        </div>
      </section>

      <section className="calc-info">
        <h2>Pipe Weight <span>Formula</span></h2>

        <div className="calc-info-grid">
          <div>
            <div className="calc-code">{`# Pipe Weight

ID = OD - 2 × Wall Thickness
Weight/m = π × (OD² - ID²) ÷ 4 × Density ÷ 1,000,000

# Total
Total = Weight/m × Length (m)`}</div>

            <div className="calc-table">
              <div><span>MS Pipe</span><strong>7.85</strong></div>
              <div><span>SS Pipe</span><strong>7.93</strong></div>
              <div><span>GI Pipe</span><strong>7.85</strong></div>
              <div><span>Aluminium Pipe</span><strong>2.7</strong></div>
            </div>
          </div>

          <div>
            <p className="calc-orange"><b>WORKED EXAMPLE</b></p>
            <div className="calc-code">{`MS Pipe: OD=50mm, Wall=3mm, Length=6m

ID = 50 - 6 = 44mm
Weight/m = π × (2500 - 1936) ÷ 4 × 7.85 ÷ 1,000,000

= 3.48 kg/m
Total = 3.48 × 6 = 20.88 kg`}</div>
          </div>
        </div>
      </section>
    </CalculatorShell>
  );
}