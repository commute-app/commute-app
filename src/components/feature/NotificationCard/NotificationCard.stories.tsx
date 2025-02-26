import { Meta, StoryObj } from '@storybook/react'
import NotificationCard from '@/components/feature/NotificationCard/index.tsx'
import { PLACEHOLDER_IMAGE } from '@/cons'

const meta: Meta<typeof NotificationCard> = {
  title: 'Components/Feature/NotificationCard',
  component: NotificationCard,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' }
    },
    photoUrl: {
      control: { type: 'text' }
    },
    type: {
      control: { type: 'select' },
      options: ['edit', 'proposal', 'trip', 'invite'],
      defaultValue: 'edit'
    },
    destination: {
      control: { type: 'text' },
    },
  },
  args: {
    name: 'John Doe',
    photoUrl: PLACEHOLDER_IMAGE,
    type: 'edit'
  }
}

export default meta
type Story = StoryObj<typeof NotificationCard>

export const Edit: Story = {
  args: {
    type: 'edit'
  },
  name: 'Edit',
  render: (args) => <NotificationCard {...args} />
}

export const Proposal: Story = {
  args: {
    type: 'proposal',
    destination: 'Paris'
  },
  name: 'Proposal',
  render: (args) => <NotificationCard {...args} />
}

export const Trip: Story = {
  args: {
    type: 'trip',
    destination: 'Paris'
  },
  name: 'Trip',
  render: (args) => <NotificationCard {...args} />
}

export const Invite: Story = {
  args: {
    type: 'invite'
  },
  name: 'Invite',
  render: (args) => <NotificationCard {...args} />
}
