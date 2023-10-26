import React, { useState } from 'react';
import './FormInput.css';

const FormInput = ({onChange,...input}) => {
  
  const [focussed, setFocussed] = useState(false);
  
  function handleFocus(e)
  {
    setFocussed(true);
  }

  let {placeholder, errorMessage} = input;
  return (
    <div className="form-input">
      <input className='form-control' placeholder={placeholder} onChange={onChange} {...input} onBlur={handleFocus} focussed={focussed.toString()}/>
      <div className='error-message'>{errorMessage}</div>
    </div>
  );
}

export default FormInput;
