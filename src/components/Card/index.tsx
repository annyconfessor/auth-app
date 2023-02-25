import { ReactElement } from "react";
import { Container } from "./styles";

type CardProps = {
  children: ReactElement
}

const Card = ({ children }: CardProps) => {
  return(
    <Container>{children}</Container>
  )
}

export default Card;