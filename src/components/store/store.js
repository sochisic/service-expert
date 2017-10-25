import { createStore } from '../../../node_modules/redux-zero';

const initialState = {
  name: '',
  emailPhone: '',
  text: '',
  nameValid: false,
  emailPhoneValid: false,
  textValid: false,
  formErrorsName: '',
  formErrorsEmailPhone: '',
  formErrorsText: '',
  formValid: false,
  nameFieldErrorStyle: '',
  nameFieldFloatingFocusStyle: '',
  nameFieldBorderStyle: ''
};

const store = createStore(initialState);

export default store;
