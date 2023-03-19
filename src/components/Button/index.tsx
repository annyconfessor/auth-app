import React from "react"
import { StyledButton } from "./styled"

type ButtonProps = {
  children: string;
  onClick(): void;
  width?: number
  isTransparent?: boolean;
}

const Button = ({ children, onClick, width, isTransparent, }: ButtonProps) => {
  return(
    <StyledButton onClick={onClick} width={width} isTransparent={isTransparent}>{children}</StyledButton>
  )
}

export default Button