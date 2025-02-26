import { Meta, StoryObj } from '@storybook/react'
import TopBar from '.'

const meta: Meta<typeof TopBar> = {
  title: 'Components/Feature/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  argTypes: {
    notificationCount: {
      control: { type: 'number' }
    }
  },
  args: {
    notificationCount: 0
  }
}

export default meta

type Story = StoryObj<typeof TopBar>

export const Default: Story = {
  name: 'Default',
  render: (args) => <TopBar {...args} />
}

export const WithNotifications: Story = {
  args: {
    notificationCount: 3
  },
  name: 'With notifications',
  render: (args) => <TopBar {...args} />
}
