import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import reportWebVitals from './reportWebVitals'

import ThemeProvider from './theme'
import './index.css'
import Theme from './theme/theme'
import { GlobalStyles } from './GlobalStyles'
import AppRouter from './router/AppRouter'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
      <GlobalStyles />
          <ThemeProvider theme={Theme}>
            <AppRouter/>
          </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
