import React from 'react';

const Form = ({ countries }) => {
  return (
    <section className="form-container">
      <div className="text-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit suscipit est vel euismod. Integer convallis at est non sollicitudin. Etiam consequat nisl semper sem pharetra viverra. Curabitur dictum sem id leo lacinia vulputate. Quisque imperdiet sed dolor sit amet eleifend. Cras ultricies fermentum nibh a pulvinar. Nam sit amet sem congue mi placerat aliquam sit amet eu magna.
        </p>
      </div>

      <form className="form">
        {renderField('Social security number', 'text')}
        {renderField('Phone', 'phone')}
        {renderField('Email', 'email')}
        {renderSelect('Country', countries)}
        <button>Submit</button>
      </form>
    </section>
  )
}

const renderField = (label, inputType) => (
  <div className="field">
    <label>{label}</label>
    <input type={inputType} />
  </div>
)

const renderSelect = (label, options) => (
  <div className="field">
    <label>{label}</label>
    <select>
      <option disabled selected>Select a country</option>
      {options.map(item => <option value={item.name}>{item.name}</option>)}
    </select>
  </div>
)

export default Form;