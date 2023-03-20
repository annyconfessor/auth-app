import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => `${props.theme.colors.white}`};
`

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`

export const Texts = styled.div`
  width: calc(100% - 30%);
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #E0E0E0;
  border-radius: 12px 12px 0 0;

  h1 {
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
  }
`