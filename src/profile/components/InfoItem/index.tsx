import { Container, Subtitle, Title } from "./styles"

type InfoItemProps = {
  item: string,
  subject: string | number | React.ReactElement
}

const InfoItem = ({ item, subject }: InfoItemProps) => {
  
  return(
    <Container className="infoitem container">
        <Title>{item}</Title>
        <Subtitle>{subject}</Subtitle>
    </Container>
  )
}

export default InfoItem