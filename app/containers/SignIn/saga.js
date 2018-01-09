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
  const requestURL = 'http://218.255.104.158:6789/zwap-pay/check-if-account-exist/';
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
    yield call(delay, 3000);
    yield put(hideProgressIndicator());
    console.log('--------- Delay end. 3 seconds');
    const data = yield call(request, requestURL, options);
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
