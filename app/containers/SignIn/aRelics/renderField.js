/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

// eslint-disable-next-line react/prop-types
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;
