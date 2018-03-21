import { createStore } from "redux-zero";
import { lightBlue800 } from "material-ui/styles/colors";

const styles = {
  name: {
    color: lightBlue800
  },
  underline: {
    underline: lightBlue800
  }
};

const initialState = {
  name: "",
  emailPhone: "",
  text: "",
  nameValid: false,
  emailPhoneValid: false,
  textValid: false,
  formErrorsName: "",
  formErrorsEmailPhone: "",
  formErrorsText: "",
  formValid: false,
  nameFieldErrorStyle: "",
  nameFieldFloatingFocusStyle: styles.name,
  nameFieldBorderStyle: styles.underline,
  phoneFieldErrorStyle: "",
  phoneFieldFloatingFocusStyle: styles.name,
  phoneFieldBorderStyle: styles.underline,
  textFieldErrorStyle: "",
  textFieldFloatingFocusStyle: styles.name,
	textFieldBorderStyle: styles.underline,
	drawerOpen: false,
	repairDialogOpen: false,
	
};

const store = createStore(initialState);

export default store;
