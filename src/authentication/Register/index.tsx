import React, { useState, useEffect } from "react";
import { Image } from '../../components'
import Button from "../../components/Button";
import { ImagesEnum } from '../../components/Image/enum'
import TextInput from '../../components/Input'

import { Container, Headding, Paragraph, Wrapper, Subtitle, Span } from "./styles"

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
        <Image name={ImagesEnum.logo} />
        <Headding>Join thousands of learners from around the world</Headding>
        <Paragraph>Master web development by making real-life projects. There are multiple paths for you to choose</Paragraph>
        <Wrapper className="inputs-group">
          <TextInput name="EmailInput" type="email" value={value} placeholder="Email"/>
          <TextInput name="PasswordInput" type="password" value={value} placeholder="Password"/>
          <Button onClick={handleOnClick}>Start coding now</Button>
        </Wrapper>
        <Subtitle>or continue with these social profile</Subtitle>
        <div>componente de icons</div>
        <Subtitle>Adready a member?<Span>Login</Span></Subtitle>
      </Container>
    </div>
  )
}

export default Register