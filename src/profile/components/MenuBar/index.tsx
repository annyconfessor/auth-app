import { useState } from 'react'

import { Image } from '../../../components'
import Icon from '../../../components/Icon'
import { ImagesEnum } from '../../../components/Image/enum'
import { IconsEnum } from '../../../components/Icon/enum'
import { MenuBarContainer, ProfileItemContainer, ItemsGroup, Group, Text, StyledButton, MenuItem } from './styles'

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const data = [
    {
      name: "profileUser",
      text: "My Profile",
    },
    {
      name: "groupChat",
      text: "Group Chat"
    },
    {
      name: "logout",
      text: "Logout"
    }
  ]

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  return(
    <MenuBarContainer>
      <ProfileItemContainer>
        <Group>
          <Image name={ImagesEnum.profile} width={35} height={35} borderRadius={20} />
          <Text>Anny Confessor</Text>
          <StyledButton onClick={handleModal}>
            <Icon name={isOpen ? IconsEnum.ArrowUp : IconsEnum.ArrowDown} width={12} height={12} />
          </StyledButton>
        </Group>
      </ProfileItemContainer>
      {isOpen &&
      <ItemsGroup className="items-group">
        {data.map((item, key) => (
          <MenuItem key={key}>
            <Icon name={(IconsEnum as any)[item.name]} width={16} height={16}/>
            <span />
            {item.text}
          </MenuItem>
        ))}
      </ItemsGroup>}
    </MenuBarContainer>
  )
}

export default MenuBar