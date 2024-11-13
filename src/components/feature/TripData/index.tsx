import LeftCorner from '../../../assets/svg/LeftCorner'
import RightCorner from '../../../assets/svg/RightCorner'
import StraightArrow from '../../../assets/svg/Straight'
import Typography from '../../common/Typography'

interface TripDataProps {
  direction: 'left' | 'right' | 'straight'
  distance: string
  stopName: string
  //   podriamos hacer que sea un Date y calcular la diferencia de tiempo
  timeRemaining: string
}
export default function TripData({
  direction,
  distance,
  stopName,
  timeRemaining
}: TripDataProps) {
  const DirectionIcon = {
    right: RightCorner,
    left: LeftCorner,
    straight: StraightArrow
  }[direction]

  return (
    <div className="flex flex-row items-stretch rounded-b-[28px] bg-surface-light py-4">
      <div className="flex flex-1 flex-col items-center justify-center">
        <DirectionIcon className="size-10" />
        <Typography variant={'body1'}>{distance}</Typography>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="grid h-10 place-content-center">
          <Typography variant={'h5'}>{stopName}</Typography>
        </div>
        <Typography variant={'body1'}>Próxima bajada</Typography>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="grid h-10 place-content-center">
          <Typography variant={'h5'}>{timeRemaining}</Typography>
        </div>
        <Typography variant={'body1'}>Restante</Typography>
      </div>
    </div>
  )
}
