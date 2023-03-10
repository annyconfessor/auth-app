import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap')
  {console.log('oi, eu sou o globalstyles')}

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
`