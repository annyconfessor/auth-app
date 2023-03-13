import { Image } from '../../components'
import { Header } from '../../components/Header'
import Icon from '../../components/Icon'
import { ImagesEnum } from '../../components/Image/enum'
import MenuItem from './MenuItem'
import { Body, Container, MenuBarContainer, ProfileItemContainer, ItemsGroup, Group, Text, ButtonContainer, InfosContainer } from './styles'

const Profile = () => {

  const data = [
    {
      name: "profileUser",
      text: "My Profile"
    },
    {
      name: "groupChat",
      text: "Group Chat"
    }
  ]

  return(
    <Container>
      <Header>
        <>
          <Image name={ImagesEnum.logo} width={170} height={25} />
          <MenuBarContainer>
            <ProfileItemContainer>
              <Group>
                <Image name={ImagesEnum.profile} width={35} height={35} />
                <Text>Anny Confessor</Text>
                <Icon name="arrowUp" width={12} height={12}/>
              </Group>
            </ProfileItemContainer>
            <ItemsGroup className="items-group">
              {data.map((item, key) => <MenuItem key={key} name={item.name} text={item.text}/>)}
            </ItemsGroup>
          </MenuBarContainer>
        </>
      </Header>
      <Body>
        <ButtonContainer>back button</ButtonContainer>
        <InfosContainer>infos container</InfosContainer>
      </Body>
    </Container>
  )
}

export default Profile
