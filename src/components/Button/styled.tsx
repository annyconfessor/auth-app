import styled, { css } from 'styled-components'

export const StyledButton = styled.button<{ width?: number, height?: number }>`
${({ width, height }) => css`
  width: ${width ? `${width}px` : '16.875rem'}; // conditional styling
  height: ${height ? `${height}px` : '1.875rem'};
  background-color: #2F80ED;
  border-radius: 8px;
  color: #FFFFFF;
  border: none;
`}
`