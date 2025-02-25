import type { VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { buttonVariant, iconVariant } from './variants'
import Svg from '../Svg'
import { type Icon } from '../../../types'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  leftIcon?: Icon
  rightIcon?: Icon
}

export default function Button({
  variant,
  size,
  children,
  leftIcon,
  rightIcon,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonVariant({ size, variant, className })} {...rest}>
      {leftIcon && <Svg className={iconVariant({ size })} name={leftIcon} />}
      {children}
      {rightIcon && <Svg className={iconVariant({ size })} name={rightIcon} />}
    </button>
  )
}
