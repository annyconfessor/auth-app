import styled from "styled-components"
import { variant, space, color, layout } from "styled-system"

type TextProps = {
  variant: 'title' | 'heading' | 'subheading' | 'body' | 'paragraph'
}

const TextComponent = styled.span<TextProps>`
${variant({
  variants: {
    title: {
      fontSize: 36,
      fontWeight: 600,
      color: '#32264D'
    },
    heading: {
      fontSize: 26
    },
    subheading: {
      fontSize: 21
    },
    body: {
      fontSize: 16,
      color: '#9C98A6'
    },
    paragraph: {
      fontSize: 14,
      color: '#9C98A6'
    }
  }
})}
${space}
${color}
${layout}
`

export default TextComponent