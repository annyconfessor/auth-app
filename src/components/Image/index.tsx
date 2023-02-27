import images from '../../assets/images';
import { ImagesEnum } from './enum'
import { Figure, Img } from './styles'

type ImageProps = {
  name: ImagesEnum;
  width?: number;
  height?: number;
}

const Image = ({ name, width, height }: ImageProps) => {
  return(
    <Figure width={width} height={height}>
      <Img src={images[name]} />
    </Figure>
  )
}

export default Image