import store from "../store/store";
import { lightBlue800, orange500, lightGreenA400
 } from '../../../node_modules/material-ui/styles/colors';

// export const increment = () => {
//   store.setState({
//     count: store.getState().count + 1
//   })
// }
//
// export const decrement = () => {
//   store.setState({
//     count: store.getState().count - 1
//   })
// }
const styles = {
  accept: {
    underline: {
        borderColor: lightGreenA400
,
      },
    name: {
           color: lightGreenA400
,
      }
  },
  warn: {
       color: orange500,
  },
};

const validateField = (fieldName, value) => {
  let nameValid =             store.getState().nameValid;
  let emailPhoneValid =       store.getState().emailPhoneValid;
  let textValid =             store.getState().textValid;


  console.log(fieldName, value.length ,nameValid, emailPhoneValid, textValid);

  switch (fieldName) {
    case 'name':
      nameValid = (value.length <= 20 && value.length > 3) ? true : false;
      console.log(nameValid);
      if(nameValid) {
        store.setState({
          formErrorsName: '',
          nameFieldFloatingFocusStyle: styles.accept.name,
          nameFieldBorderStyle: styles.accept.underline

         });
      }
      if(!nameValid && value.length >= 20) {
        store.setState({ formErrorsName: 'Слишком длинное имя!' });
      }
      if(!nameValid && value.length < 3) {
        store.setState({
          formErrorsName: 'Слишком короткое имя!'
        });
      }

      break;
    case 'emailPhone':
      // emailPhoneValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      // fieldValidationErrors.emailPhone = emailPhoneValid ? '' : ' is invalid';
      break;
    case 'text':
      // textValid = value.length <= 370;
      // fieldValidationErrors.text = textValid ? '' : ' is invalid';
      break;

  }
  // store.setState({
  //   formErrors: fieldValidationErrors.name,
  // }, this.validateForm);

}

const validateForm = () => {
  store.setState({formValid: store.getState().emailPhoneValid &&
                            store.getState().nameValid && store.getState().textValid});
}


export const handleUserInput = (e) => {
const name = e.target.name;
const value = e.target.value;
// console.log(e.target.isFocused);
store.setState({[name]: value});
validateField(name, value);
}

export const handleBlur = (e) => {
  console.log(e.target.value);
  console.log('kek');
  if(e.target.value.length === 0) {
    store.setState({
    formErrorsName: 'Необходимо заполнить это поле',
    nameFieldErrorStyle: styles.warn,
    nameFieldFloatingFocusStyle: styles.warn
  });
}
// const name = e.target.name;
// const value = e.target.value;

// store.setState({[name]: value});
// validateField(name, value);
}
