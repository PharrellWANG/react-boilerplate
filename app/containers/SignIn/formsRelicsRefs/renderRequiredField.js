/* eslint-disable react/prop-types */
import React from 'react';
import TextField from 'material-ui/TextField';

const renderRequiredField = ({
  classes,
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const errorx = !!((touched && error));
  return (
    <div>
      <div>
        <TextField
          required
          error={errorx}
          helperText={touched && error}
          {...input}
          type={type}
          label={label}
          placeholder={label}
          className={classes.textField}
          margin="normal"
        />
      </div>
    </div>
  );
};

export default renderRequiredField;
