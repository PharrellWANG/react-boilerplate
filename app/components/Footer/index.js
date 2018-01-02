import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
// import { FormattedMessage } from 'react-intl';
import { withStyles, withTheme } from 'material-ui/styles/index';
import Typography from 'material-ui/Typography';

// import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
// import messages from './messages';

const styles = {
  section: {
    paddingLeft: 10,
  },
};

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <section className={classes.section}>
          <Typography gutterBottom noWrap>
            {/* &copy; <FormattedMessage {...messages.copyright} /> 2018, <FormattedMessage {...messages.myName} /> */}
            &copy; Copyright 2018, the Author
          </Typography>
        </section>
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withTheme(),
)(Footer);
// export default withStyles(styles)(Footer);
