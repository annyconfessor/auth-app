import styled from "styled-components"
import { variant } from "styled-system"

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
      fontSize: 16
    },
    paragraph: {
      fontSize: 14
    }
  }
})}
`

export default TextComponent