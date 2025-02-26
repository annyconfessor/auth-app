import React from 'react'
import { StyledInput } from './styles'

type InputProps = {
  type?: string
  name?: string
  value?: string
  placeholder?: string,
  isRadiusTop?: boolean,
  isRadiusBottom?: boolean,
  onChange: (e: any) => void
}

const TextInput = ({ isRadiusBottom, isRadiusTop, type, name, value, placeholder, onChange }: InputProps) => {

  return(
      <StyledInput isRadiusBottom={isRadiusBottom} isRadiusTop={isRadiusTop}/>
  )
}

export default TextInput