import classNames from 'classnames'
import Svg from '../Svg'

interface BottomSheetProps {
  children: React.ReactNode
  className?: string
}

export default function BottomSheet({ children, className }: BottomSheetProps) {
  return (
    <div className="min-w-80 overflow-hidden rounded-t-[28px] bg-surface-card shadow-[0px_45px_62px_-1px_rgba(0,0,0,0.75)]">
      <div className="flex items-center justify-center p-4">
        <Svg name="drag-handle" className="w-8" />
      </div>
      <div
        className={classNames('relative max-h-96 overflow-auto p-2', className)}
      >
        {children}
      </div>
    </div>
  )
}
