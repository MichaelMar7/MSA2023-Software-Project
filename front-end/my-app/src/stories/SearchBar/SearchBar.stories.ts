import { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta = {
    title: "Search Bar",
    component: SearchBar,
    tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const SmallButton: Story = {
    args: {
        buttonSize: "small",
      },
};
