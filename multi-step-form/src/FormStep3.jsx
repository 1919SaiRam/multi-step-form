// FormStep3.jsx
import React from 'react';

const FormStep3 = ({ data, prevStep, submitForm }) => {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Address: {data.address1}, {data.address2}, {data.city}, {data.state}, {data.zip}</p>
      <button onClick={prevStep}>Back</button>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default FormStep3;
