import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import store from './components/store/store';
import { Provider } from "../node_modules/redux-zero";
import {cyan500} from '../node_modules/material-ui/styles/colors';
import getMuiTheme from '../node_modules/material-ui/styles/getMuiTheme';

const customTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 100,
  },
});

ReactDOM.render(
<Provider store={store}>
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
</Provider>
  , document.getElementById('root'));
  registerServiceWorker();
