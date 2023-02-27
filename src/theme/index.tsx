import React, { ReactElement } from "react"
import { ThemeProvider as StyledProvider } from "styled-components"
import Theme from "./theme"

type ThemeProps = {
  children: ReactElement
}

const ThemeProvider = ({ children }: ThemeProps) => (
    <StyledProvider theme={Theme}>{children}</StyledProvider>
  )

export default ThemeProvider