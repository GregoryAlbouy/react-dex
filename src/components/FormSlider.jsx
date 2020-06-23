import'./FormSlider.scss'
import React, { useState } from 'react';

const FormSlider = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
    props.handleChange(event);
  };

  return (
    <input
      className="form-slider"
      type="range"
      min="0"
      max={props.max}
      value={value}
      onChange={handleChange}
    />
  );
} 

export default FormSlider