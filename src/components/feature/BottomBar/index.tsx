import { useState } from 'react'
import NavItem from '../../common/NavItem'

const DEFAULT_ITEMS = [
  {
    icon: 'marker',
    title: 'Mapa'
  },
  {
    icon: 'network',
    title: 'Conexiones'
  },
  {
    icon: 'profile',
    title: 'Perfil'
  }
]

export default function BottomBar({ defaultSelected = 0 }) {
  const [selected, setSelected] = useState(defaultSelected)
  return (
    <div className="flex flex-row gap-2 bg-surface-light px-2">
      {DEFAULT_ITEMS.map(({ title, icon }, index) => (
        <NavItem
          key={title}
          title={title}
          icon={icon}
          onClick={() => {
            setSelected(index)
          }}
          selected={selected === index}
        />
      ))}
    </div>
  )
}
