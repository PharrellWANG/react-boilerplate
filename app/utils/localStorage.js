import * as store from 'store2';
import Cookies from 'js-cookie';

export const BEARER_TOKEN = 'BEARER_TOKEN';
export const TYPE = 'TYPE';
export const EMAIL = 'EMAIL';

export function getLocalToken() {
  const token = store.get(BEARER_TOKEN) || Cookies.get(BEARER_TOKEN);
  return token;
}

export function getLocalEmail() {
  const email = store.get(EMAIL) || Cookies.get(EMAIL);
  return email;
}

export function getLocalType() {
  const type = store.get(TYPE) || Cookies.get(TYPE);
  return type;
}

export function resetLocalToken() {
  store.remove(BEARER_TOKEN);
  store.remove(EMAIL);
  store.remove(TYPE);
  Cookies.remove(BEARER_TOKEN);
  Cookies.remove(EMAIL);
  Cookies.remove(TYPE);
}

export function setLocalToken(token, email, type) {
  store.set(BEARER_TOKEN, token);
  store.set(EMAIL, email);
  store.set(TYPE, type);
  Cookies.set(BEARER_TOKEN, token, { expires: 1 });
  Cookies.set(EMAIL, email);
  Cookies.set(TYPE, type);
}

export function isLoggedIn() {
  return (!!getLocalToken() && !!getLocalEmail() && !!getLocalType());
}
