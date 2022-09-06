import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { Button } from "@/components/Buttons/Button";
import { Grid } from "@/components/Grid";
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon.svg";

const MainHero = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Box ref={ref} backgroundColor="blue.500" width="100%">
      <Container padding={["4rem 1rem 5rem 1rem", "8rem 1rem 10rem 1rem"]}>
        <Box maxWidth="64em" width="100%">
          <Text fontSize={["sm", "lg"]} fontWeight="medium" color="white">
            Grigore Budac, Front-end Developer
          </Text>

          <Text
            as="h1"
            fontSize={["h5", "h2"]}
            fontWeight="bold"
            color="white"
            lineHeight="120%"
            marginTop="1.6rem"
          >
            Specialized in creating sleek and premium user interfaces with the
            help of React.
          </Text>

          <Grid
            gridTemplateColumns="repeat(2, auto)"
            gridGap="2.4rem"
            alignItems="center"
            width="fit-content"
            marginTop="4.9rem"
          >
            <Button
              variant="secondary"
              endIcon={<ArrowDownIcon />}
              onClick={() => scrollTo("#projects")}
            >
              Projects
            </Button>

            <a href="Grigore_Budac_-_Front_End_Developer.pdf" target="_blank">
              <Button variant="primary">Download CV</Button>
            </a>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
});

export { MainHero };
