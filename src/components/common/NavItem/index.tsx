import { cva, VariantProps } from 'class-variance-authority'
import Svg from '../Svg'
import Typography from '../Typography'

const navItemVariants = cva(
  [
    'px-5',
    'py-1',
    'rounded-2xl',
    'flex',
    'items-center',
    'justify-center',
    'w-fit'
  ],
  {
    variants: {
      selected: {
        true: ['bg-primary-100'],
        false: ['bg-transparent']
      }
    }
  }
)

export interface NavItemProps extends VariantProps<typeof navItemVariants> {
  icon: string
  title: string
  onClick?: () => void
}

export default function NavItem({
  icon,
  title,
  onClick,
  selected = false
}: NavItemProps) {
  return (
    <div className="flex flex-1 flex-col items-center py-3" onClick={onClick}>
      <div className={navItemVariants({ selected })}>
        <Svg className="size-6 stroke-2" name={icon} />
      </div>
      <Typography
        variant={'body1'}
        className="text-center !font-bold tracking-wide"
      >
        {title}
      </Typography>
    </div>
  )
}
