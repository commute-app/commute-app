import { Meta, StoryObj } from '@storybook/react'
import Typography from '.'

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'body3'
      ],
      control: { type: 'select' },
      defaultValue: 'h1'
    }
  }
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Typography variant={'h1'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Heading1: Story = {
  name: 'Heading1',
  render: (args) => (
    <Typography variant={'h1'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Heading2: Story = {
  name: 'Heading2',
  render: (args) => (
    <Typography variant={'h2'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Heading3: Story = {
  name: 'Heading3',
  render: (args) => (
    <Typography variant={'h3'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Heading4: Story = {
  name: 'Heading4',
  render: (args) => (
    <Typography variant={'h4'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Heading5: Story = {
  name: 'Heading5',
  render: (args) => (
    <Typography variant={'h5'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Heading6: Story = {
  name: 'Heading6',
  render: (args) => (
    <Typography variant={'h6'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Subtitle1: Story = {
  name: 'Subtitle1',
  render: (args) => (
    <Typography variant={'subtitle1'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Subtitle2: Story = {
  name: 'Subtitle2',
  render: (args) => (
    <Typography variant={'subtitle2'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Body1: Story = {
  name: 'Body1',
  render: (args) => (
    <Typography variant={'body1'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Body2: Story = {
  name: 'Body2',
  render: (args) => (
    <Typography variant={'body2'} {...args}>
      Sample Text
    </Typography>
  )
}

export const Body3: Story = {
  name: 'Body3',
  render: (args) => (
    <Typography variant={'body3'} {...args}>
      Sample Text
    </Typography>
  )
}
