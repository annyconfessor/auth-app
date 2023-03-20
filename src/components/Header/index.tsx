import MenuBar from "../../profile/components/MenuBar"
import Image from "../Image"
import { ImagesEnum } from "../Image/enum"
import { Container } from "./styles"

export const Header = () => {
  return(
    <Container>
      <Image name={ImagesEnum.logo} width={170} height={25} />
      <MenuBar />
    </Container>
  )
}