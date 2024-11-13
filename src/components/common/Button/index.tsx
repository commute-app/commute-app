import type { VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { buttonVariant, iconVariant } from './variants'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  leftIcon?: React.ElementType
  rightIcon?: React.ElementType
}

export default function Button({
  variant,
  size,
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...rest
}: ButtonProps) {
  return (
    <button className={buttonVariant({ size, variant })} {...rest}>
      {LeftIcon && <LeftIcon className={iconVariant({ size })} />}
      {children}
      {RightIcon && <RightIcon className={iconVariant({ size })} />}
    </button>
  )
}
