import { Container, Subtitle, Title, LeftContent, RightContent } from "./styles"

type InfoItemProps = {
  item: string,
  subject: string | number | React.ReactElement
}

const InfoItem = ({ item, subject }: InfoItemProps) => {
  
  return(
    <Container className="infoitem container">
      <LeftContent>
        <Title>{item}</Title>
      </LeftContent>
      <RightContent>
        <Subtitle>{subject}</Subtitle>
      </RightContent>
    </Container>
  )
}

export default InfoItem