import { Container } from "./styles"

type ContainerProps = {
  children: React.ReactElement
}

export const Header = ({ children }: ContainerProps) => {
  return(
    <Container>{children}</Container>
  )
}