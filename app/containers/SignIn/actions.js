/*
 *
 * SignIn actions
 *
 */

import {
  DEFAULT_ACTION,
  CHECK_EMAIL_IN_SIGN_IN_FORM,
  GO_TO_NEXT_FORM_PAGE,
  GO_TO_PREVIOUS_FORM_PAGE,
  SHOW_PROGRESS_INDICATOR,
  HIDE_PROGRESS_INDICATOR,
  TOGGLE_PW_FIELD_VISIBILITY,
  SET_HINT_MSG_ID,
  SIGN_IN_REQUEST,
  SHOW_PW_ERROR_HINT,
  HIDE_PW_ERROR_HINT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function checkEmailInSignInForm(email) {
  return {
    type: CHECK_EMAIL_IN_SIGN_IN_FORM,
    email,
  };
}

export function nextPage() {
  return {
    type: GO_TO_NEXT_FORM_PAGE,
  };
}

export function previousPage() {
  return {
    type: GO_TO_PREVIOUS_FORM_PAGE,
  };
}

export function showProgressIndicator() {
  return {
    type: SHOW_PROGRESS_INDICATOR,
  };
}

export function hideProgressIndicator() {
  return {
    type: HIDE_PROGRESS_INDICATOR,
  };
}

export function togglePwFieldVisibility() {
  return {
    type: TOGGLE_PW_FIELD_VISIBILITY,
  };
}

export function setHintMsg(msgId) {
  return {
    type: SET_HINT_MSG_ID,
    msgId,
  };
}

export function signIn(email, pw) {
  return {
    type: SIGN_IN_REQUEST,
    email,
    pw,
  };
}

export function showPwErrorHint() {
  return {
    type: SHOW_PW_ERROR_HINT,
  };
}

export function hidePwErrorHint() {
  return {
    type: HIDE_PW_ERROR_HINT,
  };
}
