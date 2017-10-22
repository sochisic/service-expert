import store from "../store/store";

export const increment = () => {
  store.setState({
    count: store.getState().count + 1
  })
}

export const decrement = () => {
  store.setState({
    count: store.getState().count - 1
  })
}


export const validateField = (fieldName, value) => {
  let nameValid = this.state.nameValid;
  let emailPhoneValid = this.state.emailPhoneValid;
  let textValid = this.state.textValid;

  switch (fieldName) {
    case 'name':
      nameValid = value.length <= 20;
      break;
    case 'emailPhone':
      emailPhoneValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      break;
    case 'text':
      textValid = value.length <= 370;
      break;

  }
}

export const handleUserInput = (e) => {
console.log(e);
const name = e.target.name;
const value = e.target.value;
store.setState({[name]: value},
  () => {validateField(name, value)});

}
