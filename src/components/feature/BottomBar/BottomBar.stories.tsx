import { Meta, StoryObj } from '@storybook/react'
import BottomBar from '.'

const meta: Meta<typeof BottomBar> = {
  title: 'Components/Feature/BottomBar',
  component: BottomBar,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof BottomBar>

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <div className='w-96'>
      <BottomBar />
    </div>
  )
}
