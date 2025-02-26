import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
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
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false
    }
  },
  args: {
    onClick: fn()
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  name: 'Default',
  render: (args) => <Button {...args}>Button</Button>
}

export const Fulfilled: Story = {
  name: 'Fulfilled',
  render: (args) => (
    <div
      className={'flex w-[250px] flex-col items-center justify-center gap-2'}
    >
      <Button variant={'fulfilled'} {...args}>
        Button
      </Button>
    </div>
  )
}
export const Outlined: Story = {
  name: 'Outlined',
  render: (args) => (
    <div
      className={'flex w-[250px] flex-col items-center justify-center gap-2'}
    >
      <Button variant={'outlined'} {...args}>
        Button
      </Button>
    </div>
  )
}

export const Ghost: Story = {
  name: 'Ghost',
  render: (args) => (
    <div
      className={'flex w-[250px] flex-col items-center justify-center gap-2'}
    >
      <Button variant={'ghost'} {...args}>
        Button
      </Button>
    </div>
  )
}
