import { cva } from 'class-variance-authority'

export const iconButtonVariant = cva(
  [
    'w-fit',
    'rounded-full',
    'flex',
    'flex-row',
    'gap-2',
    'items-center',
    'justify-center',
    'font-semibold',
    'tracking-normal',
    'transition-all',
    'duration-300',
  ],
  {
    variants: {
      variant: {
        fulfilled: [
          'hover:bg-opacity-80',
          'disabled:bg-grey-500 disabled:text-grey-800'
        ],
        outlined: [
          'border',
          'hover:bg-opacity-20',
          'disabled:border-grey-700 disabled:text-grey-700'
        ],
        ghost: [
          'hover:bg-opacity-20',
          'disabled:bg-grey-200 disabled:text-grey-700'
        ]
      },
      size: {
        small: ['p-2'],
        medium: ['p-3'],
        large: ['p-4']
      },
      colorScheme: {
        primary: '',
        error: '',
      },
    },
    compoundVariants: [
      {
        variant: 'fulfilled',
        colorScheme: 'primary',
        class: ['bg-primary-500 text-white', 'hover:bg-primary-700']
      },
      {
        variant: 'fulfilled',
        colorScheme: 'error',
        class: ['bg-error-500 text-white', 'hover:bg-error-700']
      },
      {
        variant: 'outlined',
        colorScheme: 'primary',
        class: ['border-primary-500 text-primary-500', 'hover:bg-primary-100']
      },
      {
        variant: 'outlined',
        colorScheme: 'error',
        class: ['border-error-500 text-error-500', 'hover:bg-error-100']
      },
      {
        variant: 'ghost',
        colorScheme: 'primary',
        class: ['text-primary-500', 'hover:text-primary-700 hover:bg-primary-100']
      },
      {
        variant: 'ghost',
        colorScheme: 'error',
        class: ['text-error-500', 'hover:text-error-700 hover:bg-error-100']
      }
    ],
    defaultVariants: {
      variant: 'fulfilled',
      size: 'medium',
      colorScheme: 'primary'
    }
  }
)

export const iconVariant = cva(['shrink-0'], {
  variants: {
    size: {
      small: ['h-6 w-6'],
      medium: ['h-6 w-6'],
      large: ['h-6 w-6']
    },
  },
  defaultVariants: {
    size: 'medium',
  }
})
