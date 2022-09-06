import React from "react";

import * as Styles from "./IconButton.styles";

const IconButton: React.FC<Styles.IconButtonProps> = ({
  children,
  ...props
}) => {
  return <Styles.Container {...props}>{children}</Styles.Container>;
};

IconButton.defaultProps = {
  variant: "primary",
};

export { IconButton };
