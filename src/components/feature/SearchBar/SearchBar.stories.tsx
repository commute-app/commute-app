import { Meta, StoryObj } from "@storybook/react"
import SearchBar from "."

const meta: Meta<typeof SearchBar> = {
    title: 'Components/Feature/SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
    argTypes: {
        isMenuOpen: {
            control: { type: 'boolean' },
            defaultValue: false
        },
        location: {
            control: { type: 'text' },
    },
    onSearch: {
        action: 'searched'
    },
    onMenuOpen: {
        action: 'opened'
    },
    onMenuClose: {
        action: 'closed'
    }
    },
    args: {
        isMenuOpen: false,
        onSearch: (query: string) => alert(`Searching for ${query}`),
        onMenuOpen: () => alert('Menu opened'),
        onMenuClose: () => alert('Menu closed')
    }
  }
  
  export default meta
  
  type Story = StoryObj<typeof SearchBar>
  
  export const Default: Story = {
    args: {
        isMenuOpen: false
    },
    name: 'Default',
    render: (args) => <SearchBar {...args} />
  }
  
  export const MenuOpen: Story = {
    args: {
        isMenuOpen: true
    },
    render: (args) => <SearchBar {...args} />
  }
  
  export const WithLocation: Story = {
    args: {
        location: 'Location',
        isMenuOpen: false
    },
    render: (args) => <SearchBar{...args} />
  }
  