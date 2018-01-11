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
    if (nextProps.showHint !== this.props.showHint) {
      if (nextProps.showHint === undefined || nextProps.showHint === true) {
        this.props.setHintMsgAction(0);
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
  let showHint = false;
  try {
    showHint = fields.toJS().signInEmail.active;
  } catch (err) {
    showHint = false;
  }
  return {
    signInEmail,
    showHint,
// fullName: `${firstName || ''} ${lastName || ''}`,
  };
})(WizardForm);

export default WizardForm;
