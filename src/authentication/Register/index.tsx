import { useState, useEffect } from "react";
import icons from "../../assets/Icons";
import { Image } from '../../components'
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { ImagesEnum } from '../../components/Image/enum'
import TextInput from '../../components/Input'

import { Container, Div, Group, Headding, Paragraph, InputsGroup, Subtitle, IconGroup, Span, Link } from "./styles"

const Register = () => {
  const [value, setValue] = useState<string>("")

  useEffect(() => {
    const handleValue = () => {
      setValue(value)
      console.log("value", value)
    }

    handleValue()
  }, [value])

  const handleOnClick = () => {
    console.log("clicou")
  }
 
  return(
    <div>
      <Container>
        <Div>
          <Image name={ImagesEnum.logo} />
        </Div>
        <Group>
          <>
            <Headding>Join thousands of learners from around the world</Headding>
            <Paragraph>Master web development by making real-life projects. There are multiple paths for you to choose</Paragraph>
            <InputsGroup className="inputs-group">
              <TextInput name="EmailInput" type="email" value={value} placeholder="Email"/>
              <TextInput name="PasswordInput" type="password" value={value} placeholder="Password"/>
              <Button onClick={handleOnClick}>Start coding now</Button>
            </InputsGroup>
            <Subtitle>or continue with these social profile</Subtitle>
            <IconGroup>
              <>
              {Object.keys(icons).map((item) => <Icon name={`${item}`} href={`${item}`}/>)}
              {/* <Icon name="Google"/>
              <Icon name="Facebook"/>
              <Icon name="Twitter"/>
              <Icon name="Github"/> */}
              </>
            </IconGroup>
            <Subtitle>Adready a member?<Span><Link href="login-page">Login</Link></Span></Subtitle>
          </>
        </Group>
      </Container>
    </div>
  )
}

export default Register