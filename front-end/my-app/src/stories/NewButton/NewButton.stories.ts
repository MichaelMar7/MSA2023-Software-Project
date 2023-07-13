import type { Meta, StoryObj } from '@storybook/react';

import { NewButton } from './NewButton';

const meta = {
  title: "NewButton",
  component: NewButton,
  tags: ['autodocs'],
} satisfies Meta<typeof NewButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
