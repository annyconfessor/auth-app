import styled, { css } from 'styled-components'

export const Figure = styled.figure<{ width?: number, height?: number }>`
${({ width, height }) => css`
  width: ${width}px;
  height: ${height}px;
`}
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
