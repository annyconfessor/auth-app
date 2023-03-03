import icons from "../../assets/Icons";
import { IconsEnum } from "./enum";
import { Figure, Img } from "./styles"

type IconProps = {
  name: keyof typeof IconsEnum,
  width?: number,
  height?: number
}

const Icon = ({ name, width, height }: IconProps) => {
  return(
    <Figure width={width} height={height}>
      <Img src={icons[name]} />
    </Figure>
  )
}
     
export default Icon