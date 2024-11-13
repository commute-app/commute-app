import { cva } from 'class-variance-authority'

export const buttonVariant = cva(
  [
    'sm:w-fit w-full',
    'rounded-3xl',
    'flex',
    'flex-row',
    'gap-2',
    'items-center',
    'justify-center',
    'font-semibold',
    'tracking-normal'
  ],
  {
    variants: {
      variant: {
        fulfilled: [
          'bg-primary-500 text-white',
          'hover:bg-primary-700 hover:text-white',
          'disabled:bg-grey-500 disabled:text-grey-800'
        ],
        outlined: [
          'text-primary-500 border border-primary-500 bg-white',
          'hover:bg-primary-100',
          'disabled:border-grey-700 disabled:text-grey-700'
        ],
        ghost: [
          'bg-transparent text-primary-500',
          'hover:text-primary-700 hover:bg-primary-100',
          'disabled:bg-grey-200 disabled:text-grey-700'
        ]
      },
      size: {
        small: ['px-4 py-2 text-xs'],
        medium: ['px-5 py-2 text-sm'],
        large: ['px-6 py-2 text-base']
      }
    },
    defaultVariants: {
      variant: 'fulfilled',
      size: 'medium'
    }
  }
)

export const iconVariant = cva(['shrink-0'], {
  variants: {
    size: {
      small: ['h-4 w-4'],
      medium: ['h-5 w-5'],
      large: ['h-6 w-6']
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})
