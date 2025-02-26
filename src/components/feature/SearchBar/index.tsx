import { useState } from 'react'
import IconButton from '../../common/IconButton'

export interface SearchBarProps {
  location?: string
  onSearch: (query: string) => void
}

export default function SearchBar({ location = '', onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState(location)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSearchSubmit = () => {
    if (searchText.trim()) {
      onSearch(searchText)
    }
  }

  return (
    <div className="flex flex-row gap-2 rounded-full bg-surface-light px-4 py-3">
      <IconButton
        icon="search"
        onClick={handleSearchSubmit}
        size="small"
        variant="ghost"
        className="shrink-0"
      />
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder={'¿A dónde quieres ir?'}
        className="text-gray-800 w-full flex-1 border-none bg-transparent focus:outline-none"
      />
    </div>
  )
}
