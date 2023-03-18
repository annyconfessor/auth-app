import React from "react"
import { StyledButton } from "./styled"

type ButtonProps = {
  children: string;
  onClick(): void;
  width?: number
}

const Button = ({ children, onClick, width }: ButtonProps) => {
  return(
    <StyledButton onClick={onClick} width={width}>{children}</StyledButton>
  )
}

export default Button