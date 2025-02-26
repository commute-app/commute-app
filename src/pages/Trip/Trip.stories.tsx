import { Meta, StoryObj } from '@storybook/react'
import Trip from '.'

const meta: Meta<typeof Trip> = {
  title: 'Components/Pages/Trip',
  component: Trip
}

export default meta

type Story = StoryObj<typeof Trip>

export const Default: Story = {
  name: 'Default',
  render: (args) => <Trip />
}
