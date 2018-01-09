/* eslint-disable react/prop-types */
import React from 'react';
import { fromJS } from 'immutable';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import RaisedButton from 'material-ui-previous/RaisedButton';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';
import renderTextField from '../../../components/Fields/renderTextField';

const WizardFormFirstPage = (props) => {
  const {
    checkEmail,
    paddingTop,
    buttonNextGroup,
    createAccount,
    buttonNextStepDivRight,
  } = props;
  return (
    <form onSubmit={checkEmail}>
      <div className={paddingTop}>
        <Field
          name="firstName"
          fullWidth
          underlineStyle={{ borderColor: '#6f6e6b' }}
          underlineFocusStyle={{ borderColor: '#00b0c1' }}
          component={renderTextField}
          autoFocus
          label="First Name"
        />
      </div>
      <div className={buttonNextGroup}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={6}>
            <Typography className={createAccount} type="body2" gutterBottom>
              Create account
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={buttonNextStepDivRight}>
              <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <RaisedButton
                  label="Next"
                  labelColor="#ffffff"
                  backgroundColor="#00b0c1"
                  type="submit"
                />
              </MuiThemeProvider>
            </div>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  initialValues: fromJS({
    employed: 1,
  }),
  validate,
})(WizardFormFirstPage);
