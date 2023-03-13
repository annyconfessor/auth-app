import styled, { css } from 'styled-components'

export const Figure = styled.figure<{ width?: number, height?: number }>`
${({ width, height }) => css`
  width: ${width}px;
  height: ${height}px;
`}
`

export const Img = styled.img<{ borderRadius?: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius ? `${borderRadius}px` : `${0}px`};
  `}
`
