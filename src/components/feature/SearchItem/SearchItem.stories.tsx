import { Meta, StoryObj } from '@storybook/react'
import SearchItem from '.'

const meta: Meta<typeof SearchItem> = {
  title: 'Components/Feature/SearchItem',
  component: SearchItem,
  tags: ['autodocs'],
  argTypes: {
    headline: {
      control: { type: 'text' }
    },
    supportingText: {
      control: { type: 'text' }
    },
    trailingText: {
      control: { type: 'text' }
    }
  },
  args: {
    icon: 'alert',
    headline: 'Headline',
    supportingText: 'Supporting Text',
    trailingText: 'Trailing Text'
  }
}

export default meta

type Story = StoryObj<typeof SearchItem>

export const Default: Story = {
  args: {
    icon: 'alert'
  },

  name: 'Default',
  render: (args) => (
    <div className="w-96">
      <SearchItem {...args} />
    </div>
  )
}
