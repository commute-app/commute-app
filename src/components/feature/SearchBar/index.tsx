import Svg from '../../common/Svg'
import Button from '../../common/Button'
import { useState } from 'react'

export interface SearchBarProps {
  isMenuOpen?: boolean
  onMenuOpen: () => void
  onMenuClose: () => void
  location?: string
  onSearch: (query: string) => void
}

export default function SearchBar({
  isMenuOpen=false,
  onMenuOpen,
  onMenuClose,
  location,
  onSearch
}: SearchBarProps) {
  const [searchText, setSearchText] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSearchSubmit = () => {
    if (searchText.trim()) {
      onSearch(searchText)
    }
  }

  return (
    <div className="flex flex-row rounded-full bg-surface-light px-4 py-3">
      <div className="flex w-full items-center justify-between gap-3">
        {isMenuOpen ? (
          <Button
            variant="ghost"
            onClick={onMenuClose}
            size="small"
            className="!w-fit"
          >
            <Svg name="cross" className="text-gray-600 size-6" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            onClick={onMenuOpen}
            size="small"
            className="!w-fit"
          >
            <Svg name="hamburguer" className="text-gray-600 size-6" />
          </Button>
        )}
        <input
          type="text"
          value={searchText}
          defaultValue={location}
          onChange={handleSearchChange}
          placeholder={'¿A dónde quieres ir?'}
          className="bg-transparent text-gray-800 w-full flex-1 border-none focus:outline-none"
        />
        <Button variant="ghost" onClick={handleSearchSubmit} className="!w-fit">
          <Svg name="search" className="text-gray-600 size-6" />
        </Button>
      </div>
    </div>
  )
}
