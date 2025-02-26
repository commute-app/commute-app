import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import IconButton from './index.tsx'

const meta: Meta<typeof IconButton> = {
  title: 'Components/Common/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['fulfilled', 'outlined', 'ghost'],
      control: { type: 'select' },
      defaultValue: 'fulfilled'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      defaultValue: 'medium'
    },
    colorScheme: {
      options: ['primary', 'error'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  },
  args: {
    onClick: fn(),
    icon: 'arrow-left'
  }
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    icon: 'arrow-right',
    colorScheme: 'primary',
    variant: 'fulfilled'
  },

  name: 'Default',
  render: (args) => <IconButton {...args}></IconButton>
}
