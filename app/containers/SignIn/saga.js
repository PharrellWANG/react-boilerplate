/* eslint-disable no-console */
import request from 'utils/request';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { call, put, takeLatest } from 'redux-saga/effects';
// import { call, takeLatest } from 'redux-saga/effects';
import { setLocalToken } from '../../utils/localStorage';
import {
  nextPage,
  setHintMsg,
  showProgressIndicator,
  hideProgressIndicator,
  showPwErrorHint,
  // cancelFailed,
  // SubmitStatus,
} from './actions';
// Individual exports for testing
import {
  CHECK_EMAIL_IN_SIGN_IN_FORM,
  SIGN_IN_REQUEST,
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
    const data = yield call(request, requestURL, options);
    yield put(hideProgressIndicator());
    console.log('--------- Delay end/**/. 0.5 seconds');
    // console.log('if status is 3, it should return a message ask the user to register first.', data.status);
    // console.log(typeof (data.status));
    // type number

    if (data.status === 2) {
      yield put(nextPage());
    } else if (data.status === 1) {
      yield put(setHintMsg(1));
    } else if (data.status === 3) {
      yield put(setHintMsg(3));
    } else if (data.status === 4) {
      yield put(setHintMsg(4));
    } else if (data.status === 5) {
      yield put(setHintMsg(5));
    }
    //
    // 1. previously registered, not activated yet,
    //         now is waiting for activation --> need to activate
    //
    //   ******  INACTIVE --> display model ask the user to click activate link in their email, after that ask them to enter password
    //
    // 2. previously registered and activated, now is active --> good status
    //
    //     ACTIVE --> proceed to password page
    //
    // 3. previously not registered --> need to be registered
    //
    //   ******  UNREGISTERED --> display model ask the user to register first, a register link button on model
    //
    // 4. from old platform,
    //
    //   ******  FROM_V1_INACTIVE --> display model ask the user to click activate link in their email, after that ask them to enter password
    //
    // 5. previously registered and activated, now is locked --> need to unlock
    //
    //   ******  LOCKED --> display model ask the user to click activate link in their email, after that ask them to enter password
    // yield call(request, requestURL, options);
    // console.log('---------');
    // console.log('response in checkEmailSaga: ', data);
  } catch (err) {
    console.log('--------- error, please try again later.');
    // yield put(accountCheckingFail());
  }
}

export function* signInSaga(action) {
  console.log('=====  signInSaga  ======, action');
  console.log(JSON.stringify({
    email: action.email,
    pw: action.pw,
  }));
  const requestURL = 'http://127.0.0.1:8000/zwap/api/v2/sign-in/';
  // const requestURL = 'https://platform.zwap.hk/zwap-pay/check-if-account-exist/';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: action.email,
      pw: action.pw,
    }),
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    // console.log('--------- Now start delaying...');
    yield put(showProgressIndicator());
    yield call(delay, 500);
    // console.log('position 1');
    const data = yield call(request, requestURL, options);
    // console.log('position 2');
    yield put(hideProgressIndicator());
    // console.log('--------- Delay end. 0.5 seconds');
    // console.log('--------- data from response: ****');
    // console.log(data);
    // console.log(data.wrongPw);
    if (data.wrongPw) {
      yield put(showPwErrorHint());
    } else {
      setLocalToken(data.token, data.email, data.type);
      // yield put(logUserIn());
      yield put(push('/'));
      // console.log(browserHistory);
      // browserHistory.push('/');
    }
  } catch (err) {
    console.log('--------- error, please try again later.');
    // yield put(accountCheckingFail());
  }
}

export default function* fetchAndLoadData() {
  yield [
    takeLatest(CHECK_EMAIL_IN_SIGN_IN_FORM, checkEmailSaga),
    takeLatest(SIGN_IN_REQUEST, signInSaga),
  ];
}
