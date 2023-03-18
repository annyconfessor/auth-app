import { Image } from '../components'
import Button from '../components/Button'
import { Header } from '../components/Header'
import Icon from '../components/Icon'
import { ImagesEnum } from '../components/Image/enum'
import InfoItem from './components/InfoItem'
import MenuBar from './components/MenuBar'
import { 
  Body, 
  Container, 
  TextsContainer, 
  Heading, 
  P, 
  Wrapper, 
  Div, 
  Items, 
  Texts, 
  Title, 
  Subtitle, 
  InfosContainer 
} from './styles'

const Profile = () => {

  const Data = [
    {
      key: 'Photo',
      value: <Icon name="google"/>
    },
    {
      key: 'Name',
      value: 'Anny Confessor'
    },
    {
      key: 'Bio',
      value: 'I am a software developer'
    },
    {
      key: 'Phone',
      value: 908249274292
    },
    {
      key: 'Email',
      value: 'anny.confessor@gmail.com'
    },
    {
      key: 'Password',
      value: 123456
    }
  ]

  const handleEdit = () => {}

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
        <InfosContainer className='infoscontainer'>
          <Wrapper>
            <Div>
              <Texts>
                <Title>Personal info</Title>
                <Subtitle>Basic info, like your name and photo</Subtitle>
              </Texts>
              <Button onClick={handleEdit} width={95}>Editar</Button>
            </Div>
          </Wrapper>
          <Items className='items'>
            {Data.map((item) => 
              <Wrapper>
                <InfoItem item={item.key} subject={item.value} />
              </Wrapper>
            )}
          </Items>
        </InfosContainer>
      </Body>
    </Container>
  )
}

export default Profile
