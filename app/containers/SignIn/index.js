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
import Typography from 'material-ui/Typography';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectIsLoggedIn } from './selectors';
import reducer from './reducer';
// import saga from './saga';
import zwapLogo from '../../images/ZwapLogoRGB_1_340x100.png';
// import messages from './messages';
// import { changeUsername } from '../HomePage/actions'
import { defaultAction } from './actions';
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
    console.log('haha..');
    console.log(values.toJS());
  }

  render() {
    const { classes, theme } = this.props;

    const innerStyles = {
      displayPaper: theme.breakpoints.down('sm'),
    };

    console.log(innerStyles.displayPaper);

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
                <Paper className={classes.signInPaper}>
                  {/* <Typography type="title" color="inherit" className={this.props.classes.flex} gutterBottom> */}
                  {/* <a href="https://www.zwap.hk"> */}
                  <div>
                    <img className={this.props.classes.logoImage} src={zwapLogo} alt="zwapLogo" />
                  </div>
                  {/* </a> */}
                  {/* </Typography> */}
                  {/* <div className={classes.subDiv}> */}
                  <Typography type="headline" gutterBottom>
                    Sign in
                  </Typography>
                  <WizardForm onSubmit={this.handleSubmit} />
                  {/* <Typography component="body1" gutterBottom className={classes.paddingTop}> */}
                  {/* <FormattedMessage {...messages.header} /> */}
                  {/* {this.props.isLoggedIn ? <div>yes, logged in already</div> : <div>not logged in yet</div>} */}
                  {/* </Typography> */}
                  {/* </div> */}
                </Paper>
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
  // isLoggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object,
  theme: PropTypes.object,
};
//
const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
});
//
export function mapDispatchToProps(dispatch) {
  return {
    myFakeBoy: () => {
      dispatch(defaultAction());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// const withConnect = connect(null, mapDispatchToProps);
// const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'signIn', reducer });
// const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withReducer,
  withStyles(styles),
  // withSaga,
  withTheme(),
  withConnect,
)(SignIn);
