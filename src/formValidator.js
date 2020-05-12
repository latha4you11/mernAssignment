import Validator from 'validator';

const isEmpty = value => value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0);

export default data => {
  let errors = {};

  let firstNameRegex = /^([a-zA-Z]+)$/;
  if (!firstNameRegex.test(data.patientName)) {
    errors.patientName = 'FirstName allows only characters';
  }

  if (!Validator.isLength(data.patientName, { min: 1, max: 30 })) {
    errors.patientName = 'Name must be between 1 and 30 characters';
  }

  if (Validator.isEmpty(data.patientName)) {
    errors.patientName = 'Name field is required';
  }

  let ageRegex = /^[0-9]+$/;
  if (!ageRegex.test(data.age)) {
    errors.age = 'Age field allows only numbers';
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = 'Age field is required';
  }

  let placeRegex = /^([a-zA-Z]+)$/;
  if (!placeRegex.test(data.place)) {
    errors.place = 'FirstName allows only characters';
  }

  if (!Validator.isLength(data.place, { min: 1, max: 30 })) {
    errors.place = 'Name must be between 1 and 30 characters';
  }

  if (Validator.isEmpty(data.place)) {
    errors.place = 'Name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};