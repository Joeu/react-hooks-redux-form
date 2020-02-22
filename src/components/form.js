import React, { useEffect, useRef } from 'react';
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

  const ssnInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const countries = useSelector(state => state?.payload);

  useEffect(() => {
    setValidationStyle(ssn, regSSN, ssnInputRef);
    setValidationStyle(phone, regPhoneNumber, phoneInputRef);
    setValidationStyle(email, regEmail, emailInputRef);
  }, [])

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

  const handleChange = (e, validator, setField, ref) => {
    console.log(e.target);
    const value = e.target.value;
    setField(value);
    setValidationStyle(value, validator, ref);
  }

  const setValidationStyle = (value, validator, ref) => {
    const valid = validateInput(value, validator);
    ref.current.style = valid ? 'border-color: blue;' : 'border-color: red;';
  }


  const validateInput = (value, regex) => regex.test(value);

  const renderField = (label, validator, setField, defaultValue, ref) => (
    <div className="field">
      <label>{label}</label>
      <input ref={ref} required value={defaultValue} onChange={(e) => handleChange(e, validator, setField, ref)} />
    </div>
  )

  const renderSelect = (label, options) => {
    return (
      <div className="field">
        <label>{label}</label>
        <select required className="country-selector">
          <option disabled>Select a country</option>
          {options && options.map(item => <option selected={item.name === "Sweden"} key={item.alpha3Code} value={item.name}>{item.name}</option>)}
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
        {renderField('Social security number', regSSN, setSsn, ssn, ssnInputRef)}
        {renderField('Phone', regPhoneNumber, setPhone, phone, phoneInputRef)}
        {renderField('Email', regEmail, setEmail, email, emailInputRef)}
        {renderSelect('Country', countries)}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default Form;