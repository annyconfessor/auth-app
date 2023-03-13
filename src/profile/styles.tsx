import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d364bb80;
`

export const ButtonContainer = styled.div`
  width: calc(100% - 20%);
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #db5b2d80;
`

export const InfosContainer = styled.div`
  width: calc(100% - 20%);
  height: calc(100% - 20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #802ff280;
`