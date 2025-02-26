import classNames from 'classnames'
import Svg from '../Svg'
import { Icon } from '../../../types'
import Typography from '../Typography'
import { VariantProps } from 'class-variance-authority'
import { iconVariant, tripDataChipVariant, typographyVariant } from './variants'

interface TripDataChipProps
  extends VariantProps<typeof tripDataChipVariant>,
    VariantProps<typeof iconVariant> {
  icon: Icon
  value: string
}
export default function TripDataChip({
  icon,
  value,
  orientation,
  size
}: TripDataChipProps) {
  return (
    <div className={tripDataChipVariant({ orientation })}>
      <Svg name={icon} size="16" className={iconVariant({ size })} />
      <Typography
        variant="body3"
        className={classNames(typographyVariant({ size }), {
          'bg-primary-200': icon === 'train',
          'bg-warning-500': icon === 'bus'
        })}
      >
        {value}
      </Typography>
    </div>
  )
}
