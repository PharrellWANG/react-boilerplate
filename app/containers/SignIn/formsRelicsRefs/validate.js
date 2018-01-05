/* eslint-disable no-console */
const validate = (values) => {
  const errors = {};
  console.log('------');
  console.log(values.get('firstName'));
  console.log(values.get('email'));
  if (!values.get('firstName')) {
    errors.firstName = 'Required';
  }
  if (!values.get('lastName')) {
    errors.lastName = 'Required';
  }
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('sex')) {
    errors.sex = 'Required';
  }
  if (!values.get('favoriteColor')) {
    errors.favoriteColor = 'Required';
  }
  return errors;
};

export default validate;
