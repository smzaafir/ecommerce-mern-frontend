import React from 'react';

const CustomInput = (props) => {
  const { type, label, iId, iClass } = props;
  return (
    <div className="form-floating mb-3">
      <input 
        type={type} 
        className={`form-control ${iClass}`} 
        id={iId} 
        placeholder={label} 
      />
      <label htmlFor={iId}>{label}</label>
    </div>
  );
};

export default CustomInput;
