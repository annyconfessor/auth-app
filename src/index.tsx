import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import { Container } from './theme';
import SignIn from './screens/signIn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Container}>
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
