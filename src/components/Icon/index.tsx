import icons from "../../assets/Icons";
import { Figure, Img } from "./styles"
import { IconsEnum } from "./enum";

type IconProps = {
  href?: string,
  name: IconsEnum,
  width?: number,
  height?: number,
  onChange?(): void
}

const Icon = ({ name, width, height }: IconProps) => {
  return(
    <a href={(icons[name] as { value: string; href: string }).href}>
      <Figure width={width} height={height}>
        <Img src={icons[name].value} />
      </Figure>
    </a>
  )
}

export default Icon