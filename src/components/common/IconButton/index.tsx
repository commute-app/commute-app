import { ButtonHTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'
import { iconButtonVariant, iconVariant } from './variants'
import { Icon } from '../../../types'
import Svg from '../Svg'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariant>{
  icon: Icon
}

export default function IconButton({
  icon,
  variant,
  size,
  className,
  colorScheme,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button className={iconButtonVariant({ size, variant, colorScheme, className })} {...rest}>
      <Svg name={icon} className={iconVariant({ size })} />
      {children}
    </button>
  )
}
