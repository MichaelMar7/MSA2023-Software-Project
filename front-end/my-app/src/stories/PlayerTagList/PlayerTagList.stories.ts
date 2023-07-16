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
        Id: "1",
        UserId: "1",
        Tag: "#abc123def",
    },
    {
        Id: "2",
        UserId: "2",
        Tag: "#abd",
    },
    {
        Id: "3",
        UserId: "2",
        Tag: "#abe",
    },
];

export const Default: Story = {
    args: {
        label: "Heading",
        playerTags: tags,
    },
  };

