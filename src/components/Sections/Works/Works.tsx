import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { Grid } from "@/components/Grid";
import { Box } from "@/components/Box";
import { ProjectCard } from "@/components/Cards/ProjectCard";

const Works = React.forwardRef<any, any>((props, ref) => {
  const Covers = useStaticQuery(graphql`
    query {
      LuxuryPresence: file(relativePath: { eq: "luxury-presence.jpg" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      Jamrynn: file(relativePath: { eq: "jamrynn.jpg" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      QueryRecipes: file(relativePath: { eq: "query-recipes.jpg" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      Scarood: file(relativePath: { eq: "scarood.jpg" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  return (
    <Container paddingTop="12rem" id="projects" ref={ref}>
      <Box textAlign="center">
        <Text as="p" fontWeight="bold" fontSize="md" color="black.700">
          PROJECTS
        </Text>

        <Text as="h3" mt="2rem" fontSize={["h5", "h3"]} color="black.900">
          Some of my latest work
        </Text>
      </Box>

      <Grid
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gridGap="6rem"
        marginTop="5.6rem"
      >
        <ProjectCard
          variant="blue"
          cover={Covers.LuxuryPresence}
          tags={["Research", "Development", "Optimization"]}
          title="Luxury Presence"
          description="Take a look at how I used React to create a premium and smooth website builder for a VC-funded Stanford StartX-accelerated startup."
          link="projects/luxury-presence"
        />
        <ProjectCard
          variant="lightBlue"
          cover={Covers.Jamrynn}
          tags={["Development", "Infrastructure", "Design"]}
          title="Jamrynn"
          description="See how I created a web chat application that connects thousands of coaches with their sports teams."
          link="projects/jamrynn"
        />
        <ProjectCard
          variant="orange"
          cover={Covers.QueryRecipes}
          tags={["Design", "Development", "Optimization"]}
          title="Query.Recipes"
          description="Check out how I helped develop the front-end of an website that analyzes marketing and sales data in BigQuery."
          link="projects/query-recipes"
        />
        <ProjectCard
          variant="cyan"
          cover={Covers.Scarood}
          tags={["Research", "Development", "Optimization"]}
          title="Scarood"
          description="See here how I created a pixel-perfect landing page for a productivity tool that allows freelancers and business teams to manage all their work from one place."
          link="projects/scarood"
        />

      </Grid>
    </Container>
  );
});

export { Works };
