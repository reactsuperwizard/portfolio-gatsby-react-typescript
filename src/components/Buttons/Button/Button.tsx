import React from "react";

import { Box } from "@/components/Box";

import * as Styles from "./Button.styles";

const Button: React.FC<Styles.ButtonProps> = ({
  children,
  endIcon,
  type = 'button',
  ...props
}) => {
  return (
    <Styles.Button type={type} {...props}>
      {children}
      {endIcon != null && (
        <Box display="flex" marginLeft="0.8rem">
          {endIcon}
        </Box>
      )}
    </Styles.Button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export { Button };
