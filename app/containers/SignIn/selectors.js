import { createSelector } from 'reselect';

/**
 * Direct selector to the signIn state domain
 */
// const selectSignInDomain = (state) => {
//   // console.log(state)
//   console.log('here we go the signIn state: ~~~~~~~~~~~')
//   console.log(state.get('signIn').toJS())
//   state.get('signIn');
// }
//
// /**
//  * Other specific selectors
//  */
//
//
// /**
//  * Default selector used by SignIn
//  */
//
// const makeSelectIsLoggedIn = () => createSelector(
//   selectSignInDomain,
//   // (substate) => substate.toJS()
//   (subState) => {
//     // console.log('subState.toJS(): ++++++++++++~~~~~~~~!!!!!!!222222!')
//     // console.log(subState.toJS())
//     // console.log('')
//     console.log('subState: ++++++++++++ 1')
//     console.log(subState)
//     console.log('')
//     subState.get('isLoggedIn')
//   }
// );
const selectSignInDomain = (state) => state.get('signIn');

const makeSelectIsLoggedIn = () => createSelector(
  selectSignInDomain,
  (subState) => subState.get('isLoggedIn')
);

export {
  makeSelectIsLoggedIn,
  selectSignInDomain,
};
