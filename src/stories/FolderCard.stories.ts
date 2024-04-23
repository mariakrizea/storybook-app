import type { Meta, StoryObj } from '@storybook/react';
import FolderCard from "../components/FolderCard";

const meta = {
  title: 'Components/FolderCard',
  component: FolderCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof FolderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    name: "London",
    category: "Images",
    isFavorite: false,
  },
};
