import { createStore } from '../../../node_modules/redux-zero';

const initialState = {
  name: '',
  emailPhone: '',
  text: '',
  nameValid: false,
  emailPhoneValid: false,
  textValid: false,
  buttonDisabled: true,
  formErrors: {name: '', emailPhone: '', text: ''}
};

const store = createStore(initialState);

export default store;
