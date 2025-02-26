import { Meta, StoryObj } from '@storybook/react'
import TripDetail from '.'

const meta: Meta<typeof TripDetail> = {
  title: 'Components/Feature/TripDetail',
  component: TripDetail,
  tags: ['autodocs'],
  argTypes: {
    price: { control: 'number' }
  },
  args: {
    price: 800
  }
}

export default meta

type Story = StoryObj<typeof TripDetail>

export const Default: Story = {
  name: 'Default',
  render: (args) => <TripDetail {...args} />
}
