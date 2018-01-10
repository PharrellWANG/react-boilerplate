/* eslint-disable no-console */
import request from 'utils/request';
import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// import { call, takeLatest } from 'redux-saga/effects';
import {
  nextPage,
  showProgressIndicator,
  hideProgressIndicator,
  // cancelFailed,
  // SubmitStatus,
} from './actions';
// Individual exports for testing
import {
  CHECK_EMAIL_IN_SIGN_IN_FORM,
} from './constants';

export function* checkEmailSaga(action) {
  console.log('===============checkEmailSaga==========, action data');
  console.log(JSON.stringify({ email: action.email }));
  // console.log(action);
  // console.log(action.email);
  // console.log(typeof (action.email)); // type: string
  // console.log(JSON.stringify(action.email));
  const requestURL = 'http://127.0.0.1:8000/zwap/api/v2/check-email/';
  // const requestURL = 'https://platform.zwap.hk/zwap-pay/check-if-account-exist/';
  const options = {
    method: 'POST',
    body: JSON.stringify({ email: action.email }),
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    console.log('--------- Now start delaying...');
    yield put(showProgressIndicator());
    yield call(delay, 500);
    yield put(hideProgressIndicator());
    console.log('--------- Delay end. 0.5 seconds');
    const data = yield call(request, requestURL, options);
    console.log('if status is 3, it should return a modal ask the user to register first.', data.status);
    console.log(typeof (data.status));
    // type number
    //
    // 1. previously registered, not activated yet,
    //         now is waiting for activation --> need to activate
    //
    //     INACTIVE --> display model ask the user to click activate link in their email, after that ask them to enter password
    //
    // 2. previously registered and activated, now is active --> good status
    //
    //     ACTIVE --> proceed to password page
    //
    // 3. previously not registered --> need to be registered
    //
    //     UNREGISTERED --> display model ask the user to register first, a register link button on model
    //
    // 4. from old platform,
    //
    //     FROM_V1_INACTIVE --> display model ask the user to click activate link in their email, after that ask them to enter password
    //
    // 5. previously registered and activated, now is locked --> need to unlock
    //
    //     LOCKED --> display model ask the user to click activate link in their email, after that ask them to enter password
    // yield call(request, requestURL, options);
    console.log('--------- yes, it will be fine');
    console.log('response in checkEmailSaga: ', data);
    yield put(nextPage());
  } catch (err) {
    console.log('--------- error, please try again later.');
    // yield put(accountCheckingFail());
  }
}

export default function* fetchAndLoadData() {
  yield [
    takeLatest(CHECK_EMAIL_IN_SIGN_IN_FORM, checkEmailSaga),
  ];
}
