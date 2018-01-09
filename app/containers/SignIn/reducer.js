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
} from './constants';

const initialState = fromJS({
  isLoggedIn: isLoggedIn(),
  formPageNumber: 1,
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
    default:
      return state;
  }
}

export default signInReducer;
