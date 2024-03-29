import styled from 'styled-components';

export const MenuBarContainer = styled.div` 
  width: 188px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => `${props.theme.colors.white}`};
`

export const ProfileItemContainer = styled.div` 
  width: 188px;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const Group = styled.div` 
  width: calc(100% - 10%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.h3`
  font-weight: 700;
  font-size: 12px;
  color: #333333;
`
export const StyledButton = styled.button<{ onClick?: () => void}>`
  border: none;
  background-color: white;
  cursor: pointer;
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


export const MenuItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 164px;
  height: 40px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  margin: 8px 0;
  padding-left: 8px;

  &:hover {
    background-color: ${props => props.theme.colors.gray};
  }

  span {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #4F4F4F;
    padding-left: 8px;
  }
`   
