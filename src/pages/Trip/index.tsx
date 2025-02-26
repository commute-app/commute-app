import BottomSheet from '@/components/common/BottomSheet'
import Svg from '@/components/common/Svg'
import BottomBar from '@/components/feature/BottomBar'
import TopBar from '@/components/feature/TopBar'
import TripDetail from '@/components/feature/TripDetail'

export default function Trip() {
  return (
    <main className="flex h-screen w-[400px] flex-col overflow-hidden bg-map bg-cover bg-no-repeat">
      <div className="flex-1 p-4">
        <TopBar />
        <Svg name="compass" className="mt-4 size-12" />
      </div>
      <div>
        <TripDetail price={1200} />
        <BottomBar defaultSelected={1} />
      </div>
    </main>
  )
}
