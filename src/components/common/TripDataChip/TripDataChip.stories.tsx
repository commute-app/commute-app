import { Meta, StoryObj } from '@storybook/react'
import TripDataChip from '.'

const meta: Meta<typeof TripDataChip> = {
  title: 'Components/Common/TripDataChip',
  component: TripDataChip,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['row', 'column'] },
    size: { control: 'select', options: ['medium', 'large'] },
    value: {
      control: { type: 'text' }
    }
  },
  args: {
    icon: 'bus',
    value: '147',
    orientation: 'row',
    size: 'medium'
  }
}

export default meta

type Story = StoryObj<typeof TripDataChip>

export const Default: Story = {
  name: 'Default',
  render: (args) => <TripDataChip {...args}></TripDataChip>
}

export const Medium: Story = {
  name: 'Medium',
  render: (args) => <TripDataChip {...args}></TripDataChip>
}

export const Large: Story = {
  args: {
    size: 'large'
  },
  name: 'Large',
  render: (args) => <TripDataChip {...args}></TripDataChip>
}

export const Row: Story = {
  args: {
    orientation: 'row'
  },
  name: 'Row',
  render: (args) => <TripDataChip {...args}></TripDataChip>
}

export const Column: Story = {
  args: {
    orientation: 'column'
  },
  name: 'Column',
  render: (args) => <TripDataChip {...args}></TripDataChip>
}
