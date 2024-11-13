import './App.css'
import BottomSheet from './components/common/BottomSheet'
import Button from './components/common/Button'
import BottomBar from './components/feature/BottomBar'
import ConnectionCard from './components/feature/ConnectionCard'

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

function App() {
  return (
    <main className="bg-map flex h-screen flex-col bg-contain bg-no-repeat">
      <div className="flex-1"></div>
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

export default App
