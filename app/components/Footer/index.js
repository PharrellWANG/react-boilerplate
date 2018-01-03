import React from 'react';
import PropTypes from 'prop-types';
import LocaleToggle from 'containers/LocaleToggle';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { withStyles, withTheme } from 'material-ui/styles/index';
import Typography from 'material-ui/Typography';

// import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

const styles = {
  sectionLeft: {
    // paddingTop: 5,
    paddingLeft: 10,
  },
  sectionRight: {
    paddingRight: 10,
  },
  copyright: {
    // verticalAlign: 'middle',
    // fontSize: 18,
    paddingTop: 18,
  },
};

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <section className={classes.sectionLeft}>
          <Typography className={classes.copyright} gutterBottom noWrap>
            {/* &copy; <FormattedMessage {...messages.copyright} /> 2018, <FormattedMessage {...messages.myName} /> */}
            &copy; 2018, <FormattedMessage {...messages.theAuthor} />
          </Typography>
        </section>
        <section className={classes.sectionRight}>
          <LocaleToggle />
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
