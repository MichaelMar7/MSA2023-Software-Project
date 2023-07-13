import { Meta, StoryObj } from "@storybook/react";
import { NewHeader } from "./NewHeader";

const meta = {
    title: "New Header",
    component: NewHeader,
    tags: ['autodocs'],
} satisfies Meta<typeof NewHeader>;

export default meta;
type Story = StoryObj<typeof NewHeader>;

export const LoggedIn: Story = {
  args: {
    user: {
        UserId: "1",
        Username: "test",
        Password: "test",
    },
  },
};

export const LoggedOut: Story = {};