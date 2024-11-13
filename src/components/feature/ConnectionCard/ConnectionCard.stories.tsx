import { Meta, StoryObj } from '@storybook/react'
import ConnectionCard from '.'

const meta: Meta<typeof ConnectionCard> = {
  title: 'Components/Feature/ConnectionCard',
  component: ConnectionCard,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' }
    },
    photoUrl: {
      control: { type: 'text' }
    },
    initiallyOpen: {
      control: { type: 'boolean' }
    }
  },
  args: {
    name: 'John Doe',
    photoUrl: 'https://via.placeholder.com/150',
    initiallyOpen: false
  }
}

export default meta

type Story = StoryObj<typeof ConnectionCard>

export const Default: Story = {
  name: 'Default',
  render: (args) => <ConnectionCard {...args} />
}
