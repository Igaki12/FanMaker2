import React from 'react';
import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme"
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals