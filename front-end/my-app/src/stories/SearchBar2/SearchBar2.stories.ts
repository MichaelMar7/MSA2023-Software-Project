import { Meta, StoryObj } from "@storybook/react";
import { SearchBar2 } from "./SearchBar2";

const meta = {
    title: "Search Bar 2",
    component: SearchBar2,
    tags: ['autodocs'],
} satisfies Meta<typeof SearchBar2>;

export default meta;
type Story = StoryObj<typeof SearchBar2>;

export const Default: Story = {};

export const UserCredential: Story = {
    args: {
        text1: "Username",
        text2: "Password",
        label: "Login",
      },
};

export const SmallButton: Story = {
    args: {
        buttonSize: "small",
      },
};
