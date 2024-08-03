// FormStep2.jsx
import React from 'react';

const FormStep2 = ({ data, setData, prevStep, nextStep, errors }) => {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <input
        type="text"
        placeholder="Address Line 1"
        value={data.address1}
        onChange={(e) => setData({ ...data, address1: e.target.value })}
      />
      {errors.address1 && <p className="error">{errors.address1}</p>}
      <input
        type="text"
        placeholder="Address Line 2"
        value={data.address2}
        onChange={(e) => setData({ ...data, address2: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={data.city}
        onChange={(e) => setData({ ...data, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="State"
        value={data.state}
        onChange={(e) => setData({ ...data, state: e.target.value })}
      />
      <input
        type="text"
        placeholder="Zip Code"
        value={data.zip}
        onChange={(e) => setData({ ...data, zip: e.target.value })}
      />
      {errors.zip && <p className="error">{errors.zip}</p>}
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default FormStep2;
