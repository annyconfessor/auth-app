import styled, { css } from 'styled-components'

export const StyledButton = styled.button<{ width?: number, height?: number, isTransparent?: boolean }>`
${({ width, height, isTransparent }) => css`
  width: ${width ? `${width}px` : '16.875rem'}; // conditional styling
  height: ${height ? `${height}px` : '1.875rem'};
  background-color: ${props => `${isTransparent ? props.theme.colors.white : props.theme.colors.blue}`};
  color: ${props => `${isTransparent ? props.theme.colors.black : props.theme.colors.white}`};
  border: ${props => `${isTransparent ? `1px solid ${props.theme.colors.gray}` : 'none'}`};
  border-radius: 10px;
`}
`