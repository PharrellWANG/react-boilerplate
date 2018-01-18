/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
// import { isLoggedIn } from '../../utils/localStorage';
import {
  DEFAULT_ACTION,
  // CHECK_EMAIL_IN_SIGN_IN_FORM,
  GO_TO_PREVIOUS_FORM_PAGE,
  GO_TO_NEXT_FORM_PAGE,
  SHOW_PROGRESS_INDICATOR,
  HIDE_PROGRESS_INDICATOR,
  TOGGLE_PW_FIELD_VISIBILITY,
  SET_HINT_MSG_ID,
  HIDE_PW_ERROR_HINT,
  SHOW_PW_ERROR_HINT,
} from './constants';

const initialState = fromJS({
  // isLoggedIn: isLoggedIn(),
  formPageNumber: 1,
  progressIndicator: false,
  pwFieldVisible: false,
  hintMsgId: 0,
  showPwErrorOrNot: false,
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
      return state
        .set('progressIndicator', true);
    case HIDE_PROGRESS_INDICATOR:
      return state
        .set('progressIndicator', false);
    case TOGGLE_PW_FIELD_VISIBILITY:
      return state
        .set('pwFieldVisible', !state.get('pwFieldVisible'));
    case SET_HINT_MSG_ID:
      return state
        .set('hintMsgId', action.msgId);
    case HIDE_PW_ERROR_HINT:
      return state
        .set('showPwErrorOrNot', false);
    case SHOW_PW_ERROR_HINT:
      return state
        .set('showPwErrorOrNot', true);
    default:
      return state;
  }
}

export default signInReducer;
