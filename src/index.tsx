import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import reportWebVitals from './reportWebVitals'
import styled from 'styled-components'

import ThemeProvider from './theme'
import './index.css'
import './assets/fonts/Poppins/Poppins-Black.ttf'
import { App } from './App'
import Theme from './theme/theme'
import { Provider } from 'react-redux'
import store from './storeConfig/store'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <Provider store={store}>
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
          <Container>
            <App />
          </Container>
        </ThemeProvider>
    </React.StrictMode>
  // </Provider>
);

reportWebVitals();
