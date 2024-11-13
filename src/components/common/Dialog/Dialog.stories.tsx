import { Meta, StoryObj } from '@storybook/react'
import Dialog from '.'
const meta: Meta<typeof Dialog> = {
  title: 'Components/Common/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Title'
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'Description'
    },
    isOpen: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  },
  args: {
    onClose: () => alert('Dialog closed'),
    onAction: () => alert('Action triggered'),
    isOpen: true,
    description: 'This is a description for the dialog component.',
    title: 'Title'
  }
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  args: {
    icon: 'left-arrow'
  },

  name: 'Default',
  render: (args) => <Dialog {...args} />
}

export const WithIcon: Story = {
  name: 'With Icon',
  render: (args) => <Dialog {...args} icon={'straight-arrow'} />
}

export const Closed: Story = {
  name: 'Closed',
  render: (args) => <Dialog {...args} isOpen={false} />
}
