import React, { useState, useRef } from 'react'

interface SelectProps {
  // options: any[]

  children: React.ReactElement

  header: React.ReactNode
}

export function Select({ header, children }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggling = () => setIsOpen(!isOpen)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative my-0 max-w-48" ref={dropdownRef}>
      <DropdownHeader onClick={toggling}>{header}</DropdownHeader>
      {isOpen && <div className="absolute z-50 w-max">{children}</div>}
    </div>
  )
}

export function DropdownHeader({
  children,
  onClick
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {children}
    </div>
  )
}

export function DropdownList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="max-h-36 overflow-y-auto rounded-lg bg-white shadow-[0px_1px_5px_0px] shadow-black/50">
      {children}
    </ul>
  )
}

export function DropdownItem({
  children,
  onClick
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <li
      className="flex cursor-pointer flex-row items-center gap-2 p-3 hover:bg-grey-200"
      onClick={onClick}
    >
      {children}
    </li>
  )
}
