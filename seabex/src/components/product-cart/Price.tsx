import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const priceStyles = cva("text-lg font-semibold", {
  variants: {
    variant: {
      normal: "text-success",
      linethrough: "text-secondary text-[14px] font-[400] line-through",
      percentOff: "text-error text-[14px] font-[700]",
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

interface PriceProps extends VariantProps<typeof priceStyles> {
  children?: string;
}

const Price: React.FC<PriceProps> = ({ children, variant }) => {
  return <span className={cn(priceStyles({ variant }))}>{children}</span>;
};

export default Price;
