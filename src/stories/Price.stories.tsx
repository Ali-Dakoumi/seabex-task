import { Meta, StoryObj } from "@storybook/react";
import Price from "../components/product-cart/Price";

const meta: Meta<typeof Price> = {
  title: "Components/Price",
  component: Price,
  parameters: {
    docs: {
      description: {
        component:
          "Price component used to display pricing with different styles (normal, line-through, percent-off).",
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["normal", "linethrough", "percentOff"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Price>;

export const Default: Story = {
  args: {
    variant: "normal",
    children: "$19.99",
  },
};

export const LineThrough: Story = {
  args: {
    variant: "linethrough",
    children: "$24.99",
  },
};

export const PercentOff: Story = {
  args: {
    variant: "percentOff",
    children: "20% OFF",
  },
};
