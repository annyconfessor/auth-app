import React from 'react';
import { StyledInput } from './styles';

type InputProps = {
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  onChange: (e: any) => void
}

const TextInput = ({ type, name, value, placeholder, onChange }: InputProps) => {

  return(
    <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
  )
};

export default TextInput