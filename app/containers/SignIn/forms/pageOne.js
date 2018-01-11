/* eslint-disable react/prop-types */
import React from 'react';
import { fromJS } from 'immutable';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
// import { Button } from 'material-ui/Button';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import RaisedButton from 'material-ui-previous/RaisedButton';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';
import renderTextField from '../../../components/Fields/renderTextField';

const WizardFormFirstPage = (props) => {
  const {
    handleSubmit,
    paddingTop,
    buttonNextGroup,
    // createAccount,
    signUpButton,
    buttonNextStepDivRight,
    showProgressIndicator,
    buttonProgressWrapper,
    absoluteProgress,
    hintMsgId,
  } = props;

  let hintMsg;
  let hintJsx;
  if (hintMsgId === 1) {
    hintMsg = 'Please verify your email before sign in. (A new account activation email has been sent 📬.)';
    hintJsx = (<Typography type="body1" gutterBottom style={{ color: '#9b7e00' }}>
      {hintMsg}
    </Typography>);
  } else if (hintMsgId === 3) {
    hintMsg = 'Please sign up. (We cannot find your account 😳.)';
    hintJsx = (<Typography type="body1" gutterBottom style={{ color: '#d50000' }}>
      {hintMsg}
    </Typography>);
  } else if (hintMsgId === 4) {
    hintMsg = 'Welcome to our new App 🎉. To help us secure your account, please verify your email before sign in. (An verification email has been sent.)';
    hintJsx = (<Typography type="body1" gutterBottom style={{ color: '#087f23' }}>
      {hintMsg}
    </Typography>);
  } else if (hintMsgId === 5) {
    hintMsg = 'Please unlock 🔓 your account before sign in. (Your account has been locked due to 10 times password input failure. An email for unlocking account has been sent to you 📬,)';
    hintJsx = (<Typography type="body1" gutterBottom style={{ color: '#8d4a00' }}>
      {hintMsg}
    </Typography>);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ height: 96 }}>
        <Typography type="headline" gutterBottom>
          Sign in
        </Typography>
        { hintJsx }
      </div>
      <div className={paddingTop}>
        <Field
          // onFocus={setHintMsgAction(0)}
          name="signInEmail"
          fullWidth
          underlineStyle={{ borderColor: '#6f6e6b' }}
          underlineFocusStyle={{ borderColor: '#00b0c1' }}
          component={renderTextField}
          autoFocus
          // label="Email"
          floatingLabelText="Enter your email"
          // floatingLabelFocusStyle={{ color: '#00b0c1', fontFamily: 'Roboto' }}
        />
      </div>
      <div className={buttonNextGroup}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={6}>
            <div className={buttonProgressWrapper}>
              <Button className={signUpButton} component={Link} to="/signup">
                {/* <Button component={Link} to="/signup"> */}
                Sign Up
              </Button>
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={buttonNextStepDivRight}>
              <div className={buttonProgressWrapper}>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                  <RaisedButton
                    label="Next"
                    labelColor="#ffffff"
                    backgroundColor="#00b0c1"
                    type="submit"
                    disabled={showProgressIndicator}
                  />
                </MuiThemeProvider>
                {showProgressIndicator && <CircularProgress size={28} className={absoluteProgress} thickness={8} />}
              </div>
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
    // signInEmail: 'default email null',
  }),
  validate,
})(WizardFormFirstPage);
