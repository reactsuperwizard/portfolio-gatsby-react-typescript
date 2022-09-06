import { Container } from "@/components/Container";
import { Grid } from "@/components/Grid";
import { ProjectResult } from "@/components/ProjectResult";
import { Tag } from "@/components/Tag";
import { Text } from "@/components/Text";
import React from "react";

import * as Styles from "../../Heroes/ProjectHero/ProjectHere.styles";

interface ProjectHeroProps {
  title: string;
  tags: string[];
  client: string;
  year: number;
  techStack: string;
  firstImage: any;
  secondImage: any;
}

const ProjectHero: React.FC<ProjectHeroProps> = (props) => {
  const { title, tags, client, techStack, year, firstImage, secondImage } =
    props;

  return (
    <Container marginTop={["2rem", "8rem"]} marginBottom="5.5rem">
      <Styles.Root>
        <Styles.Categories>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Styles.Categories>
        <Text
          as="h2"
          fontSize={["h4", "h2"]}
          marginTop="2rem"
          marginBottom="4rem"
        >
          {title}
        </Text>
        <Grid
          marginTop="4rem"
          gridTemplateColumns={["repeat(1, auto)", "repeat(3, auto)"]}
          gridGap="4rem"
        >
          <Styles.ProjectInfo>
            <Text as="p" color="black.900" fontWeight="700">
              Client
            </Text>
            <Text as="p" color="black.500">
              {client}
            </Text>
          </Styles.ProjectInfo>
          <Styles.ProjectInfo>
            <Text as="p" color="black.900" fontWeight="700">
              Year
            </Text>
            <Text as="p" color="black.500">
              {year}
            </Text>
          </Styles.ProjectInfo>
          <Styles.ProjectInfo>
            <Text as="p" color="black.900" fontWeight="700">
              Tech Stack
            </Text>
            <Text as="p" color="black.500">
              {techStack}
            </Text>
          </Styles.ProjectInfo>
        </Grid>
      </Styles.Root>
      <ProjectResult firstImage={firstImage} secondImage={secondImage} />
    </Container>
  );
};

export { ProjectHero };
