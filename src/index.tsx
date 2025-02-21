import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import reportWebVitals from './reportWebVitals'
import styled from 'styled-components'

import ThemeProvider from './theme'
import './index.css'
import './assets/fonts/Poppins/Poppins-Black.ttf'
import Theme from './theme/theme'
import { GlobalStyles } from './GlobalStyles'
import AppRouter from './router/AppRouter'

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
      <GlobalStyles />
        <ThemeProvider theme={Theme}>
          <Container>
            <AppRouter/>
          </Container>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
