import { useState, useEffect } from "react";

import icons from "../../assets/Icons";
import { Image } from '../../components'
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { ImagesEnum } from '../../components/Image/enum'
import TextInput from '../../components/Input'

import { Container, Div, Box, Group, Headding, InputsGroup, Subtitle, IconGroup, Span, Link } from "./styles"

const Login = () => {
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
    <Container>
    <Div>
      <Image name={ImagesEnum.logo} />
    </Div>
    <Group>
        <Box>
          <Headding>Login</Headding>
        </Box>
        <InputsGroup className="inputs-group">
          <TextInput name="EmailInput" type="email" value={value} placeholder="Email"/>
          <TextInput name="PasswordInput" type="password" value={value} placeholder="Password"/>
          <Button onClick={handleOnClick}>Login</Button>
        </InputsGroup>
        <Subtitle>or continue with these social profile</Subtitle>
        <IconGroup>
          <>
          {Object.keys(icons).map((item) => <Icon name={`${item}`} href={`${item}`}/>)}
          </>
        </IconGroup>
        <Subtitle>Don’t have an account yet?<Span><Link href="register-page">Register</Link></Span></Subtitle>
    </Group>
  </Container>
  )
}

export default Login