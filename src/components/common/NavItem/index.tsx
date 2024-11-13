import { cva, VariantProps } from 'class-variance-authority'
import Svg from '../Svg'
import Typography from '../Typography'

const navItemVariants = cva(
  ['px-5', 'py-1', 'rounded-2xl', 'flex', 'items-center', 'justify-center'],
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
}

export default function NavItem({
  icon,
  title,
  selected = false
}: NavItemProps) {
  return (
    <div className="py-3">
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
