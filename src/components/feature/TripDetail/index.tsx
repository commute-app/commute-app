import BottomSheet from '@/components/common/BottomSheet'
import Button from '@/components/common/Button'
import Svg from '@/components/common/Svg'
import TripDataChip from '@/components/common/TripDataChip'
import Typography from '@/components/common/Typography'
import { Icon } from '@/types'
import classNames from 'classnames'

const DEFAULT_TRIP: Trip[] = [
  {
    type: 'start',
    steps: [
      {
        instruction: 'Universidad Austral',
        time: '3pm'
      }
    ]
  },
  {
    type: 'walk',
    steps: [
      {
        instruction: 'Caminar 800m',
        time: '11 min'
      }
    ]
  },
  {
    type: 'bus',
    steps: [
      {
        instruction: 'Av. Corrientes',
        details: '3pm: No muy concurrido'
      },
      {
        stopName: '147',
        instruction: 'Subir al 147',
        details: 'Salió',
        time: '3:10pm'
      },
      {
        details: '5 paradas'
      },
      {
        instruction: 'Bajar en Av. Corrientes y Callao',
        time: '3:20pm'
      }
    ]
  },
  {
    type: 'walk',
    steps: [
      {
        instruction: 'Caminar 800m',
        time: '11 min'
      }
    ]
  },
  {
    type: 'train',
    steps: [
      {
        instruction: 'Estación Retiro',
        details: '3:30pm: No muy concurrido'
      },
      {
        stopName: 'Tren Mitre',
        instruction: 'Subir',
        details: 'Salió',
        time: '3:40pm'
      }
    ]
  },
  {
    type: 'destination',
    steps: [
      {
        instruction: 'Universidad de Palermo',
        time: '4pm'
      }
    ]
  }
]

interface Trip {
  type: 'start' | 'walk' | 'bus' | 'train' | 'destination'
  steps: {
    stopName?: string
    instruction?: string
    details?: string
    time?: string
  }[]
}

interface TripDetailProps {
  trip?: Trip[]
  price: number
}

export default function TripDetail({
  trip = DEFAULT_TRIP,
  price
}: TripDetailProps) {
  const tripType = trip.reduce<{ bus: boolean; train: boolean }>(
    (acc, curr) => {
      if (curr.type === 'bus') return { ...acc, bus: true }
      if (curr.type === 'train') return { ...acc, train: true }
      return acc
    },
    {
      bus: false,
      train: false
    }
  )

  const end = trip[trip.length - 1].steps[0]

  return (
    <BottomSheet className="!max-h-[unset] !p-0">
      <div className="flex flex-row items-center justify-between gap-4 px-5 py-2 shadow-md">
        <div>
          <Typography variant="body1" className="!font-bold">
            {end.instruction}
          </Typography>
          <div className="flex flex-row items-center gap-1.5">
            {tripType.bus && <Svg name="bus" className="size-4" />}
            {tripType.train && <Svg name="train" className="size-4" />}
            <Typography variant="body2" className="text-center">
              Precio: ${price}
            </Typography>
          </div>
        </div>

        <Typography variant="body2" className="!font-bold">
          {end.time}
        </Typography>
      </div>
      <div className="max-h-96 space-y-2 overflow-y-auto px-5 py-4 pb-14">
        {trip.map((trip) => {
          const icon: Record<Trip['type'], Icon> = {
            start: 'location',
            walk: 'walking',
            bus: 'bus',
            train: 'train',
            destination: 'location'
          }
          return (
            <div className="flex flex-row gap-6">
              {trip.type === 'bus' || trip.type === 'train' ? (
                <TripProgress type={trip.type} />
              ) : (
                <Svg name={icon[trip.type]} className="mt-2 size-6 shrink-0" />
              )}
              <div className="flex-1">
                {trip.steps.map((step) => (
                  <Step step={step} type={trip.type} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="absolute bottom-0 flex w-full flex-row items-center justify-between gap-4 bg-white px-5 py-2 shadow-[0px_6px_12px_0px]">
        <div className="flex w-1/3 flex-row items-center gap-2">
          <Button
            size="small"
            leftIcon="cross"
            className="!bg-error-500 text-white hover:!bg-error-900"
          >
            Cancelar
          </Button>
          <Button size="small" leftIcon="pencil" variant="fulfilled">
            Editar
          </Button>
          <Button size="small" leftIcon="arrow-left" variant="ghost">
            Volver
          </Button>
        </div>
      </div>
    </BottomSheet>
  )
}

function TripProgress({ type }: { type: Trip['type'] }) {
  return (
    <div
      className={classNames(
        'ml-1',
        'w-4',
        'relative',
        'border-4 border-grey-400',
        'rounded-lg',
        {
          'bg-warning-500': type === 'bus',
          'bg-tertiary-500': type === 'train'
        }
      )}
    >
      <div className="absolute -top-1 left-1/2 grid -translate-x-1/2 place-content-center rounded-full bg-primary-500 p-1">
        <Svg name={type as Icon} className="size-4 text-white" />
      </div>
    </div>
  )
}

function Step({
  step,
  type
}: {
  step: Trip['steps'][number]
  type: Trip['type']
}) {
  return (
    <div className="flex flex-row items-center justify-between gap-2 border-b border-dashed border-b-grey-500 py-2 pr-6">
      {step.stopName && (type === 'bus' || type === 'train') && (
        <TripDataChip icon={type} value={step.stopName} />
      )}
      <div className="w-fit">
        {step.instruction && (
          <Typography variant="body1" className="!font-bold">
            {step.instruction}
          </Typography>
        )}
        {step.details && (
          <Typography variant="body2">{step.details}</Typography>
        )}
      </div>
      {step.time && (
        <Typography variant={'body2'} className="!font-bold">
          {step.time}
        </Typography>
      )}
    </div>
  )
}
