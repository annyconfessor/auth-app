import styled from 'styled-components'
import { space, layout, flexbox, position, textAlign, background, border, system, color, grid } from 'styled-system';
import { BoxPropsExtended } from './types'

const cursor = system({
  cursor: {
    property: 'cursor',
    scale: 'cursors',
  },
})

export const StyledBoxComponent = styled.div<BoxPropsExtended>`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  ${textAlign}
  ${background}
  ${border}
  ${cursor}
  ${color}
  ${grid}
  
  transition: background-color 0.3s ease;
  border-radius: ${(props) => props.borderRadius};

  &:hover {
    background-color: ${(props) => props.hoverBg};

    ${cursor ?? `cursor: ${(props: BoxPropsExtended) => props.cursor || "pointer" }`};
  }
  `