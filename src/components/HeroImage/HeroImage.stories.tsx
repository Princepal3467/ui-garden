import type { Meta, StoryObj } from "@storybook/react";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Welcome to Our Website",
  },
};
