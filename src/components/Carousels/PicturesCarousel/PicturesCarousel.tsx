import React, { useState } from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import { Image } from "@/templates/project-template";

import "./PicturesCarousel.css"
import * as Styled from "./PicturesCarousel.styles";
import { Text } from "@/components/Text";
import { Container } from "@/components/Container";
import { IconButton } from "@/components/Buttons/IconButton";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon.svg";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon.svg";
import { ModalImage } from "@/components/ModalImage";


interface PicturesCarouselProps {
  images: Image[];
}

const NextArrow = (props: any) => {
  return (
    <Styled.NextRoot>
      <IconButton variant="primary" onClick={props.onClick}>
        <ChevronRightIcon />
      </IconButton>
    </Styled.NextRoot>
  );
};

const PrevArrow = (props: any) => {
  return (
    <Styled.PrevRoot>
      <IconButton variant="secondary" onClick={props.onClick}>
        <ChevronLeftIcon />
      </IconButton>
    </Styled.PrevRoot>
  );
};

const PicturesCarousel: React.FC<PicturesCarouselProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<any>();

  const setting = {
    centerMode: true,
    className: "center",
    centerPadding: "1px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (current: number, next: number) => setActiveImage(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          className: "center",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          className: "center",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          className: "center",
        },
      },
    ],
  };

  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Typography>
          <Text as="h3" fontSize="h6">
            The Results
          </Text>
          <Text as="p">
            A successful remastering of the website’s look and feel. The bonus
            points: clean code that would allow for an easy further development.
          </Text>
        </Styled.Typography>
      </Container>
      <Styled.Root>
        <Slider {...setting}>
          {images.map((image, index) => (
            <Styled.ImageContainer
              key={`carousel-image-${index}`}
              active={index === activeImage}
            >
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt=""
                imgStyle={{ objectFit: "fill", width: "300px", height: "270px", margin: "0 auto" }}
                onClick={() => {
                  setIsOpen(true)
                  setImageUrl(image.childImageSharp.gatsbyImageData)
                }}
              />
            </Styled.ImageContainer>
          ))}
        </Slider>
      </Styled.Root>
      {isOpen && <ModalImage closeHandler={() => setIsOpen(false)} imageUrl={imageUrl} />}
    </Styled.Wrapper>
  );
};


export { PicturesCarousel };
