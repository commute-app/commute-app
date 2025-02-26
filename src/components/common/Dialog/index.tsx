import { Icon } from '../../../types'
import Button from '../Button'
import Svg from '../Svg'
import Typography from '../Typography'
import classNames from 'classnames'

interface DialogProps {
  title: string
  isOpen: boolean
  description: string
  icon?: Icon
  onClose: () => void
  onAction?: () => void
}

export default function Dialog({
  title,
  isOpen,
  description,
  icon,
  onClose,
  onAction
}: DialogProps) {
  return (
    <div
      className={classNames(
        'absolute inset-0 z-50 flex items-center justify-center',
        { hidden: !isOpen }
      )}
    >
      <div className="space-y-6 rounded-lg bg-surface-light p-6 shadow-lg  max-w-[90%]">
        <div className="flex w-full items-center justify-between">
          <Typography variant="h4" className="text-black">
            {title}
          </Typography>
          {icon && (
            <div className="rounded-full p-2">
              <Svg className="size-6" name={icon} />
            </div>
          )}
        </div>
        <Typography variant="body2" className="text-gray-600">
          {description}
        </Typography>
        <div className="flex items-center justify-center gap-4">
          <Button size="large" variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button size="large" variant="fulfilled" onClick={onAction}>
            Action
          </Button>
        </div>
      </div>
    </div>
  )
}
