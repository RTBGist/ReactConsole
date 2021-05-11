import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Consolas;
  }
`

const theme = {
    colors: {
        primary: 'green',
        secondary: 'red'
    },
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 768px) and (min-width: 425px)",
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);

