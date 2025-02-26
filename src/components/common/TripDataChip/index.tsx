import classNames from 'classnames'
import Svg from '../Svg'
import { Icon } from '../../../types'
import Typography from '../Typography'

interface TripDataChipProps {
  icon: Icon
  value: string
}

export default function TripDataChip({ icon, value }: TripDataChipProps) {
  return (
    <div className="flex w-fit flex-row items-stretch gap-1 text-black">
      <Svg name={icon} size="16" className={'size-4 shrink-0'} />
      <Typography
        variant="body3"
        className={classNames('rounded-[4px] px-1', {
          'bg-primary-200': icon === 'train',
          'bg-warning-500': icon === 'bus'
        })}
      >
        {value}
      </Typography>
    </div>
  )
}
