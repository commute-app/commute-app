import { Meta, StoryObj } from '@storybook/react'
import PhoneInput from '.'

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/Common/PhoneInput',
  component: PhoneInput,
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
    label: 'Example label',
    onChange: () => {}
  }
}

export default meta

type Story = StoryObj<typeof PhoneInput>

export const Default: Story = {
  name: 'Default',
  render: (args) => <PhoneInput {...args} />
}

export const Outlined: Story = {
  name: 'Outlined',
  render: (args) => <PhoneInput variant={'outlined'} {...args} />
}

export const Underlined: Story = {
  name: 'Underlined',
  render: (args) => <PhoneInput variant={'underlined'} {...args} />
}

export const Error: Story = {
  name: 'Error',
  render: (args) => <PhoneInput {...args} error="Error message" />
}

export const Disabled: Story = {
  name: 'Disabled',
  render: (args) => <PhoneInput {...args} disabled />
}
