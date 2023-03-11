import React from 'react'
import { Image } from '../../components'
import { Header } from '../../components/Header'
import { ImagesEnum } from '../../components/Image/enum'
import { Body, Container, ButtonContainer, InfosContainer } from './styles'

const Profile = () => {
  return(
    <Container>
      <Header>
        <>
          <Image name={ImagesEnum.logo}/>
          <div>menu aqui</div>
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
