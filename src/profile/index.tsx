import { Header } from '../components/Header'
import Infos from './components/Infos'
import {
  Body, 
  Container, 
  Texts 
} from './styles'

const Profile = () => {

  return(
    <Container>
      <Header />
      <Body>
        <Texts>
          <h1>Personal Info</h1>
          <p>Basic info, like your name and photo</p>
        </Texts>
        <Infos />
      </Body>
    </Container>
  )
}

export default Profile
