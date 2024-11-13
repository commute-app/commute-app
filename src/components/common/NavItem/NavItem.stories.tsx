import { Meta, StoryObj } from '@storybook/react'
import NavItem from '.'

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
    title: 'Mapa'
  }
}

export default meta

type Story = StoryObj<typeof NavItem>

export const Default: Story = {
  name: 'Default',
  render: (args) => <NavItem {...args} />
}
export const UnSelected: Story = {
  name: 'UnSelected',
  render: (args) => <NavItem selected={false} {...args} />
}

export const Selected: Story = {
  name: 'Selected',
  render: (args) => <NavItem selected {...args} />
}
