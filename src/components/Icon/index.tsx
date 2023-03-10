import icons from "../../assets/Icons";
import { IconsEnum } from "./enum";
import { Figure, Img } from "./styles"

type IconProps = {
  href: string,
  name: keyof typeof IconsEnum,
  width?: number,
  height?: number
}

const Icon = ({ href, name, width, height }: IconProps) => {
  return(
    <a href={icons[name].href}>
      <Figure width={width} height={height}>
        <Img src={icons[name].name} />
      </Figure>
    </a>
  )
}
     
export default Icon