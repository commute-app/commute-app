import Typography from '../Typography'
import { InputHTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import Svg from '../Svg'

const textFieldVariants = cva([], {
  variants: {
    variant: {
      outlined: ['border', 'border-primary-500'],
      underlined: ['border-b', 'border-primary-500']
    }
  },
  defaultVariants: {
    variant: 'outlined'
  }
})

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textFieldVariants> {
  label: string
  error?: string
  icon?: string
}

export default function TextField({
  variant,
  error,
  label,
  icon,
  ...props
}: TextFieldProps) {
  return (
    <div>
      <div
        className={classNames(
          'relative',
          'flex',
          'flex-row',
          'items-start',
          'gap-2',
          'rounded-[4px]',
          'p-5',
          'pb-0',
          textFieldVariants({ variant }),
          {
            '!border-error-500 !text-error-500': error,
            '!border-grey-700 bg-grey-200 !text-grey-700': props.disabled
          }
        )}
      >
        <div className="flex-1 *:h-8">
          <input
            type="text"
            className="bg-transparent peer w-full pb-4 text-base accent-primary-500 outline-none ring-0"
            pattern=".*[a-zA-Z].*"
            required
            {...props}
          />
          <Typography
            variant={'body1'}
            className={classNames(
              'absolute',
              'top-1/2',
              '-translate-y-1/2',
              'w-fit',
              'flex',
              'items-center',
              'font-semibold',
              'pointer-events-none',
              'transition-all',
              'duration-300',
              'peer-valid:!translate-y-1/4',
              'peer-focus:!translate-y-1/4',
              'peer-valid:-top-2',
              'peer-valid:!text-sm',
              'peer-focus:-top-2',
              'peer-focus:!text-sm'
            )}
          >
            {label}
          </Typography>
        </div>
        {icon && <Svg className="h-6 w-6 shrink-0" name={icon} />}
      </div>
      {error && !props.disabled && (
        <Typography variant="body3" className="mt-1 text-left text-error-500">
          {error}
        </Typography>
      )}
    </div>
  )
}
