import { Meta, StoryObj } from '@storybook/react'
import TextField from '.'

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outlined', 'underlined'],
      control: { type: 'select' },
      defaultValue: 'outlined'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  },
  args: {
    label: 'Example label'
  }
}

export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  name: 'Default',
  render: (args) => <TextField {...args} />
}

export const Outlined: Story = {
  name: 'Outlined',
  render: (args) => <TextField variant={'outlined'} {...args} />
}

export const Underlined: Story = {
  name: 'Underlined',
  render: (args) => <TextField variant={'underlined'} {...args} />
}

export const Error: Story = {
  name: 'Error',
  render: (args) => <TextField {...args} error="Error message" />
}

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => <TextField {...args} disabled />
}
