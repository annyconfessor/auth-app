import styled, { css } from 'styled-components'
import { VariantsEnum } from './enum'

type StyledButtonProps = {
  variant: VariantsEnum
  width?: number
}

const VariantStyles = {
  [VariantsEnum.solid]: css`
    background-color: #00DBA2;
    color: #fafafa;
    border: none;
    &:hover {
      background-color: #00C28E;
    }
  `,
  [VariantsEnum.disabled]: css`
    background-color: #d6d6d6;
    color: #bababa;
    border: none;
    cursor: not-allowed;
  `,
  [VariantsEnum.soft]: css`
    background-color: #d6d6d6;
    color: #bababa;
    border: none;
    
    &:hover {
      background-color: #9a9a9a;
      color: #3f3f3f;
      }
    `,
    [VariantsEnum.outlined]: css`
      background-color: transparent;
      color: #00DBA2;
      border: 2px solid #00DBA2;

      &:hover {
        background-color: #00DBA214;
      }
    `,
    [VariantsEnum.ghost]: css`
      background-color: transparent;
      color: #00DBA2;
      border: none;

      &:hover {
        color: #009E78;
        background-color: rgba(0, 219, 162, 0.1);
      }
    `
}
    
export const StyledButton = styled.button<StyledButtonProps>`
padding: 10px;
cursor: pointer;
border-radius: 5px;
font-size: 16px;
${({ variant }) => VariantStyles[variant]}
${({ width }) => width && `width: ${width}px`}
`