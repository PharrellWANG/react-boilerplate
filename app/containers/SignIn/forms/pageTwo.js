/* eslint-disable react/prop-types,jsx-a11y/label-has-for,no-console */
import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { CircularProgress } from 'material-ui/Progress';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
// import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import RaisedButton from 'material-ui-previous/RaisedButton';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';
import renderPwField from '../../../components/Fields/renderPwField';
import renderTextField from '../../../components/Fields/renderTextField';

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
    makeSelectPwVisi,
    togglePwVisiAction,
    signInEmail,
    showPwHintOrNot,
  } = props;

  const hintJsx = (<Typography type="body1" gutterBottom style={{ color: '#d50000' }}>
                      Please input the right password
                    </Typography>);
  console.log('---------');
  console.log(showPwHintOrNot);
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ height: 96 }}>
        <Typography type="headline" gutterBottom>
          Welcome
        </Typography>
        <Typography type="body1" gutterBottom>
          {signInEmail}
        </Typography>
        {showPwHintOrNot && hintJsx}
      </div>
      <div className={paddingTop}>
        <div className={buttonProgressWrapper}>
          { !makeSelectPwVisi ?
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
            /> :
            <Field
              name="password"
              fullWidth
              underlineStyle={{ borderColor: '#6f6e6b' }}
              underlineFocusStyle={{ borderColor: '#00b0c1' }}
              floatingLabelText="Enter your password"
              component={renderTextField}
              autoFocus
              // commend below line to make the user interface more clean
              // label="Enter your password"
            />
          }
          <div className={pwVisiWrapper}>
            <IconButton className={pwVisiControlButton} onClick={togglePwVisiAction}>
              { makeSelectPwVisi ? <VisibilityOff /> : <Visibility /> }
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
