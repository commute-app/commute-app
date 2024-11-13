import { createElement } from 'react'

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface TypographyProps {
  variant: TypographyVariants
  children: React.ReactNode
}

export default function Typography({
  variant = 'p',
  children,
  ...props
}: TypographyProps) {
  return createElement(variant, props, children)
}
