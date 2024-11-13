import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import TripAlert from '.'

const meta: Meta<typeof TripAlert> = {
  title: 'Components/Pages/TripAlert',
  component: TripAlert
}

export default meta

type Story = StoryObj<typeof TripAlert>

export const Default: Story = {
  name: 'Default',
  render: (args) => <TripAlert />
}
