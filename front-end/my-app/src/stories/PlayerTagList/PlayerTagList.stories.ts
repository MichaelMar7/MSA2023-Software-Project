import { Meta, StoryObj } from "@storybook/react";
import { PlayerTagList } from "./PlayerTagList";

const meta = {
    title: "Player Tag List",
    component: PlayerTagList,
    tags: ['autodocs'],
} satisfies Meta<typeof PlayerTagList>;

export default meta;
type Story = StoryObj<typeof PlayerTagList>;

const tags = [
    {
        id: "1",
        userId: "1",
        tag: "#abc123def",
    },
    {
        id: "2",
        userId: "2",
        tag: "#abd",
    },
    {
        id: "3",
        userId: "2",
        tag: "#abe",
    },
];

export const Default: Story = {
    args: {
        label: "Heading",
        playerTags: tags,
    },
  };

