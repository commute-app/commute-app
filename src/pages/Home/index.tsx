import BottomSheet from '../../components/common/BottomSheet'
import Button from '../../components/common/Button'
import BottomBar from '../../components/feature/BottomBar'
import ConnectionCard from '../../components/feature/ConnectionCard'
import SearchBar from '../../components/feature/SearchBar'

const contacts = [
  {
    name: 'John Doe',
    photoUrl:
      'https://i.pinimg.com/originals/87/14/55/8714556a52021ba3a55c8e7a3547d28c.png'
  },
  {
    name: 'Jane Doe',
    photoUrl:
      'https://i.pinimg.com/originals/87/14/55/8714556a52021ba3a55c8e7a3547d28c.png'
  },
  {
    name: 'John Smith',
    photoUrl:
      'https://i.pinimg.com/originals/87/14/55/8714556a52021ba3a55c8e7a3547d28c.png'
  }
]

export default function Home() {
  return (
    <main className="bg-map flex h-screen w-[350px] flex-col bg-contain bg-no-repeat overflow-hidden">
      <div className="flex-1 p-4">
        <SearchBar
          onMenuClose={() => {}}
          onMenuOpen={() => {}}
          onSearch={() => {}}
        />
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
