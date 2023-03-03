import React from 'react';
import { StyledInput } from './styles';

type InputProps = {
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  role?: string;
}

const TextInput = ({ type, name, placeholder, role }: InputProps) => {

  return(
    <StyledInput type={type} name={name} placeholder={placeholder} role={role}/>
  )
};

export default TextInput