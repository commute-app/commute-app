import { useState } from 'react'
import Dialog from '../../components/common/Dialog'
import BottomBar from '../../components/feature/BottomBar'
import TripData from '../../components/feature/TripData'

export default function TripAlert() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <main className="flex h-screen w-[340px] flex-col overflow-hidden bg-map bg-contain bg-no-repeat relative">
      <div className="flex-1">
        <TripData
          direction="right"
          distance="1.2 km"
          stopName="Parada T"
          timeRemaining="45 min"
        />
      </div>
      <div>
        <Dialog
          title="Demora"
          isOpen={isOpen}
          description="Encontramos rutas que serán más rápidas que la actual. ¿Desea cambiar de ruta?"
          icon="alert"
          onClose={() => {
            setIsOpen(false)
          }}
        />
      </div>
      <div>
        <BottomBar defaultSelected={1} />
      </div>
    </main>
  )
}
