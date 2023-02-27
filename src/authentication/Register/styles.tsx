import styled, { css } from 'styled-components'

export const Container = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 21.875rem;
  /* height: 31.25rem; */
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

export const Wrapper = styled.div`
  height: 7.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
`

export const Span = styled.span`
  color: #2D9CDB;
  margin-left: 3px;
`