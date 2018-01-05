/* eslint-disable react/prop-types */
import React from 'react';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { Select as MUISelect } from 'redux-form-material-ui';

const selectWrapper = ({ meta: { touched, error }, ...others }) => (
  <FormControl>
    { touched && error && (
      <FormHelperText htmlFor="form-selector" error={!!error}>
        {error}
      </FormHelperText>
    )}
    <MUISelect {...others} error={!!error} id="form-selector" />
  </FormControl>
);

export default selectWrapper;
