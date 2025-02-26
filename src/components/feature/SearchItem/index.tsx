import { Icon } from '../../../types'
import Svg from '../../common/Svg'
import Typography from '../../common/Typography'

interface SearchItemProps {
  icon: Icon
  headline: string
  supportingText: string
  trailingText?: string
}

export default function SearchItem({
  icon,
  headline,
  supportingText,
  trailingText
}: SearchItemProps) {
  return (
    <div className="border-secondary-light flex flex-row items-center gap-4 border-b p-4 last:border-b-transparent">
      <Svg name={icon} size="24" />
      <div className="flex-1">
        <Typography variant={'body1'} className="!font-bold">
          {headline}
        </Typography>
        <Typography variant={'body1'}>{supportingText}</Typography>
      </div>
      {trailingText && (
        <Typography variant={'body2'} className="!font-bold text-grey-700">
          {trailingText}
        </Typography>
      )}
    </div>
  )
}
