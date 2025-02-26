import { useState } from 'react'
import Typography from '../../common/Typography'
import Button from '../../common/Button'
import classNames from 'classnames'
import { PLACEHOLDER_IMAGE } from '@/cons'

interface ConnectionCardProps {
  name: string
  photoUrl: string
  initiallyOpen?: boolean
}
export default function ConnectionCard({
  name,
  photoUrl = PLACEHOLDER_IMAGE,
  initiallyOpen = false
}: ConnectionCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(initiallyOpen)
  return (
    <div className="overflow-hidden rounded-xl bg-surface-light">
      <button
        className="flex w-full flex-row items-center gap-4 p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={photoUrl}
          alt={`${name} photo`}
          className="size-10 rounded-full object-cover"
        />
        <Typography variant="h6">{name}</Typography>
      </button>
      <div
        className={classNames(
          'transition-all',
          'duration-300',
          isOpen ? 'h-max opacity-100' : 'h-0 opacity-0'
        )}
      >
        <div className="flex flex-row gap-2 p-4">
          <Button variant={'outlined'}>Asignar Viaje</Button>
          <Button variant={'fulfilled'}>Seguir</Button>
        </div>
      </div>
    </div>
  )
}
