import React from "react"
import { StyledButton } from "./styled"
import { VariantsEnum } from "./enum"

type ButtonProps = {
  children: React.ReactNode
  onClick(): void
  width?: number
  variant?: keyof typeof VariantsEnum
}

const Button = ({ children, onClick, width, variant = 'solid' }: ButtonProps) => {
  return(
    <StyledButton onClick={onClick} 
    variant={VariantsEnum[variant]}
    width={width}>
      {children}
    </StyledButton>
  )
}

export default Button