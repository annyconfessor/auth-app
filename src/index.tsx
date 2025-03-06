import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import reportWebVitals from './reportWebVitals'

import ThemeProvider from './theme'
import './index.css'
import Theme from './theme/theme'
import { GlobalStyles } from './GlobalStyles'
import AppRouter from './router/AppRouter'
import { GoogleOAuthProvider } from '@react-oauth/google'

// remove
const CLIENT_ID = '487536826248-ln82jkr4kvr9s6dg880oouuj15jptouo.apps.googleusercontent.com'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GlobalStyles />
        <ThemeProvider theme={Theme}>
          <AppRouter/>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </React.StrictMode>
);

reportWebVitals();
