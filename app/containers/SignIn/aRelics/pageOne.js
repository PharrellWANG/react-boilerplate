/* eslint-disable react/prop-types */
import React from 'react';
import {
  Checkbox,
  Select,
  TextField,
  Switch,
} from 'redux-form-material-ui';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={TextField}
          placeholder="First Name"
          label="First Name"
        />
      </div>
      <div>
        <Field
          name="lastName"
          component={TextField}
          placeholder="Last Name"
          label="Last Name"
        />
      </div>
      <div>
        <FormControl>
          <InputLabel htmlFor="driver">Driver</InputLabel>
          <Field
            name="driver"
            component={Select}
            placeholder="Driver"
            autoWidth
          >
            <MenuItem value="alice@redux-pizza.com">Alice</MenuItem>
            <MenuItem value="bob@redux-pizza.com">Bob</MenuItem>
            <MenuItem value="carl@redux-pizza.com">Carl</MenuItem>
          </Field>
        </FormControl>
      </div>

      <FormControlLabel control={<Field name="agreeToTerms" component={Checkbox} />} label="Agree to terms?" />

      <FormControlLabel control={<Field name="receiveEmails" component={Switch} />} label="Please spam me!" />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
