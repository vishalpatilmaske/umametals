import { useMemo, useState } from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import PageHeroDark from '../../components/PageHeroDark';
import Reveal from '../../components/Reveal';

const densityMap = {
  mildSteel: 7.85,
  stainlessSteel: 8.0,
  aluminium: 2.7,
  brass: 8.5,
  copper: 8.96,
};

const materialLabels = {
  mildSteel: 'Mild Steel',
  stainlessSteel: 'Stainless Steel',
  aluminium: 'Aluminium',
  brass: 'Brass',
  copper: 'Copper',
};

export default function CalculatorPage() {
  usePageMeta(
    'Metal Weight Calculator | UMA Metal Craft',
    'Calculate approximate metal weight for plates and sheets using material, length, width, thickness, and quantity.'
  );

  const [material, setMaterial] = useState('mildSteel');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('');
  const [quantity, setQuantity] = useState('1');

  const result = useMemo(() => {
    const l = Number(length);
    const w = Number(width);
    const t = Number(thickness);
    const q = Number(quantity);

    if (!l || !w || !t || !q) return null;

    const density = densityMap[material];

    const weightKg = (l * w * t * density * q) / 1000000;

    return {
      single: weightKg / q,
      total: weightKg,
      density,
    };
  }, [material, length, width, thickness, quantity]);

  return (
    <>
      <PageHeroDark
        tag="Calculator"
        title="Metal Weight Calculator"
        lead="Calculate approximate sheet and plate weight for mild steel, stainless steel, aluminium, brass, and copper."
        actions={false}
      />

      <section className="section inner-section">
        <div className="container">
          <div className="calculator-layout">
            <Reveal className="calculator-card">
              <h2 className="calculator-title">Enter Dimensions</h2>

              <div className="calculator-form">
                <div className="form-group">
                  <label>Material</label>
                  <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                    {Object.keys(materialLabels).map((key) => (
                      <option key={key} value={key}>
                        {materialLabels[key]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Length MM</label>
                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="Example: 1000"
                    />
                  </div>

                  <div className="form-group">
                    <label>Width MM</label>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="Example: 500"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Thickness MM</label>
                    <input
                      type="number"
                      value={thickness}
                      onChange={(e) => setThickness(e.target.value)}
                      placeholder="Example: 5"
                    />
                  </div>

                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Example: 10"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="calculator-result-card">
              <p className="section-eyebrow">
                <span className="section-eyebrow__line" />
                Result
              </p>

              <h2 className="calculator-result-title">
                {result ? `${result.total.toFixed(2)} KG` : 'Enter values'}
              </h2>

              {result ? (
                <div className="calculator-result-list">
                  <div>
                    <span>Material</span>
                    <strong>{materialLabels[material]}</strong>
                  </div>
                  <div>
                    <span>Density</span>
                    <strong>{result.density} g/cm³</strong>
                  </div>
                  <div>
                    <span>Single Piece Weight</span>
                    <strong>{result.single.toFixed(2)} KG</strong>
                  </div>
                  <div>
                    <span>Total Weight</span>
                    <strong>{result.total.toFixed(2)} KG</strong>
                  </div>
                </div>
              ) : (
                <p className="section-lead">
                  Fill material, length, width, thickness, and quantity to calculate weight.
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}