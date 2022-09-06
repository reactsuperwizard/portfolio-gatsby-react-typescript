import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { Text } from "@/components/Text";

import * as Styles from "./SkillCard.styles";
import { Box } from "@/components/Box";

type SkillCardProps = {
  images: any[];
  title: string;
  description: string;
};

const SkillCard = (props: SkillCardProps) => {
  return (
    <Styles.Container>
      <Styles.Images>
        {props.images.map((image, key) => (
          <GatsbyImage
            key={`${props.title}-${key}`}
            image={image.childrenImageSharp[0].gatsbyImageData}
            alt={props.title}
          />
        ))}
      </Styles.Images>

      <Box textAlign="center" paddingBottom="6rem" paddingX="2rem">
        <Text as="h6" color="black.900" fontWeight="bold" fontSize="lg">
          {props.title}
        </Text>

        <Text
          as="p"
          color="black.500"
          fontSize={["md", "sm"]}
          marginTop="1.2rem"
        >
          {props.description}
        </Text>
      </Box>
    </Styles.Container>
  );
};

export { SkillCard };
