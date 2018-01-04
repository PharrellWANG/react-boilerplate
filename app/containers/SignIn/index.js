/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectIsLoggedIn } from './selectors';
import reducer from './reducer';
// import saga from './saga';
import messages from './messages';
// import { changeUsername } from '../HomePage/actions'
import { defaultAction } from './actions';

export class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.myFakeBoy();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>SignIn</title>
          <meta name="description" content="Description of SignIn" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        { this.props.isLoggedIn ? <div>formmer</div> : <div>lattert</div>}
      </div>
    );
  }
}

SignIn.propTypes = {
  myFakeBoy: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
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
  // withSaga,
  withConnect,
)(SignIn);
