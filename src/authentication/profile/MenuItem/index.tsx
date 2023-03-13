import icons from "../../../assets/Icons"
import Icon from "../../../components/Icon"
import { Container, Text } from "./styles"

type MenuItemProps = {
  name: keyof typeof icons,
  text: string,
}

const MenuItem = ({ name, text }: MenuItemProps) => {
  return(
    <Container className="menu-item">
      <Icon name={name} width={17} height={17} href={name} />
      <Text>{text}</Text>
    </Container>
  )
}

export default MenuItem