import React, { useState } from 'react';
import './App.css'; // Keep the existing CSS, we'll add more for styling

function App() {
  const [inputs, setInputs] = useState({
    cementContent: '',
    waterCementRatio: '',
    fineAggregate: '',
    coarseAggregate: '',
    rha: '',
  });

  const [outputs, setOutputs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOutputs(null);

    // Simulate API call
    setTimeout(() => {
      const simulatedOutputs = {
        workability: Math.random() * 100,
        flexuralStrength: Math.random() * 10,
        settingTime: Math.random() * 24,
        compressiveStrength: Math.random() * 50,
        waterAbsorption: Math.random() * 5,
        splitTensileStrength: Math.random() * 5,
        chlorideResistance: Math.random() * 90,
        thermalConductivity: Math.random() * 2,
        carbonationDepth: Math.random() * 10,
        tensileTestStrength: Math.random() * 8,
      };

      setOutputs(simulatedOutputs);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="app-container"> {/* Changed class name for main container */}
      <header className="app-header"> {/* Added header */}
        <h1>CONCRETE PROPERTY PREDICTOR </h1>
        <p className="tagline">Analyze your concrete mix properties with ease.</p> {/* Added tagline */}
      </header>
      <main className="app-main"> {/* Added main section */}
        <form className="input-form" onSubmit={handleSubmit}> {/* Changed class name for form */}
          <div className="form-group"> {/* Changed class name for input group */}
            <label htmlFor="cementContent">Cement Content (kg):</label>
            <input
              type="number"
              id="cementContent"
              name="cementContent"
              value={inputs.cementContent}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="waterCementRatio">Water/Cement Ratio:</label>
            <input
              type="number"
              step="0.01"
              id="waterCementRatio"
              name="waterCementRatio"
              value={inputs.waterCementRatio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fineAggregate">Fine Aggregate (kg):</label>
            <input
              type="number"
              id="fineAggregate"
              name="fineAggregate"
              value={inputs.fineAggregate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coarseAggregate">Coarse Aggregate (kg):</label>
            <input
              type="number"
              id="coarseAggregate"
              name="coarseAggregate"
              value={inputs.coarseAggregate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rha">RHA (kg):</label>
            <input
              type="number"
              id="rha"
              name="rha"
              value={inputs.rha}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading} className="predict-button"> {/* Changed class name for button */}
            {loading ? 'Predicting...' : 'Analyze Properties'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>

        {outputs && (
          <div className="output-container"> {/* Changed class name for output box */}
            <h2 className="output-title">Predicted Properties</h2> {/* Changed class name for output title */}
            <div className="property-item"> {/* Added class for individual property */}
              <strong>Workability:</strong> {outputs.workability.toFixed(2)} mm
            </div>
            <div className="property-item">
              <strong>Flexural Strength:</strong> {outputs.flexuralStrength.toFixed(2)} MPa
            </div>
            <div className="property-item">
              <strong>Setting Time:</strong> {outputs.settingTime.toFixed(2)} hrs
            </div>
            <div className="property-item">
              <strong>28-Days Compressive Strength:</strong> {outputs.compressiveStrength.toFixed(2)} MPa
            </div>
            <div className="property-item">
              <strong>Water Absorption:</strong> {outputs.waterAbsorption.toFixed(2)} %
            </div>
            <div className="property-item">
              <strong>Split Tensile Strength:</strong> {outputs.splitTensileStrength.toFixed(2)} MPa
            </div>
            <div className="property-item">
              <strong>Chloride Resistance:</strong> {outputs.chlorideResistance.toFixed(2)} %
            </div>
            <div className="property-item">
              <strong>Thermal Conductivity:</strong> {outputs.thermalConductivity.toFixed(3)} W/m·K
            </div>
            <div className="property-item">
              <strong>Carbonation Depth:</strong> {outputs.carbonationDepth.toFixed(2)} mm
            </div>
            <div className="property-item">
              <strong>Tensile Test Strength:</strong> {outputs.tensileTestStrength.toFixed(2)} MPa
            </div>
          </div>
        )}
      </main>
      <footer className="app-footer"> {/* Added footer */}
        <p>&copy; Thank You</p>
      </footer>
    </div>
  );
}

export default App;