/* eslint-disable no-console */
const validate = (values) => {
  const errors = {};
  // console.log('------');
  // console.log(values.firstName);
  // console.log(values.get('signInEmail'));
  // console.log(values.toJS());
  if (!values.get('signInEmail')) {
    errors.signInEmail = 'required';
  }
  // if (!values.get('lastName')) {
  //   errors.lastName = 'Required';
  // }
  // if (!values.get('email')) {
    // errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
  //   errors.email = 'Invalid email address';
  // }
  // if (!values.get('sex')) {
  //   errors.sex = 'Required';
  // }
  // if (!values.get('favoriteColor')) {
  //   errors.favoriteColor = 'Required';
  // }
  // if (!values.get('driver')) {
  //   errors.driver = 'Required';
  // }
  // if (!values.get('agreeToTerms')) {
  //   errors.agreeToTerms = 'Required';
  // } else if (values.get('agreeToTerms') !== true) {
  //   errors.agreeToTerms = 'You have to agree to terms';
  // }
  return errors;
};

export default validate;
