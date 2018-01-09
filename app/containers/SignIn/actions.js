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
