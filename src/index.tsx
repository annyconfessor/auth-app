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
// import Login from './authentication/Login'
// import Register from './authentication/Register'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => `${props.theme.colors.white}`};
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
          <Container>
            <App />
            {/* <Login />
            <Register /> */}
          </Container>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
