import IconButton from '@/components/common/IconButton'
import SearchBar from '../SearchBar'
import classNames from 'classnames'

interface TopBarProps {
  notificationCount?: number
}

export default function TopBar({ notificationCount = 0 }: TopBarProps) {
  return (
    <div className="flex items-center gap-3">
      <SearchBar onSearch={() => {}} />
      <div className="relative">
        <IconButton icon="bell" size="large" />
        <div
          className={classNames(
            'absolute right-0 top-0',
            'size-5',
            'rounded-full bg-error-500',
            {
              hidden: notificationCount === 0
            }
          )}
        ></div>
      </div>
    </div>
  )
}
