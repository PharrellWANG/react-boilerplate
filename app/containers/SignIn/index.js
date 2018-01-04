/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles/index';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectIsLoggedIn } from './selectors';
import reducer from './reducer';
// import saga from './saga';
import zwapLogo from '../../images/ZwapLogoRGB_1_340x100.png';
import messages from './messages';
// import { changeUsername } from '../HomePage/actions'
import { defaultAction } from './actions';
// import bgImageAsHK from '../../images/bg/ocean.jpg';
// import BackgroundImage from 'react-background-image-loader';

// let imgUrl = 'images/hk.jpg';

const styles = (theme) => ({
  rootDiv: {
    // backgroundImage: `url(${bgImageAsHK})`,
    // backgroundSize: 'cover',
    // overflow: 'hidden',
    // width: '100%',
    // height: '100%',
    // position: 'fixed',
    // display: 'flex',
    // JustifyContent: 'center',
    // objectFit: 'cover',
  },
  imageDiv: {
    height: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  paperDiv: {
    margin: 'auto',
    height: 'auto',
    width: 'auto',
    verticalAlign: 'middle',
    JustifyContent: 'center',
    padding: 50,
    color: theme.palette.text.secondary,
  },
  signInContainer: {
    height: 'auto',
    position: 'absolute',
    top: '15%',
    left: 10,
    right: 10,
    margin: 'auto',
    maxWidth: 460,
    minHeight: 640,
  },
  signInPaper: {
    padding: 42,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  paddingTop: {
    paddingTop: 90,
  },
  logoImage: {
    margin: 'auto',
    // textAlign: 'left',
    // width: '100%',
    height: 120,
    verticalAlign: 'center',
    // horizontalAlign: 'center',
    // textAlign: 'center',
    // display: 'block',
    paddingTop: 0,
    paddingBottom: 56,
  },
  flex: {
    flex: 1,
  },
  subDiv: {
    paddingLeft: 6,
  },
  center: {
    textAlign: 'center',
  },
});

export class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.myFakeBoy();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootDiv}>
        <Helmet>
          <title>SignIn</title>
          <meta name="description" content="Description of SignIn" />
        </Helmet>
        <div className={classes.signInContainer}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.signInPaper}>
                {/* <Typography type="title" color="inherit" className={this.props.classes.flex} gutterBottom> */}
                {/* <a href="https://www.zwap.hk"> */}
                <div className={classes.center}>
                  <img className={this.props.classes.logoImage} src={zwapLogo} alt="zwapLogo" />
                </div>
                {/* </a> */}
                {/* </Typography> */}
                {/* <div className={classes.subDiv}> */}
                <Typography type="title" component="h3" gutterBottom>
                  Sign In
                </Typography>
                <Typography component="body1" gutterBottom className={classes.paddingTop}>
                  <FormattedMessage {...messages.header} />
                  {this.props.isLoggedIn ? <div>yes, logged in already</div> : <div>not logged in yet</div>}
                </Typography>
                {/* </div> */}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  myFakeBoy: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object,
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
  withConnect,
)(SignIn);
