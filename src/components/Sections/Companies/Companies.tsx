import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { Box } from "@/components/Box";

import * as Styles from "./Companies.styles";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 8,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 20000,
  cssEase: "linear",
  variableWidth: true,
  arrows: false,
  pauseOnHover: false,
};

const Companies = () => {
  return (
    <Container marginTop="6rem">
      <Text fontSize="md" fontWeight="medium">
        Satisfied clients I have worked with
      </Text>

      <Styles.Wrapper>
        <Slider {...settings}>
          <Box marginRight="8rem">
            <StaticImage
              layout="fixed"
              height={24}
              src="../../../assets/images/companies/Compire.png"
              alt="Compire"
            />
          </Box>

          <Box marginRight="8rem">
            <StaticImage
              layout="fixed"
              height={24}
              src="../../../assets/images/companies/Lix.png"
              alt="Lix"
            />
          </Box>

          <Box marginRight="8rem">
            <StaticImage
              layout="fixed"
              height={24}
              src="../../../assets/images/companies/Planable.png"
              alt="Planable"
            />
          </Box>

          <Box marginRight="8rem">
            <StaticImage
              layout="fixed"
              height={24}
              src="../../../assets/images/companies/Plan2Learn.png"
              alt="Plan2Learn"
            />
          </Box>

          <Box marginRight="8rem">
            <StaticImage
              layout="fixed"
              height={24}
              src="../../../assets/images/companies/RoofHawk.png"
              alt="RoofHawk"
            />
          </Box>

          <Box marginRight="8rem">
            <StaticImage
              src="../../../assets/images/companies/Vibrant.svg"
              alt="Vibrant"
            />
          </Box>

          <Box marginRight="8rem">
            <StaticImage
              src="../../../assets/images/companies/ScopeTickets.png"
              alt="Scope Tickets"
            />
          </Box>

          <Box marginRight="8rem">
            <StaticImage
              src="../../../assets/images/companies/vsNew.png"
              alt="vsNew"
            />
          </Box>
        </Slider>
      </Styles.Wrapper>
      {/* </Grid> */}
    </Container>
  );
};

export { Companies };
