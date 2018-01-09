/* eslint-disable no-console,react/prefer-stateless-function */
/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { green } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import WizardFormFirstPage from './pageOne';
import WizardFormSecondPage from './pageTwo';
// import WizardFormThirdPage from './pageThree';pageThree
import styles from './styles';

class WizardForm extends Component {
  render() {
    const {
      onSubmit,
      paddingTop,
      buttonNextGroup,
      createAccount,
      buttonNextStepDivRight,
      formPage,
      goPreviousPage,
      checkEmail,
    } = this.props;

    return (
      <div>
        {formPage === 1 &&
        <WizardFormFirstPage
          onSubmit={checkEmail}
          paddingTop={paddingTop}
          buttonNextGroup={buttonNextGroup}
          createAccount={createAccount}
          buttonNextStepDivRight={buttonNextStepDivRight}
        />}
        {formPage === 2 && (
          <WizardFormSecondPage
            previousPage={goPreviousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(WizardForm);
