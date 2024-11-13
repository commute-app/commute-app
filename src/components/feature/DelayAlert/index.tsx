import { VariantProps } from 'class-variance-authority'
import Svg from '../../common/Svg'
import Typography from '../../common/Typography'
import { HTMLAttributes } from 'react'
import classNames from 'classnames'
import { delayAlertVariants } from './variants'

export interface DelayAlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof delayAlertVariants> {
  delay: string
}

export default function DelayAlert({
  delay,
  variant,
  className,
  onClick,
  ...props
}: DelayAlertProps) {
  return (
    <div className={delayAlertVariants({ variant, className })} {...props}>
      <div className="flex flex-1 flex-row items-center gap-2">
        <Svg
          className={classNames('size-6', 'shrink-0', {
            'stroke-dark': variant === 'warning',
            'stroke-error-900': variant === 'danger'
          })}
          name="alert"
        />
        <Typography variant={'body1'} className="w-full font-bold">
          Demora de {delay}
        </Typography>
      </div>
      <div onClick={onClick}>
        <Svg
          className={classNames('size-6', 'shrink-0', {
            'fill-dark': variant === 'warning',
            'fill-error-900': variant === 'danger'
          })}
          name="cross"
        />
      </div>
    </div>
  )
}
