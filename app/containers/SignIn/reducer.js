/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import { isLoggedIn } from '../../utils/localStorage';
import {
  DEFAULT_ACTION,
  // CHECK_EMAIL_IN_SIGN_IN_FORM,
  GO_TO_PREVIOUS_FORM_PAGE,
  GO_TO_NEXT_FORM_PAGE,
  SHOW_PROGRESS_INDICATOR,
  HIDE_PROGRESS_INDICATOR,
} from './constants';

const initialState = fromJS({
  isLoggedIn: isLoggedIn(),
  formPageNumber: 1,
  progressIndicator: false,
// token: getLocalToken(),
// email: getLocalEmail(),
// type: getLocalType(),
// errors: {}
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GO_TO_PREVIOUS_FORM_PAGE:
      return state
        .set('formPageNumber', state.get('formPageNumber') - 1);
    case GO_TO_NEXT_FORM_PAGE:
      return state
        .set('formPageNumber', state.get('formPageNumber') + 1);
    case SHOW_PROGRESS_INDICATOR:
      // console.log(state.get('progressIndicator') === 0);
      return state
        .set('progressIndicator', true);
    case HIDE_PROGRESS_INDICATOR:
      // console.log(state.get('progressIndicator') === 1);
      return state
        .set('progressIndicator', false);
    default:
      return state;
  }
}

export default signInReducer;
