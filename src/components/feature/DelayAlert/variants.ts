import { cva } from "class-variance-authority";

export const delayAlertVariants = cva(
    [
        'flex',
        'flex-row',
        'items-stretch',
        'justify-between',
        'rounded-b-[28px]',
        'gap-3',
        'px-5',
        'py-4'
    ],
    {
        variants: {
            variant: {
                warning: ['bg-warning-100', 'text-dark'],
                danger: ['bg-error-100', 'text-error-900']
            }
        },
        defaultVariants: {
            variant: 'warning'
        }
    }
)
