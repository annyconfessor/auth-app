import { Image } from '../../components'
import { ImagesEnum } from '../../components/Image/enum'

import { Container, Headding, Paragraph, Subtitle } from "./styles"

const Register = () => {
  return(
    <div>
      <Container>
        <Image name={ImagesEnum.logo} />
        <Headding>Join thousands of learners from around the world</Headding>
        <Paragraph>Master web development by making real-life projects. There are multiple paths for you to choose</Paragraph>
        <div>components de input + button</div>
        <Subtitle>or continue with these social profile</Subtitle>
        <div>componente de icons</div>
      </Container>
    </div>
  )
}

export default Register