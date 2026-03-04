import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,

  argTypes: {
    headerBgColor: { control: "color" },
    headerTextColor: { control: "color" },
    rowBgColor: { control: "color" },
    borderColor: { control: "color" },
    striped: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ["Name", "Age", "City"],
    data: [
      ["John", "25", "Toronto"],
      ["Emma", "30", "Vancouver"],
      ["Liam", "28", "Calgary"],
    ],
  },
};

export const CustomColors: Story = {
  args: {
    headers: ["Name", "Age", "City"],
    data: [
      ["John", "25", "Toronto"],
      ["Emma", "30", "Vancouver"],
      ["Liam", "28", "Calgary"],
    ],
    headerBgColor: "#28a745",
    headerTextColor: "#ffffff",
    rowBgColor: "#f8f9fa",
    borderColor: "#000000",
  },
};

export const Striped: Story = {
  args: {
    headers: ["Name", "Age", "City"],
    data: [
      ["John", "25", "Toronto"],
      ["Emma", "30", "Vancouver"],
      ["Liam", "28", "Calgary"],
    ],
    striped: true,
  },
};