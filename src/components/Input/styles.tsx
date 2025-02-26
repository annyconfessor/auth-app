import styled from "styled-components"

type InputProps = {
  isRadiusTop?: boolean
  isRadiusBottom?: boolean
  isBorderBottom?: boolean
  isBorderTop?: boolean
}

export const StyledInput = styled.input<InputProps>`
border-radius: ${(props) => 
  props.isRadiusTop ? '10px 10px 0 0' : props.isRadiusBottom ? '0 0 10px 10px' : null};
border: 1px solid #E6E6F0;
color: #9C98A6;
padding: 10px;
outline: none;
font-size: 20px;
  `
  // border-width: solid #E6E6F0 ${(props) => props.isBorderTop ? '5px 5px 0 0' : props.isBorderBottom? '0 0 5px 5px' : null};