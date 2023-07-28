import { Meta, StoryObj } from "@storybook/react";
import { NewHeader } from "./NewHeader";

const meta = {
    title: "New Header",
    component: NewHeader,
    tags: ['autodocs'],
} satisfies Meta<typeof NewHeader>;

export default meta;
type Story = StoryObj<typeof NewHeader>;

const testuser = {
    userId: "1",
    username: "test",
    password: "test",
};

export const LoggedIn: Story = {
    args: {
        user: testuser
    },
};

export const Links: Story = {
    args: {
        user: testuser,
        navLinks: [{label: "Home"}],
    },
};

export const Links2: Story = {
    args: {
        user: testuser,
        navLinks: [{label: "Home"}, {label: "Search"}, {label: "About"}],
    },
};

export const LoggedOut: Story = {};