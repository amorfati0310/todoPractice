import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal, ThemeProvider} from "styled-components";
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const theme = {
  mainFontColor: '#000'
}

injectGlobal`
    body {
     margin: 0; 
    }
    button {
      border: none;
      background: transparent;
      :focus {
        outline: none;
      }
    }
    li {
      list-style: none;
    }
    ul {
      padding-left: 0;
      margin: 0;
    }
    p {
      margin: 0;
    }
    input {
      :focus {
        outline: none;
      }
    }
`

ReactDOM.render(
<ThemeProvider theme={theme}> 
  <App />
</ThemeProvider>
, 
document.getElementById('root'));
registerServiceWorker();
