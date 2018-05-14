import store from '../store/store';
import { orange500, lightGreenA700 } from 'material-ui/styles/colors';

const styles = {
  accept: {
    underline: {
      borderColor: lightGreenA700,
    },
    name: {
      color: lightGreenA700,
    },
  },
  warn: {
    underline: {
      borderColor: orange500,
    },
    name: {
      color: orange500,
    },
  },
};

const validateField = (fieldName, value) => {
  let nameValid, emailPhoneValid, textValid;
  switch (fieldName) {
    case 'name':
      let reg = new RegExp(/^((([a-zа-яА-Я]+)([- _])?)+([a-zа-яА-Я]+)?)$/, 'i');

      if (value.length === 0) {
        store.setState({
          formErrorsName: 'Необходимо заполнить это поле',
          nameFieldErrorStyle: styles.warn.name,
          nameFieldFloatingFocusStyle: styles.warn.name,
          nameFieldBorderStyle: styles.warn.underline,
        });
        break;
      }

      if (!reg.test(value) && value) {
        store.setState({
          formErrorsName: 'В этом поле должны быть только буквенные символы!',
          nameFieldErrorStyle: styles.warn.name,
          nameFieldFloatingFocusStyle: styles.warn.name,
          nameFieldBorderStyle: styles.warn.underline,
          nameValid: false,
        });
        break;
      }

      nameValid = value.length <= 25 && value.length > 3 ? true : false;

      if (nameValid) {
        store.setState({
          formErrorsName: '',
          nameFieldFloatingFocusStyle: styles.accept.name,
          nameFieldBorderStyle: styles.accept.underline,
          nameValid: true,
        });
      }

      if (!nameValid && value.length >= 25) {
        store.setState({
          formErrorsName: 'Слишком длинное имя!',
          nameFieldErrorStyle: styles.warn.name,
          nameFieldFloatingFocusStyle: styles.warn.name,
          nameFieldBorderStyle: styles.warn.underline,
          nameValid: false,
        });
      }

      if (!nameValid && value.length < 3) {
        store.setState({
          formErrorsName: 'Слишком короткое имя!',
          nameFieldErrorStyle: styles.warn.name,
          nameFieldFloatingFocusStyle: styles.warn.name,
          nameFieldBorderStyle: styles.warn.underline,
          nameValid: false,
        });
      }
      break;
    case 'emailPhone':
      let regExp = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
      let regExp2 = new RegExp(/[0-9]/, 'g');
      const PhoneValidator = () => {
        if (!regExp.test(value)) return false;
        if (value.match(regExp2).length === 10 || value.match(regExp2).length === 11) return true;
      };

      if (!emailPhoneValid) {
        store.setState({
          formErrorsEmailPhone: 'Введите корректный номер телефона!',
          phoneFieldErrorStyle: styles.warn.name,
          phoneFieldFloatingFocusStyle: styles.warn.name,
          phoneFieldBorderStyle: styles.warn.underline,
          textValid: false,
        });
      }
      if (PhoneValidator()) {
        store.setState({
          formErrorsEmailPhone: '',
          phoneFieldFloatingFocusStyle: styles.accept.name,
          phoneFieldBorderStyle: styles.accept.underline,
          emailPhoneValid: true,
        });
      }

      break;
    case 'text':
      textValid = value.length < 250 && value.length > 10;
      if (!textValid && value.length >= 250 && value.length > 10) {
        store.setState({
          formErrorsText: 'Слишком длинное сообщение!',
          textFieldErrorStyle: styles.warn.name,
          textFieldFloatingFocusStyle: styles.warn.name,
          textFieldBorderStyle: styles.warn.underline,
          textValid: false,
        });
      }
      if (!textValid && value.length <= 10) {
        store.setState({
          formErrorsText: 'Слишком короткое сообщение!',
          textFieldErrorStyle: styles.warn.name,
          textFieldFloatingFocusStyle: styles.warn.name,
          textFieldBorderStyle: styles.warn.underline,
          textValid: false,
        });
      }
      if (textValid) {
        store.setState({
          formErrorsText: '',
          textFieldFloatingFocusStyle: styles.accept.name,
          textFieldBorderStyle: styles.accept.underline,
          textValid: true,
        });
      }
      break;
  }
  validateForm();
};

const validateForm = () => {
  store.setState({
    formValid: store.getState().emailPhoneValid && store.getState().nameValid && store.getState().textValid,
  });
};

export const handleUserInput = e => {
  const name = e.target.name;
  const value = e.target.value;
  store.setState({ [name]: value });
  validateField(name, value);
};

export const handleBlur = e => {
  switch (e.target.name) {
    case 'name':
      if (e.target.value.length === 0) {
        store.setState({
          formErrorsName: 'Необходимо заполнить это поле',
          nameFieldErrorStyle: styles.warn.name,
          nameFieldFloatingFocusStyle: styles.warn.name,
          nameFieldBorderStyle: styles.warn.underline,
        });
      }
      break;
    case 'emailPhone':
      if (e.target.value.length === 0) {
        store.setState({
          formErrorsEmailPhone: 'Необходимо заполнить это поле',
          phoneFieldErrorStyle: styles.warn.name,
          phoneFieldFloatingFocusStyle: styles.warn.name,
          phoneFieldBorderStyle: styles.warn.underline,
        });
      }
      break;
    case 'text':
      if (e.target.value.length === 0) {
        store.setState({
          formErrorsText: 'Необходимо заполнить это поле',
          textFieldErrorStyle: styles.warn.name,
          textFieldFloatingFocusStyle: styles.warn.name,
          textFieldBorderStyle: styles.warn.underline,
        });
      }
      break;
  }
};

export const sendMail = e => {
  console.log(
    `Имя: ${store.getState().name}\nТелефон: ${store.getState().emailPhone}\nТекст сообщения: ${store.getState().text}`
  );

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let letter = {
    name: store.getState().name,
    phone: store.getState().emailPhone,
    text: store.getState().text,
  };

  var myInit = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(letter),
  };

  fetch('/sendmail', myInit)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(`There was a problem. Status code : ${response.status}`);
        return;
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
};

export const rewind = e => {
  // ru: Плавная прокрутка до элемента
  // en: smooth rewind to elem

  let target = e.target;
  let rewindEl;
  console.log(e);

  while (target) {
    if (target.className == 'ButtonContainer') {
      rewindEl = 'RepairContainerButton';
    }
    if (target.className == 'RewindToTopButton') {
      rewindEl = 'RewindToTopButton';
    }
    if (target.className == 'Drawer__ContactsButton') {
      rewindEl = 'RepairContainerButton';
      store.setState({
        drawerOpen: false,
      });
    }
    target = target.parentElement;
  }

  switch (rewindEl) {
    case 'RepairContainerButton':
      smoothScroll('MailForm');
      break;
    case 'RewindToTopButton':
      smoothScroll('Header');
      break;
  }
};

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  // if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  var elmHeight = elm.getBoundingClientRect().height;
  var clientHeight = document.documentElement.clientHeight;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  // ru: Центровка элемента по середине экрана
  // en: Positioning elm in the middle
  var y = y - (clientHeight - elmHeight) / 2;
  return y;
}

function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    document.documentElement.scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
}

export const handleRepairDialogClose = () => {
  store.setState({ repairDialogOpen: false });
};

const actions = prevState => ({
  handleToggleDrawer: state => ({ drawerOpen: !state.drawerOpen }),
  handleRepairDialogOpen: state => ({ repairDialogOpen: true }),
});

export default actions;
