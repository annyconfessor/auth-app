import React from 'react';
import { StyledInput } from './styles';

type InputProps = {
  type: string;
  name: string;
  value: string;
  placeholder: string;
}

const TextInput = ({ type, name, placeholder }: InputProps) => {

  return(
    <StyledInput type={type} name={name} placeholder={placeholder}/>
  )
};

export default TextInput