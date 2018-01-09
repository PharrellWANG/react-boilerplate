/* eslint-disable no-console,react/prefer-stateless-function,import/no-mutable-exports */
/* eslint react/prop-types: 0 */
import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { formValueSelector } from 'redux-form/immutable';
// import { green } from 'material-ui/colors';
// import { withStyles } from 'material-ui/styles';
import WizardFormFirstPage from './pageOne';
import WizardFormSecondPage from './pageTwo';
// import WizardFormThirdPage from './pageThree';pageThree
// import styles from './styles';

const WizardForm = (props) => {
  const {
    onSubmit,
    paddingTop,
    buttonNextGroup,
    createAccount,
    buttonNextStepDivRight,
    formPage,
    goPreviousPage,
    checkEmail,
    showProgressIndicator,
    absoluteProgress,
    buttonProgressWrapper,
    // signInEmail,
  } = props;

  // console.log(typeof (checkEmail));

  return (
    <div>
      {formPage === 1 &&
      <WizardFormFirstPage
        onSubmit={checkEmail}
        paddingTop={paddingTop}
        buttonNextGroup={buttonNextGroup}
        createAccount={createAccount}
        buttonNextStepDivRight={buttonNextStepDivRight}
        showProgressIndicator={showProgressIndicator}
        absoluteProgress={absoluteProgress}
        buttonProgressWrapper={buttonProgressWrapper}
      />}
      {formPage === 2 && (
        <WizardFormSecondPage
          previousPage={goPreviousPage}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};


WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// const selector = formValueSelector('wizard'); // <-- same as form name
// WizardForm = connect((state) => {
//   // can select values individually
//   const signInEmail = selector(state, 'signInEmail');
//   console.log('sign in email value:');
//   console.log(signInEmail);
//   return {
//     signInEmail,
//     // favoriteColorValue,
//     // fullName: `${firstName || ''} ${lastName || ''}`,
//   };
// })(WizardForm);

export default WizardForm;
