/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import { isLoggedIn } from '../../utils/localStorage';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  isLoggedIn: isLoggedIn(),
// token: getLocalToken(),
// email: getLocalEmail(),
// type: getLocalType(),
// errors: {}
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default signInReducer;
