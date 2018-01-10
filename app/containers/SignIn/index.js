/* eslint-disable no-console */
/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { withTheme, withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
// import { LinearProgress } from 'material-ui/Progress';
// import Typography from 'material-ui/Typography';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectIsLoggedIn,
  makeSelectFormPageNumber,
  makeSelectProgressIndicator,
  // selectEmail,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import zwapLogo from '../../images/ZwapLogoRGB_1_340x100.png';
// import messages from './messages';
// import { changeUsername } from '../HomePage/actions'
import {
  defaultAction,
  nextPage,
  previousPage,
  checkEmailInSignInForm,
} from './actions';
// import bgImageAsHK from '../../images/bg/ocean.jpg';
// import BackgroundImage from 'react-background-image-loader';
import WizardForm from './forms/index';
import styles from './styles';
import Footer from '../../components/FooterSmaller';

// let imgUrl = 'images/hk.jpg';

export class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.myFakeBoy();
  }

  handleSubmit = (values) => {
    console.log('Here is the submitted values in the form: >>>>');
    console.log(values.toJS());
  }

  render() {
    const { classes, formPage, goPreviousPage, checkEmail, showProgressIndicator } = this.props;

    const formProps = {
      paddingTop: classes.paddingTop,
      buttonNextGroup: classes.buttonNextGroup,
      createAccount: classes.createAccount,
      buttonNextStepDivRight: classes.buttonNextStepDivRight,
      buttonProgressWrapper: classes.buttonProgressWrapper,
      pwVisiControlButton: classes.pwVisiControlButton,
      absoluteProgress: classes.absoluteProgress,
      signUpButton: classes.signUpButton,
      pwVisiWrapper: classes.pwVisiWrapper,
      onSubmit: this.handleSubmit,
      formPage,
      checkEmail,
      goPreviousPage,
      showProgressIndicator,
    };

    return (
      <div className={classes.rootDiv}>
        <Helmet>
          <title>SignIn</title>
          <meta name="description" content="Description of SignIn" />
        </Helmet>
        <div className={classes.signInContainer}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <Hidden xsDown>
                <div className={classes.buttonProgressWrapper}>
                  <Paper className={classes.signInPaper}>
                    <div>
                      <img className={this.props.classes.logoImage} src={zwapLogo} alt="zwapLogo" />
                    </div>
                    <WizardForm {...formProps} />
                  </Paper>
                </div>
              </Hidden>
              <Hidden smUp>
                <div className={classes.marginOnSmallScreen}>
                  <div>
                    <img className={this.props.classes.logoImage} src={zwapLogo} alt="zwapLogo" />
                  </div>
                  <WizardForm {...formProps} />
                </div>
              </Hidden>
              <div>
                <Footer />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  myFakeBoy: PropTypes.func.isRequired,
  checkEmail: PropTypes.func.isRequired,
  showProgressIndicator: PropTypes.bool.isRequired,
  goPreviousPage: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired,
  formPage: PropTypes.number.isRequired,
  classes: PropTypes.object,
  // selectEmail: PropTypes.func.isRequired,
  // theme: PropTypes.object,
};
//
const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
  formPage: makeSelectFormPageNumber(),
  showProgressIndicator: makeSelectProgressIndicator(),
  // selectEmail: selectEmail(),
});
//
export function mapDispatchToProps(dispatch) {
  // noinspection JSUnusedGlobalSymbols
  return {
    myFakeBoy: () => {
      dispatch(defaultAction());
    },
    // pha.zx: by default, the value would be
    // the fields values in redux form
    // applicable to wizard form.
    checkEmail: (value) => {
      // console.log('dispatchToProps: >>>> ');
      // console.log(value.toJS().signInEmail);
      dispatch(checkEmailInSignInForm(value.toJS().signInEmail));
    },
    goNextPage: () => {
      dispatch(nextPage());
    },
    goPreviousPage: () => {
      dispatch(previousPage());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// const withConnect = connect(null, mapDispatchToProps);
// const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'signIn', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withReducer,
  withStyles(styles),
  withSaga,
  withTheme(),
  withTheme(),
  withConnect,
)(SignIn);
