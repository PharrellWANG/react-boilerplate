/* eslint-disable react/prop-types,jsx-a11y/label-has-for */
import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { CircularProgress } from 'material-ui/Progress';
import Visibility from 'material-ui-icons/Visibility';
// import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import RaisedButton from 'material-ui-previous/RaisedButton';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';
import renderPwField from '../../../components/Fields/renderPwField';

const WizardFormSecondPage = (props) => {
  const {
    handleSubmit,
    previousPage,
    paddingTop,
    buttonNextGroup,
    buttonNextStepDivRight,
    showProgressIndicator,
    buttonProgressWrapper,
    pwVisiControlButton,
    pwVisiWrapper,
    absoluteProgress,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Typography type="headline" gutterBottom>
        Welcome, xxx
      </Typography>
      <div className={paddingTop}>
        <div className={buttonProgressWrapper}>
          <Field
            name="password"
            fullWidth
            underlineStyle={{ borderColor: '#6f6e6b' }}
            underlineFocusStyle={{ borderColor: '#00b0c1' }}
            floatingLabelText="Enter your password"
            component={renderPwField}
            autoFocus
            // commend below line to make the user interface more clean
            // label="Enter your password"
          />
          <div className={pwVisiWrapper}>
            <IconButton className={pwVisiControlButton}>
              <Visibility />{/* {this.state.showPassword ? <VisibilityOff /> : <Visibility />} */}
            </IconButton>
          </div>
        </div>
      </div>
      <div className={buttonNextGroup}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={6}>
            <div className={buttonProgressWrapper}>
              <Button raised onClick={previousPage}>
                Back
              </Button>
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={buttonNextStepDivRight}>
              <div className={buttonProgressWrapper}>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                  <RaisedButton
                    label="Sign In"
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
  form: 'wizard', // Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
