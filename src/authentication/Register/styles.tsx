import styled, { css } from 'styled-components'

export const Container = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 500px;
  background-color: ${theme.colors.white};
`}
`

export const Headding = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
`

export const Paragraph = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #333333;
`

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
`