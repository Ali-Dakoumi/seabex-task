import { Meta, StoryFn } from "@storybook/react";
import Rating from "../components/product-cart/Rating";

const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
    rating: {
      control: {
        type: "number",
      },
      description:
        "The rating value, which determines how many stars are filled.",
      defaultValue: 3,
    },
    maxStars: {
      control: {
        type: "number",
      },
      description: "The maximum number of stars to display.",
      defaultValue: 5,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Rating component used to display a rating out of a specified maximum number of stars. The default maximum number of stars is 5.",
      },
    },
  },
};

export default meta;

type RatingProps = React.ComponentProps<typeof Rating>;

const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

export const Default: StoryFn<RatingProps> = Template.bind({});
Default.args = {
  rating: 3,
  maxStars: 5,
};

export const FullRating: StoryFn<RatingProps> = Template.bind({});
FullRating.args = {
  rating: 5,
  maxStars: 5,
};

export const NoRating: StoryFn<RatingProps> = Template.bind({});
NoRating.args = {
  rating: 0,
  maxStars: 5,
};

export const CustomMaxStars: StoryFn<RatingProps> = Template.bind({});
CustomMaxStars.args = {
  rating: 4,
  maxStars: 7,
};
