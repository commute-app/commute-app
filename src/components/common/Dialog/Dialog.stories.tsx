import { Meta, StoryObj } from '@storybook/react'
import Dialog from '.'
import StraightArrow from '../../../assets/svg/Straight'
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
    },
    hasIcon: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    icon: StraightArrow
  },
  args: {
    onClose: () => alert('Dialog closed'),
    onAction: () => alert('Action triggered'),
    isOpen: true,
    description: 'This is a description for the dialog component.',
    title: "Title"
  }
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  name: 'Default',
  render: (args) => <Dialog {...args} />
}

export const WithIcon: Story = {
  args: {
    hasIcon: true
  },

  name: 'With Icon',
  render: (args) => <Dialog {...args} hasIcon icon={StraightArrow} />
}

export const CustomTitleAndDescription: Story = {
  name: 'Custom Title and Description',
  render: (args) => (
    <Dialog
      {...args}
      title="Custom Title"
      description="This is a custom description for the dialog component."
    />
  )
}

export const Closed: Story = {
  name: 'Closed',
  render: (args) => <Dialog {...args} isOpen={false} />
}
