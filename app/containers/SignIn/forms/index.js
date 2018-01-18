/* eslint-disable no-console,react/prefer-stateless-function,import/no-mutable-exports,no-class-assign */
/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formValueSelector, getFormMeta } from 'redux-form/immutable';
// import { green } from 'material-ui/colors';
// import { withStyles } from 'material-ui/styles';
import WizardFormFirstPage from './pageOne';
import WizardFormSecondPage from './pageTwo';
// import WizardFormThirdPage from './pageThree';pageThree
// import styles from './styles';

class WizardForm extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.signinEmailFieldTurnsToActive !== this.props.signinEmailFieldTurnsToActive) {
      if (nextProps.signinEmailFieldTurnsToActive === undefined || nextProps.signinEmailFieldTurnsToActive === true) {
        this.props.setHintMsgAction(0);
      }
    }
    if (nextProps.pwFieldTurnsToActive !== this.props.pwFieldTurnsToActive) {
      if (nextProps.pwFieldTurnsToActive === undefined || nextProps.pwFieldTurnsToActive === true) {
        this.props.hidePwHintAction();
      }
    }
  }

  render() {
    const {
      onSubmit,
      paddingTop,
      buttonNextGroup,
      createAccount,
      buttonNextStepDivRight,
      formPage,
      signUpButton,
      goPreviousPage,
      pwVisiControlButton,
      pwVisiWrapper,
      checkEmail,
      showProgressIndicator,
      absoluteProgress,
      buttonProgressWrapper,
      makeSelectPwVisi,
      togglePwVisiAction,
      signInEmail,
      hintMsgId,
      showPwHintOrNot,
    } = this.props;
    return (
      <div>
        {formPage === 1 &&
        <WizardFormFirstPage
          hintMsgId={hintMsgId}
          signUpButton={signUpButton}
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
            showPwHintOrNot={showPwHintOrNot}
            signInEmail={signInEmail}
            makeSelectPwVisi={makeSelectPwVisi}
            togglePwVisiAction={togglePwVisiAction}
            buttonNextGroup={buttonNextGroup}
            pwVisiWrapper={pwVisiWrapper}
            pwVisiControlButton={pwVisiControlButton}
            createAccount={createAccount}
            buttonNextStepDivRight={buttonNextStepDivRight}
            showProgressIndicator={showProgressIndicator}
            absoluteProgress={absoluteProgress}
            buttonProgressWrapper={buttonProgressWrapper}
            paddingTop={paddingTop}
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

const selector = formValueSelector('wizard'); // <-- same as form name
WizardForm = connect((state) => {
  const signInEmail = selector(state, 'signInEmail');
  const fields = getFormMeta('wizard')(state);
  // pharrell:
  // the idea is when the signInField turns active from
  // inactive, we will dispatch an action in
  // componentWillReceiveProps to set displayError to false.
  let signinEmailFieldTurnsToActive = false;
  try {
    signinEmailFieldTurnsToActive = fields.toJS().signInEmail.active;
  } catch (err) {
    signinEmailFieldTurnsToActive = false;
  }
  //
  let pwFieldTurnsToActive = false;
  try {
    pwFieldTurnsToActive = fields.toJS().password.active;
  } catch (err) {
    pwFieldTurnsToActive = false;
  }

  return {
    signInEmail,
    signinEmailFieldTurnsToActive,
    pwFieldTurnsToActive,
// fullName: `${firstName || ''} ${lastName || ''}`,
  };
})(WizardForm);

export default WizardForm;
