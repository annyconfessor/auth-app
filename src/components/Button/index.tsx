import React from "react"
import { StyledButton } from "./styled"
import { VariantsEnum } from "./enum"

type ButtonProps = {
  children: React.ReactNode
  onClick(): void
  variant?: keyof typeof VariantsEnum
}

const Button = ({ children, onClick, variant = 'solid' }: ButtonProps) => {
  return(
    <StyledButton onClick={onClick} variant={VariantsEnum[variant]}>{children}</StyledButton>
  )
}

export default Button