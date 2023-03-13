import icons from "../../assets/Icons";
import { Figure, Img } from "./styles"

type IconProps = {
  href?: string,
  name: keyof typeof icons,
  width?: number,
  height?: number
}

const Icon = ({ name, width, height }: IconProps) => {
  return(
    <a href={icons[name].href}>
      <Figure width={width} height={height}>
        <Img src={icons[name].name} />
      </Figure>
    </a>
  )
}
     
export default Icon