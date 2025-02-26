import { cva } from "class-variance-authority"

export const tripDataChipVariant = cva(
    ['flex', 'w-fit', 'items-center', 'gap-1', 'text-black'],
    {
        variants: {
            orientation: {
                row: 'flex-row',
                column: 'flex-col'
            }
        },
        defaultVariants: {
            orientation: 'row'
        }
    }
)

export const iconVariant = cva(['shrink-0'], {
    variants: {
        size: {
            medium: ['size-4'],
            large: ['size-8']
        }
    },
    defaultVariants: {
        size: 'medium'
    }
})

export const typographyVariant = cva(['rounded-[4px]'], {
    variants: {
        size: {
            medium: ['px-1'],
            large: ['px-2 py-1']
        }
    },
    defaultVariants: {
        size: 'medium'
    }
})