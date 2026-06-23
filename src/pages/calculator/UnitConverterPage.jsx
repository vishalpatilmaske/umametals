import { useMemo, useState } from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { CalculatorShell } from './CalculatorShared';

const units = {
  length: {
    mm: 1,
    cm: 10,
    m: 1000,
    inch: 25.4,
    ft: 304.8,
  },
  weight: {
    kg: 1,
    g: 0.001,
    lb: 0.453592,
    ton: 1000,
  },
  pressure: {
    bar: 1,
    psi: 0.0689476,
    kpa: 0.01,
    mpa: 10,
  },
  temp: {
    c: 'c',
    f: 'f',
    k: 'k',
  },
  area: {
    sqm: 1,
    sqft: 0.092903,
    sqin: 0.00064516,
    sqmm: 0.000001,
  },
};

function convertTemp(value, from, to) {
  let c = value;
  if (from === 'f') c = (value - 32) * 5 / 9;
  if (from === 'k') c = value - 273.15;
  if (to === 'f') return (c * 9 / 5) + 32;
  if (to === 'k') return c + 273.15;
  return c;
}

export default function UnitConverterPage() {
  usePageMeta('Engineering Unit Converter | UMA Metal Craft', 'Convert common engineering units.');

  const [type, setType] = useState('length');
  const [from, setFrom] = useState('mm');
  const [to, setTo] = useState('cm');
  const [value, setValue] = useState('');

  const options = Object.keys(units[type]);

  const result = useMemo(() => {
    const val = Number(value);
    if (!value || Number.isNaN(val)) return '';

    if (type === 'temp') return convertTemp(val, from, to).toFixed(4);

    return ((val * units[type][from]) / units[type][to]).toFixed(4);
  }, [value, from, to, type]);

  const changeType = (next) => {
    setType(next);
    const nextOptions = Object.keys(units[next]);
    setFrom(nextOptions[0]);
    setTo(nextOptions[1] || nextOptions[0]);
    setValue('');
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const reset = () => setValue('');

  return (
    <CalculatorShell
      crumb="Engineering Unit Converter"
      title="Engineering"
      orangeTitle="Unit Converter"
      description="Convert engineering units instantly — length, weight, pressure, temperature, and area. Live conversion as you type with copy and swap functionality."
    >
      <section className="calc-unit-wrap">
        <div className="calc-card calc-unit-card">
          <h2 className="calc-card-title">Unit Converter</h2>

          <div className="calc-tabs">
            {Object.keys(units).map((item) => (
              <button key={item} onClick={() => changeType(item)} className={type === item ? 'active' : ''}>
                {item}
              </button>
            ))}
          </div>

          <div className="calc-row">
            <div className="calc-field">
              <label>From</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)}>
                {options.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>

            <div className="calc-field">
              <label>To</label>
              <select value={to} onChange={(e) => setTo(e.target.value)}>
                {options.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
          </div>

          <div className="calc-field">
            <label>Value</label>
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter value to convert" type="number" />
          </div>

          {result && (
            <div className="calc-result-main" style={{ marginBottom: 16 }}>
              <span>Converted Value</span>
              <strong>{result} {to}</strong>
            </div>
          )}

          <div className="calc-actions-row">
            <button className="calc-small-btn" onClick={swap}>↔ Swap</button>
            <button className="calc-small-btn" onClick={() => navigator.clipboard?.writeText(result)}>Copy</button>
            <button className="calc-small-btn" onClick={reset}>Reset</button>
          </div>
        </div>
      </section>

      <section className="calc-info">
        <h2>Common Manufacturing <span>Conversions</span></h2>

        <div className="calc-info-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div>
            <p className="calc-orange"><b>LENGTH</b></p>
            <div className="calc-info-list">
              <div className="calc-factor">1 inch = 25.4 mm</div>
              <div className="calc-factor">1 foot = 304.8 mm</div>
              <div className="calc-factor">1 meter = 39.37 inches</div>
              <div className="calc-factor">1 mm = 0.03937 inches</div>
            </div>
          </div>

          <div>
            <p className="calc-orange"><b>WEIGHT</b></p>
            <div className="calc-info-list">
              <div className="calc-factor">1 kg = 2.2046 lb</div>
              <div className="calc-factor">1 ton = 1000 kg</div>
              <div className="calc-factor">1 lb = 0.4536 kg</div>
              <div className="calc-factor">1 ton = 2204.6 lb</div>
            </div>
          </div>

          <div>
            <p className="calc-orange"><b>PRESSURE</b></p>
            <div className="calc-info-list">
              <div className="calc-factor">1 Bar = 14.504 PSI</div>
              <div className="calc-factor">1 MPa = 10 Bar</div>
              <div className="calc-factor">1 kPa = 0.145 PSI</div>
              <div className="calc-factor">1 Bar = 100 kPa</div>
            </div>
          </div>
        </div>
      </section>
    </CalculatorShell>
  );
}