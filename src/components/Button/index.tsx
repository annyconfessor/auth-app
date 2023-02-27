import React from "react"
import { StyledButton } from "./styled"

type ButtonProps = {
  children: string;
  onClick(): void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return(
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

export default Button