/* eslint-disable react/prop-types */
import React from 'react';
import { FormHelperText } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { Select } from 'redux-form-material-ui';

const renderSelect = ({ meta: { touched, error }, ...props, label }) => (
  <div>
    {label && <InputLabel error={Boolean(touched && error)}>{label}</InputLabel>}
    <Select {...props} error={Boolean(error && touched)} />
    {(touched && error) && <FormHelperText error>{error}</FormHelperText>}
  </div>
);

export default renderSelect;
