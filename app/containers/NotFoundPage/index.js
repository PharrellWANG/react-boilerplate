/* eslint-disable react/prop-types */
/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';

// import H1 from 'components/H1';
import messages from './messages';

const styles = {
  div: {
    // height: '200px',
    // width: '400px',
    // background: 'black',
    // position: 'fixed',
    // top: '50%',

    textAlign: 'center',
    marginTop: '100px',
    // marginLeft: '-200px',
  },
};


const NotFound = (props) => (
  <div className={props.classes.div}>
    <h2>
      <FormattedMessage {...messages.header} />
    </h2>
  </div>
  );

export default compose(
  withStyles(styles),
)(NotFound);
