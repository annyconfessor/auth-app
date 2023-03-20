import { Image } from '../components'
import { Header } from '../components/Header'
import { ImagesEnum } from '../components/Image/enum'
import Infos from './components/Infos'
import MenuBar from './components/MenuBar'
import {
  Body, 
  Container, 
  TextsContainer, 
  Heading, 
  P, 
} from './styles'

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
        <TextsContainer>
          <Heading>Personal Info</Heading>
          <P>Basic info, like your name and photo</P>
        </TextsContainer>
        <Infos />
      </Body>
    </Container>
  )
}

export default Profile
