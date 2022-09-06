import React from "react";

import { Box, BoxProps } from "../Box";

type ContainerProps = Pick<
  BoxProps,
  | "padding"
  | "marginTop"
  | "textAlign"
  | "paddingBottom"
  | "marginBottom"
  | "position"
> & {
  id?: string;
};

const Container = React.forwardRef<React.FC<ContainerProps>, any>(
  ({ children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        paddingX="1rem"
        maxWidth="66.25em"
        margin="0 auto"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export { Container };
