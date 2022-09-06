import React from "react";

import { Box } from "@/components/Box";
import { Text } from "@/components/Text";

const Tag: React.FC = (props) => {
  return (
    <Box
      display="flex"
      borderRadius="2rem"
      borderColor="blue.500"
      borderWidth="0.1rem"
      borderStyle="solid"
    >
      <Text
        color="blue.500"
        fontSize="xs"
        fontWeight="400"
        padding="0.4rem 0.8rem"
      >
        {props.children}
      </Text>
    </Box>
  );
};

export { Tag };
