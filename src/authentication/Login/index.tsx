import React, { useState } from "react";

import { Image } from '../../components'
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { ImagesEnum } from '../../components/Image/enum'
import { IconsEnum } from "../../components/Icon/enum";
import TextInput from '../../components/Input'

import { Container, Div, Box, Group, Heading, InputsGroup, Subtitle, IconGroup, Span, Link } from "./styles"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEmail(e.target.value)
  }
  
  const handlePassword = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPassword(e.target.value)
  }

  return(
    <Container>
    <Div>
      <Image name={ImagesEnum.logo} />
    </Div>
    <Group>
        <Box>
          <Heading>Login</Heading>
        </Box>
        <InputsGroup className="inputs-group"> 
          <TextInput name="EmailInput" type="email" value={email} placeholder="Email" onChange={handleEmail}/>
          <TextInput name="PasswordInput" type="password" value={password} placeholder="Password" onChange={handlePassword}/>
          <Button onClick={() => {}}>Login</Button>
        </InputsGroup>
        <Subtitle>or continue with these social profile</Subtitle>
        <IconGroup>
          <>
          {(Object.keys(IconsEnum) as (keyof typeof IconsEnum)[]).map((key, value) => {
            return(
              <Icon name={IconsEnum[key]} href={key}/>
            )
          })}
          </>
        </IconGroup>
        <Subtitle>Don’t have an account yet?<Span><Link href="register-page">Register</Link></Span></Subtitle>
    </Group>
  </Container>
  )
}

export default Login