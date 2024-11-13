import Button from '../Button'
import Typography from '../Typography'
import classNames from 'classnames'

interface DialogProps {
  title: string
  isOpen: boolean
  description: string
  hasIcon?: boolean
  icon?: React.ElementType
  onClose: () => void
  onAction?: () => void
}

export default function Dialog({
  title,
  isOpen,
  description,
  hasIcon,
  icon: Icon,
  onClose,
  onAction,
}: DialogProps) {
  return (
    <div
      className={classNames(
        'fixed inset-0 z-50 flex items-center justify-center',
        { hidden: !isOpen },
      )}
    >
      <div className="bg-surface-light rounded-lg shadow-lg p-6 space-y-6">
        <div className='flex w-full items-center justify-between'>
          <Typography variant="h4" className="text-black">{title}</Typography>
          {hasIcon && Icon && (
            <div className="p-2 rounded-full bg-black">
                <Icon className="text-white size-6" />
            </div>
          )}
        </div>
        <Typography variant="body2" className="text-gray-600">
          {description}
        </Typography>
        <div className="flex items-center justify-center gap-4">
        <Button size="large" variant="outlined" onClick={onClose} >Cancelar</Button>
        <Button size="large" variant="fulfilled" onClick={onAction} >Action</Button>
        </div>
      </div>
    </div>
  )
}