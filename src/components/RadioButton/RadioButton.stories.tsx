import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,

  argTypes: {
    onChange: { action: "selected" },

    color: { control: "color" },
    labelColor: { control: "color" },

    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },

    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Male",
    name: "gender",
  },
};

export const Checked: Story = {
  args: {
    label: "Female",
    name: "gender",
    checked: true,
  },
};

export const CustomColor: Story = {
  args: {
    label: "Other",
    name: "gender",
    color: "#28a745",
    labelColor: "#dc3545",
  },
};

export const Large: Story = {
  args: {
    label: "Large Option",
    name: "gender",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    name: "gender",
    disabled: true,
  },
};