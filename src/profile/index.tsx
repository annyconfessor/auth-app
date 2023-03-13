import { Image } from '../components'
import { Header } from '../components/Header'
import { ImagesEnum } from '../components/Image/enum'
import MenuBar from './components/MenuBar'
import { Body, Container, ButtonContainer, InfosContainer } from './styles'

const Profile = () => {

  return(
    <Container>
      <Header>
        <>
          <Image name={ImagesEnum.logo} width={170} height={25} />
          <MenuBar />
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
