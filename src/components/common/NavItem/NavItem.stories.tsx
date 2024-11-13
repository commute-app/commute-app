import { Meta, StoryObj } from '@storybook/react'
import NavItem from '.'
import { fn } from '@storybook/test'

const meta: Meta<typeof NavItem> = {
  title: 'Components/Common/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  },
  args: {
    icon: 'marker',
    title: 'Mapa',
    onClick: fn()
  }
}

export default meta

type Story = StoryObj<typeof NavItem>

export const Default: Story = {
  name: 'Default',
  render: (args) => <NavItem {...args} />
}

export const Selected: Story = {
  name: 'Selected',
  render: (args) => <NavItem selected {...args} />
}
