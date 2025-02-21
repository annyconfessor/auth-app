import styled, { css } from 'styled-components'

export const Container = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 21.875rem;
  border: 1px solid #BDBDBD;
  border-radius: 24px;
  height: 31.25rem;
  background-color: white;
`}
`

export const Div = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 25px;
  width: 17.2rem;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 17.2rem;
  border-radius: 24px;
  height: 27rem;
`

export const Headding = styled.h1`
  font-family: 'Poppins'
  font-size: 18px;
  font-weight: 600;
  color: #333333;
`

export const Paragraph = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #333333;
`

export const InputsGroup = styled.div`
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

export const IconGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 13.75rem;
`

export const Span = styled.span`
  margin-left: 3px;
`

export const Link = styled.a`
  color: #2D9CDB;
  text-decoration: none;
`