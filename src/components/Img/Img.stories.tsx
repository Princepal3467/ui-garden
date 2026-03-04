import type { Meta, StoryObj } from "@storybook/react";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Nature landscape",
    width: "300px",
  },
};