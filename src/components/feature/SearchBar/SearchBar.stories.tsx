import { Meta, StoryObj } from '@storybook/react'
import SearchBar from '.'

const meta: Meta<typeof SearchBar> = {
  title: 'Components/Feature/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    location: {
      control: { type: 'text' }
    },
    onSearch: {
      action: 'searched'
    }
  },
  args: {
    onSearch: (query: string) => alert(`Searching for ${query}`)
  }
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  name: 'Default',
  render: (args) => <SearchBar {...args} />
}
