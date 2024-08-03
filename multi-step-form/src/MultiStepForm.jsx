import React, { useState, useEffect } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) setData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(data));
  }, [data]);

  const validateStep = () => {
    let newErrors = {};
    switch (step) {
      case 1:
        if (!data.name) newErrors.name = 'Name is required';
        if (!data.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email is invalid';
        if (!data.phone) newErrors.phone = 'Phone is required';
        break;
      case 2:
        if (!data.address1) newErrors.address1 = 'Address Line 1 is required';
        if (!data.zip) newErrors.zip = 'Zip Code is required';
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    if (validateStep()) {
      alert('Form submitted!');
      setTimeout(() => {
        localStorage.removeItem('formData');
        setData({
          name: '',
          email: '',
          phone: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: ''
        });
        setStep(1);
      }, 1000);
    }
  };

  return (
    <div className="form-container">
      {step === 1 && <FormStep1 data={data} setData={setData} nextStep={nextStep} errors={errors} />}
      {step === 2 && <FormStep2 data={data} setData={setData} prevStep={prevStep} nextStep={nextStep} errors={errors} />}
      {step === 3 && <FormStep3 data={data} prevStep={prevStep} submitForm={submitForm} />}
    </div>
  );
};

export default MultiStepForm;
