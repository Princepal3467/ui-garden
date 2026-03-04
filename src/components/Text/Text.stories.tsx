import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,

  argTypes: {
    color: { control: "color" },

    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },

    weight: {
      control: "radio",
      options: ["normal", "bold"],
    },

    align: {
      control: "radio",
      options: ["left", "center", "right"],
    },

    variant: {
      control: "select",
      options: ["p", "span", "h1", "h2", "h3"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};

export const LargeBold: Story = {
  args: {
    children: "Large Bold Text",
    size: "large",
    weight: "bold",
  },
};

export const Centered: Story = {
  args: {
    children: "Centered Text",
    align: "center",
  },
};

export const CustomColor: Story = {
  args: {
    children: "Blue Text",
    color: "#007bff",
  },
};

export const Heading: Story = {
  args: {
    children: "Heading Example",
    variant: "h1",
    weight: "bold",
  },
};