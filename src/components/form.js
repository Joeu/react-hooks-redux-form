import React, { useState } from 'react';
import useLocalStorage from '../hooks/localStorageHook';
import {
  regSSN,
  regEmail,
  regPhoneNumber
} from '../utils/formValidators';
import { useSelector } from 'react-redux';

const Form = () => {
  const [formValues, setFormValues] = useLocalStorage('form-input-values');
  const [ssn, setSsn] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const countries = useSelector(state => state?.payload);

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateInput(formValues.ssn, regSSN)
      && validateInput(formValues.phone, regPhoneNumber)
      && validateInput(formValues.email, regEmail);

    if (success) {
      cleanFields();
      console.log("Success");
    }
  }

  const cleanFields = () => {
    setFormValues({});
    console.log('formValues: ', formValues)
  }

  const handleKeyUp = (e, validator, setField) => {
    setField(e.target.value);
    validateInput(e.target.value, validator);
    setFormValues({ ssn, phone, email });
  }

  const validateInput = (value, regex) => regex.test(value);

  const renderField = (label, validator, setField, defaultValue) => (
    <div className="field">
      <label>{label}</label>
      <input required defaultValue={defaultValue} onKeyUp={(e) => handleKeyUp(e, validator, setField, defaultValue)} />
    </div>
  )

  const renderSelect = (label, options) => {
    return (
      <div className="field">
        <label>{label}</label>
        <select required>
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
        {renderField('Social security number', regSSN, setSsn, formValues.ssn)}
        {renderField('Phone', regPhoneNumber, setPhone, formValues.phone)}
        {renderField('Email', regEmail, setEmail, formValues.email)}
        {renderSelect('Country', countries)}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default Form;