import { PLACEHOLDER_IMAGE } from '@/cons'
import BottomSheet from '../../components/common/BottomSheet'
import Button from '../../components/common/Button'
import BottomBar from '../../components/feature/BottomBar'
import ConnectionCard from '../../components/feature/ConnectionCard'
import SearchBar from '../../components/feature/SearchBar'
import TopBar from '@/components/feature/TopBar'
import Svg from '@/components/common/Svg'

const contacts = [
  {
    name: 'John Doe',
    photoUrl: PLACEHOLDER_IMAGE
  },
  {
    name: 'Jane Doe',
    photoUrl: PLACEHOLDER_IMAGE
  },
  {
    name: 'John Smith',
    photoUrl: PLACEHOLDER_IMAGE
  }
]

export default function Home() {
  return (
    <main className="flex h-screen w-[350px] flex-col overflow-hidden bg-map bg-contain bg-no-repeat">
      <div className="flex-1 p-4">
        <TopBar />
        <Svg name="compass" className="mt-4 size-12" />
      </div>
      <div>
        <BottomSheet>
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <ConnectionCard key={index} {...contact} />
            ))}
            <div className="grid place-content-center">
              <Button
                variant={'outlined'}
                leftIcon="plus-sign"
                className="!w-fit"
              >
                Conectar
              </Button>
            </div>
          </div>
        </BottomSheet>
        <BottomBar defaultSelected={1} />
      </div>
    </main>
  )
}
