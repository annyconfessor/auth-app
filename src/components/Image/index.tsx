import images from '../../assets/images';
import { ImagesEnum } from './enum'
import { Figure, Img } from './styles'

type ImageProps = {
  name: ImagesEnum;
  width?: number;
  height?: number;
  borderRadius?: number;
}

const Image = ({ name, width, height, borderRadius}: ImageProps) => {
  return(
    <Figure width={width} height={height}>
      <Img src={images[name]} borderRadius={borderRadius}/>
    </Figure>
  )
}

export default Image