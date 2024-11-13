import Svg from '../../common/Svg'
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
  const directionIcon = {
    right: 'right-arrow',
    left: 'left-arrow',
    straight: 'straight-arrow'
  }[direction]

  return (
    <div className="flex flex-row items-stretch rounded-b-[28px] bg-surface-light py-4">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Svg className="size-10" name={directionIcon} />
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
