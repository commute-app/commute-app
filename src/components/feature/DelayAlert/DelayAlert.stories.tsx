import { Meta, StoryObj } from '@storybook/react'
import DelayAlert from '.'
const meta: Meta<typeof DelayAlert> = {
  title: 'Components/Feature/DelayAlert',
  component: DelayAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['warning', 'danger'],
      defaultValue: 'warning'
    },
    delay: {
      control: { type: 'text' },
      defaultValue: '20 minutos'
    }
  },
  args: {
    delay: '20 minutos'
  }
}

export default meta

type Story = StoryObj<typeof DelayAlert>

export const Default: Story = {
  name: 'Default',
  render: (args) => <DelayAlert {...args} />
}

export const Warning: Story = {
  name: 'Warning',
  render: (args) => <DelayAlert variant={'warning'} {...args} />
}

export const Danger: Story = {
  name: 'Danger',
  render: (args) => <DelayAlert variant={'danger'} {...args} />
}
