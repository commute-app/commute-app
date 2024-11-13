import Svg from '../../common/Svg'
import Button from '../../common/Button'
import { useState } from 'react'

export interface SearchBarProps {
    isMenuOpen: boolean
    onMenuOpen: () => void
    onMenuClose: () => void
    location: string
    onSearch: (query: string) => void 
}

export default function SearchBar(
    {
        isMenuOpen,
        onMenuOpen,
        onMenuClose,
        location,
        onSearch
    }: SearchBarProps
) {
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
        <div className="flex flex-row px-4 py-3 bg-surface-light rounded-lg">
            <div className='flex w-full justify-between items-center gap-3'>
                {isMenuOpen ? (
                    <Button variant='ghost' onClick={onMenuClose} size="small" className='w-10'>
                        <Svg name="cross" className="size-6 text-gray-600" />
                    </Button>
                ) : (
                    <Button variant='ghost' onClick={onMenuOpen} size="small" className='w-10'>
                        <Svg name="hamburguer" className="size-6 text-gray-600"/>
                    </Button>
                )}<input
                    type='text'
                    value={searchText}
                    defaultValue={location}
                    onChange={handleSearchChange}
                    placeholder={'¿A dónde quieres ir?'}
                    className='w-full bg-transparent border-none focus:outline-none text-gray-800'
                />
                <Button variant='ghost' onClick={handleSearchSubmit} className='w-10'>
                    <Svg name='search' className='size-6 text-gray-600'/>
                </Button>
            </div>
        </div>
    )
}