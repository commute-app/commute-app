import type { VariantProps } from 'class-variance-authority'
import { createElement, HTMLAttributes } from 'react'
import { typographyVariants } from './variants'

type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'

const tags: Record<TypographyVariants, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p'
}

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

export default function Typography({
  variant = 'body1',
  children,
  ...props
}: TypographyProps) {
  // typescript como no te vas a dar cuenta que variant no es null
  return createElement(
    tags[variant ?? 'body1'],
    { className: typographyVariants({ variant }), ...props },
    children
  )
}
