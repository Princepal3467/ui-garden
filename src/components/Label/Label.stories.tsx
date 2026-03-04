import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,

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

    required: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Username",
  },
};

export const Required: Story = {
  args: {
    text: "Email",
    required: true,
  },
};

export const LargeBold: Story = {
  args: {
    text: "Full Name",
    size: "large",
    weight: "bold",
  },
};

export const CustomColor: Story = {
  args: {
    text: "Password",
    color: "#007bff",
  },
};