import React from "react";

import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { Avatar } from "@/components/Avatar";
import * as Styled from "./styled";

export type TestimonialProps = {
  description: string;
  avatar: any;
  client: string;
  role: string;
  index: number
};

const initials = (name: string) => {
  const splitName = name.split(" ");

  return `${splitName[0][0].toUpperCase()}. ${splitName[1][0].toUpperCase()}`;
};

const Testimonial = (props: TestimonialProps) => {
  return (
    <Box style={{ textAlign: "center" }}>
      <Text fontWeight="600" color="black" fontSize="15px" lineHeight="150%">
        “{props.description}”
      </Text>

      <Box
        marginTop="4rem"
      >
        {props.avatar ? (
          <Avatar
            src={props.avatar.childrenImageSharp[0].gatsbyImageData}
            alt={props.client}

          />
        ) : (
          <Styled.AltText>
            <Text>{initials(props.client)}</Text>
          </Styled.AltText>
        )}

        <Box marginTop="15px">
          <Text as="p" fontWeight="bold" fontSize="md" color="black.900">
            {props.client}
          </Text>
          <Text as="p" color="black.500" fontSize="md" marginTop="0.4rem">
            {props.role}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export { Testimonial };
