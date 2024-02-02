import { Image } from "../../../components"
import Button from "../../../components/Button"
import { ImagesEnum } from "../../../components/Image/enum"
import InfoItem from "../InfoItem"
import { InfosContainer, Wrapper, Div, Texts, Title, Subtitle, Items } from "./styles"

const Infos = () => {

  const Data = [
    {
      id: 1,
      name: 'Photo',
      value: <Image name={ImagesEnum.profile} width={75} borderRadius={10}/>
    },
    {
      id: 2,
      name: 'Name',
      value: 'Anny Confessor'
    },
    {
      id: 3,
      name: 'Bio',
      value: 'I am a software developer and a big fan of devchallenges.'
    },
    {
      id: 4,
      name: 'Phone',
      value: 908249274292
    },
    {
      id: 5,
      name: 'Email',
      value: 'anny.confessor@gmail.com'
    },
    {
      id: 6,
      name: 'Password',
      value: 123456
    }
  ]

  const handleEdit = () => {}

  return(
    <InfosContainer className='infoscontainer'>
    <Wrapper>
      <Div>
        <Texts>
          <Title>Personal info</Title>
          <Subtitle>Basic info, like your name and photo</Subtitle>
        </Texts>
        <Button onClick={handleEdit} width={95} isTransparent>Editar</Button>
      </Div>
    </Wrapper>
    <Items className='items'>
      {Data.map((item) => 
        <Wrapper key={item.id}>
          <InfoItem item={item.name} subject={item.value} />
        </Wrapper>
      )}
    </Items>
  </InfosContainer>
  )
}

export default Infos