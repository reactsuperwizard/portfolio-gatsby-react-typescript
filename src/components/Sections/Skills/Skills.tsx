import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { Grid } from "@/components/Grid";
import { SkillCard } from "@/components/Cards/SkillCard";

const Skills = React.forwardRef<any, any>((props, ref) => {
  const SkillsLogos = useStaticQuery(graphql`
    query {
      Next: file(relativePath: { eq: "Next.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 80, width: 80, quality: 100)
        }
      }
      React: file(relativePath: { eq: "React.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 100, width: 100, quality: 100)
        }
      }
      Node: file(relativePath: { eq: "Node.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 80, width: 80, quality: 100)
        }
      }
      Chakra: file(relativePath: { eq: "Chakra.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 80, width: 80, quality: 100)
        }
      }
      Antd: file(relativePath: { eq: "Antd.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 100, width: 100, quality: 100)
        }
      }
      Evergreen: file(relativePath: { eq: "Evergreen.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 80, width: 80, quality: 100)
        }
      }
      Firebase: file(relativePath: { eq: "Firebase.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 80, width: 80, quality: 100)
        }
      }
      AWS: file(relativePath: { eq: "AWS.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 100, width: 100, quality: 100)
        }
      }
      Kubernetes: file(relativePath: { eq: "Kubernetes.png" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 80, width: 80, quality: 100)
        }
      }
    }
  `);

  return (
    <Container textAlign="center" paddingTop="12rem" id="skills" ref={ref}>
      <Text as="p" fontWeight="bold" fontSize="md" color="black.700">
        SKILL
      </Text>

      <Text as="h3" mt="2rem" fontSize={["h5", "h3"]} color="black.900">
        The power of React. <br /> Put to work
      </Text>

      <Grid
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gridGap="6rem"
        marginTop="5.6rem"
      >
        <SkillCard
          images={[SkillsLogos.Next, SkillsLogos.React, SkillsLogos.Node]}
          title="Top-notch technologies"
          description="I use top-notch technologies to create an exceptional online presence for your business."
        />
        <SkillCard
          images={[SkillsLogos.Chakra, SkillsLogos.Antd, SkillsLogos.Evergreen]}
          title="Latest UI Library"
          description="With the help of the latest UI libraries, I make sure that your website looks modern and fresh."
        />
        <SkillCard
          images={[
            SkillsLogos.Firebase,
            SkillsLogos.AWS,
            SkillsLogos.Kubernetes,
          ]}
          title="Architecture & Server"
          description="Deep knowledge of software architecture and server technologies that make your app perfectly develop."
        />
      </Grid>
    </Container>
  );
});

export { Skills };
