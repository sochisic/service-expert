import store from "../store/store";
import { lightBlue800, orange500, lightGreenA700
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
        borderColor: lightGreenA700,
      },
    name: {
           color: lightGreenA700,
      }
  },
  warn: {
    underline: {
      borderColor: orange500
        },
    name: {
      color: orange500
    }
  },


};

const validateField = (fieldName, value) => {
  let nameValid =             store.getState().nameValid;
  let emailPhoneValid =       store.getState().emailPhoneValid;
  let textValid =             store.getState().textValid;

  switch (fieldName) {
    case 'name':
      nameValid = (value.length <= 25 && value.length > 3) ? true : false;
      console.log(nameValid);
      if(nameValid) {
        store.setState({
          formErrorsName: '',
          nameFieldFloatingFocusStyle: styles.accept.name,
          nameFieldBorderStyle: styles.accept.underline,
          nameValid: true
         });
      }
      if(!nameValid && value.length >= 25) {
        store.setState({
          formErrorsName: 'Слишком длинное имя!',
          nameFieldErrorStyle: styles.warn.name,
          nameFieldFloatingFocusStyle: styles.warn.name,
          nameFieldBorderStyle: styles.warn.underline
         });
      }
      if(!nameValid && value.length < 3) {
        store.setState({
          formErrorsName: 'Слишком короткое имя!',
          nameFieldErrorStyle: styles.warn.name,
          nameFieldFloatingFocusStyle: styles.warn.name,
          nameFieldBorderStyle: styles.warn.underline
        });
      }
      break;
    case 'emailPhone':
    var regExp = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    var regExp2 = new RegExp(/[0-9]/,'g');
      emailPhoneValid = regExp.test(value) && value.match(regExp2).length === 10 || value.match(regExp2).length === 11;
      if(!emailPhoneValid) {
        store.setState({
          formErrorsEmailPhone: 'Введите корректный номер телефона!',
          phoneFieldErrorStyle: styles.warn.name,
          phoneFieldFloatingFocusStyle: styles.warn.name,
          phoneFieldBorderStyle: styles.warn.underline
        });
      }
      if(emailPhoneValid) {
        store.setState({
          formErrorsEmailPhone: '',
          phoneFieldFloatingFocusStyle: styles.accept.name,
          phoneFieldBorderStyle: styles.accept.underline,
          emailPhoneValid: true
         });
      }

      break;
    case 'text':
      textValid = value.length < 250 && value.length > 10;
      if(!textValid && value.length >= 250 && value.length > 10) {
        store.setState({
          formErrorsText: 'Слишком длинное сообщение!',
          textFieldErrorStyle: styles.warn.name,
          textFieldFloatingFocusStyle: styles.warn.name,
          textFieldBorderStyle: styles.warn.underline
        });
      }
      if(!textValid && value.length <= 10) {
        store.setState({
          formErrorsText: 'Слишком короткое сообщение!',
          textFieldErrorStyle: styles.warn.name,
          textFieldFloatingFocusStyle: styles.warn.name,
          textFieldBorderStyle: styles.warn.underline
        });
      }
      if(textValid) {
        store.setState({
          formErrorsText: '',
          textFieldFloatingFocusStyle: styles.accept.name,
          textFieldBorderStyle: styles.accept.underline,
          textValid: true
         });
      }
      break;

  }
  validateForm();
  // store.setState({
  //   formErrors: fieldValidationErrors.name,
  // }, this.validateForm);

}

const validateForm = () => {
  console.log(`nameValid: ${store.getState().nameValid} emailValid: ${store.getState().emailPhoneValid} textValid: ${store.getState().textValid}`);
  store.setState({formValid: store.getState().emailPhoneValid &&
                            store.getState().nameValid && store.getState().textValid});
  if(store.getState().formValid) console.log('Form Validated Succesfully');
}


export const handleUserInput = (e) => {
const name = e.target.name;
const value = e.target.value;
store.setState({[name]: value});
validateField(name, value);
}

export const handleBlur = (e) => {
  console.log(e.target.name);
switch (e.target.name) {
  case 'name':
    if(e.target.value.length === 0) {
      store.setState({
      formErrorsName: 'Необходимо заполнить это поле',
      nameFieldErrorStyle: styles.warn.name,
      nameFieldFloatingFocusStyle: styles.warn.name,
      nameFieldBorderStyle: styles.warn.underline
    });
  }
    break;
  case 'emailPhone':
    if(e.target.value.length === 0) {
      store.setState({
      formErrorsEmailPhone: 'Необходимо заполнить это поле',
      phoneFieldErrorStyle: styles.warn.name,
      phoneFieldFloatingFocusStyle: styles.warn.name,
      phoneFieldBorderStyle: styles.warn.underline
    });
  }
    break;
  case 'text':
    if(e.target.value.length === 0) {
      store.setState({
      formErrorsText: 'Необходимо заполнить это поле',
      textFieldErrorStyle: styles.warn.name,
      textFieldFloatingFocusStyle: styles.warn.name,
      textFieldBorderStyle: styles.warn.underline
    });
  }
    break;
}
// const name = e.target.name;
// const value = e.target.value;
// store.setState({[name]: value});
// validateField(name, value);
}
