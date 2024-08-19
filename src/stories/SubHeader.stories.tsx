import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import { CartItem } from "../types";

const meta: Meta<typeof SubHeader> = {
  title: "Components/SubHeader",
  component: SubHeader,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  argTypes: {
    cartItems: {
      description: "An array of cart items to display the cart count",
      control: {
        type: "object",
      },
      defaultValue: [],
    },
  },
};

export default meta;

type SubHeaderProps = React.ComponentProps<typeof SubHeader>;

const Template: StoryFn<SubHeaderProps> = (args) => <SubHeader {...args} />;

export const EmptyCart: StoryFn<SubHeaderProps> = Template.bind({});
EmptyCart.args = {
  cartItems: [],
};

export const CartWithItems: StoryFn<SubHeaderProps> = Template.bind({});
CartWithItems.args = {
  cartItems: [
    {
      product: { id: 1, title: "Item 1", price: 10 },
      quantity: 1,
    } as unknown as CartItem,
    {
      product: { id: 2, title: "Item 2", price: 20 },
      quantity: 1,
    } as unknown as CartItem,
  ],
};
