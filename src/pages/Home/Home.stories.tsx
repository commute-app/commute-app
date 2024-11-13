import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import Home from '.'

const meta: Meta<typeof Home> = {
  title: 'Components/Pages/Home',
  component: Home
}

export default meta

type Story = StoryObj<typeof Home>

export const Default: Story = {
  name: 'Default',
  render: (args) => <Home />
}
