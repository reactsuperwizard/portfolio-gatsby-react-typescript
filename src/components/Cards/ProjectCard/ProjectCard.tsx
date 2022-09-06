import React from "react";
// import Img from "gatsby-image";
import { GatsbyImage } from "gatsby-plugin-image";

import { Box } from "@/components/Box";
import { Grid } from "@/components/Grid";
import { Tag } from "@/components/Tag";
import { Text } from "@/components/Text";
import { Button } from "@/components/Buttons/Button";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon.svg";

import * as Styles from "./ProjectCard.styles";
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components";

type ProjectCardProps = {
  variant: Styles.CoverVariants;
  cover: any;
  tags: string[];
  title: string;
  description: string;
  link?: string;
};

const ProjectCard = (props: ProjectCardProps) => {

  return (
    <Box>
      <Styles.Cover variant={props.variant}>
        <Styles.CoverImage>
          <GatsbyImage
            image={props.cover.childrenImageSharp[0].gatsbyImageData}
            alt={"alt"}
          />
        </Styles.CoverImage>
      </Styles.Cover>

      <Grid
        width="fit-content"
        gridTemplateColumns="repeat(3, auto)"
        gridGap="0.8rem"
        marginTop="2.4rem"
      >
        {props.tags.map((value, index) => (
          <Tag key={`${value}-${index}`}>{value}</Tag>
        ))}
      </Grid>

      <Text
        as="h6"
        fontWeight="bold"
        fontSize="h6"
        color="black.900"
        marginTop="1.6rem"
        marginBottom="1.2rem"
      >
        {props.title}
      </Text>

      <Text fontSize={["md", "sm"]} color="black.700">
        {props.description}
      </Text>

      <Box marginTop="0.8rem">
        <AniLink cover duration={0.5} to={`/${props.link}`}>
          <Button variant="underlined" endIcon={<ArrowRightIcon />}>
            View case study
          </Button>
        </AniLink>
      </Box>
    </Box>
  );
};

ProjectCard.defaultProps = {
  variant: "orange",
  link: "projects/luxury-presence",
};

const SAniLink = styled(AniLink)`
  &:active {
    color: blue;
  }
`;

export { ProjectCard };
