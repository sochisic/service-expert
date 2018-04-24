import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blue500, blue700, grey400, grey900 } from '../node_modules/material-ui/styles/colors';
import store from './components/store/store';
import { Provider } from 'redux-zero/react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RewindToTopButton from './components/rewindtotopbutton/rewindtotopbutton';

const customTheme = getMuiTheme({
  palette: {
    textColor: grey900,
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={customTheme}>
      <App />
      <RewindToTopButton />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
