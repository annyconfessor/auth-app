import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const MenuBarContainer = styled.div` 
  width: 188px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileItemContainer = styled.div` 
  width: 188px;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: end;
`

export const Group = styled.div` 
  width: calc(100% - 15%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.h3`
  font-weight: 700;
  font-size: 12px;
  color: #333333;
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

export const ItemsGroup = styled.div`
  width: 188px;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`