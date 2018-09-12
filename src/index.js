import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import styled, { ThemeProvider} from "styled-components";

const theme = {

}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
, 
document.getElementById('root'));
registerServiceWorker();
