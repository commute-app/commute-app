import { cva } from "class-variance-authority";

export const typographyVariants = cva(['font-quicksand'], {
    variants: {
        variant: {
            h1: ['text-4xl', 'font-bold', 'mobile:text-6xl'],
            h2: ['text-3xl', 'font-bold', 'mobile:text-4xl'],
            h3: ['text-2xl', 'font-semibold', 'mobile:text-3xl'],
            h4: ['text-xl', 'font-semibold', 'mobile:text-2xl'],
            h5: ['text-lg', 'font-bold', 'mobile:text-xl'],
            h6: ['text-base', 'font-medium', 'mobile:text-lg'],
            subtitle1: ['text-base', 'font-light', 'mobile:text-lg'],
            subtitle2: ['text-base', 'font-light'],
            body1: ['text-base', 'font-normal'],
            body2: ['text-sm', 'font-normal'],
            body3: ['text-xs', 'font-normal']
        }
    },
    defaultVariants: {
        variant: 'body1'
    }
})