/**
 * The global state selectors
 */
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import { createSelector } from 'reselect';
import { isLoggedIn } from '../../utils/localStorage';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectIsLoggedIn = () => createSelector(
  selectGlobal,
  (subState) => subState.get('isLoggedIn')
);

const userIsAuthenticated = connectedRouterRedirect({
   // The url to redirect user to if they fail
  redirectPath: '/signin',
   // Determine if the user is authenticated or not
  authenticatedSelector: isLoggedIn,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated',
});

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  userIsAuthenticated,
  selectGlobal,
  makeSelectIsLoggedIn,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
