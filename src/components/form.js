import React, { useState } from 'react';
import useLocalStorage from '../hooks/localStorageHook';
import {
  regSSN,
  regEmail,
  regPhoneNumber
} from '../utils/formValidators';
import { useSelector } from 'react-redux';

const Form = () => {
  const [ssn, setSsn] = useLocalStorage('form-input-ssn');
  const [phone, setPhone] = useLocalStorage('form-input-phone');
  const [email, setEmail] = useLocalStorage('form-input-email');

  const countries = useSelector(state => state?.payload);

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateInput(ssn, regSSN)
      && validateInput(phone, regPhoneNumber)
      && validateInput(email, regEmail);

    if (success) {
      cleanFields();
      console.log("Success");
    }
  }

  const cleanFields = () => {
    setSsn('');
    setPhone('');
    setEmail('');

    console.log('clean');
  }

  const handleKeyUp = (e, validator, setField) => {
    setField(e.target.value);
    validateInput(e.target.value, validator);
  }

  const validateInput = (value, regex) => regex.test(value);

  const renderField = (label, validator, setField, defaultValue) => (
    <div className="field">
      <label>{label}</label>
      <input required value={defaultValue} onChange={(e) => handleKeyUp(e, validator, setField, defaultValue)} />
    </div>
  )

  const renderSelect = (label, options) => {
    return (
      <div className="field">
        <label>{label}</label>
        <select required className="country-selector">
          <option disabled selected>Select a country</option>
          {options && options.map(item => <option key={item.alpha3Code} value={item.name}>{item.name}</option>)}
        </select>
      </div>
    )
  }

  return (
    <section className="form-container">
      <div className="text-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit suscipit est vel euismod.
        </p>
      </div>

      <form className="form">
        {renderField('Social security number', regSSN, setSsn, ssn)}
        {renderField('Phone', regPhoneNumber, setPhone, phone)}
        {renderField('Email', regEmail, setEmail, email)}
        {renderSelect('Country', countries)}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default Form;