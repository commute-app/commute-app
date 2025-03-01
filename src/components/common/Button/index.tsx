import type { VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { buttonVariant, iconVariant } from './variants'
import Svg from '../Svg'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  leftIcon?: string
  rightIcon?: string
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
      {leftIcon && (
        <Svg className={iconVariant({ size, variant })} name={leftIcon} />
      )}
      {children}
      {rightIcon && (
        <Svg className={iconVariant({ size, variant })} name={rightIcon} />
      )}
    </button>
  )
}
