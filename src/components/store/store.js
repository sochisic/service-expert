import { createStore } from '../../../node_modules/redux-zero';
import { lightBlue800 } from '../../../node_modules/material-ui/styles/colors';

const styles = {
  name: {
    color: lightBlue800
  },
  underline: {
    underline: lightBlue800
  }
};

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
  nameFieldFloatingFocusStyle: styles.name,
  nameFieldBorderStyle: styles.underline,
  phoneFieldErrorStyle: '',
  phoneFieldFloatingFocusStyle: styles.name,
  phoneFieldBorderStyle: styles.underline,
  textFieldErrorStyle: '',
  textFieldFloatingFocusStyle: styles.name,
  textFieldBorderStyle: styles.underline,
};

const store = createStore(initialState);

export default store;
