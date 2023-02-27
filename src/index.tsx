import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import reportWebVitals from './reportWebVitals'
import styled from 'styled-components'

import SignIn from './authentication/Register'
import ThemeProvider from './theme'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Container>
        <SignIn />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
