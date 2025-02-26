import { Meta, StoryObj } from '@storybook/react'
import TripDataChip from '.'

const meta: Meta<typeof TripDataChip> = {
  title: 'Components/Common/TripDataChip',
  component: TripDataChip,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'text' }
    }
  },
  args: {
    icon: 'bus',
    value: '147'
  }
}

export default meta

type Story = StoryObj<typeof TripDataChip>

export const Default: Story = {
  name: 'Default',
  render: (args) => <TripDataChip {...args}></TripDataChip>
}
