import React, { useState } from "react";
import Slider from "react-slick";
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import * as Styled from "./TestimonialsCarousel.styles"
import { FaQuoteLeft } from "react-icons/fa"
import { Box } from "@/components/Box";
import { Testimonial, TestimonialProps } from "@/components/Testimonial";
import { IconButton } from "@/components/Buttons/IconButton";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon.svg";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon.svg";
import "./TestimonialsCarousel.css";
type TestimonialsCarouselProps = {
  testimonals: TestimonialProps[];
};

const NextArrow = (props: any) => {
  return (
    <Styled.NextRoot>
      <IconButton variant="secondary" onClick={props.onClick}>
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

const TestimonialsCarousel = (props: TestimonialsCarouselProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState<Number>(0)

  const setting = {
    centerMode: true,
    className: "center",
    centerPadding: "1px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: true,
    beforeChange: (current: number, next: number) => setActiveTestimonial(next),
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={props.testimonals.length} dotWidth={30} />
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          className: "center",
        },
      },
    ],
  };


  return (
    <Box
      padding={["4rem 2rem", "4rem 14rem"]}
    >
      <Box textAlign={["center"]} marginBottom={["50px"]}>
        <FaQuoteLeft color="lightgrey" fontSize="20px" />
        <Styled.ClientText>
          SOME HAPPY CLIENT SPEAKING
        </Styled.ClientText>
      </Box>
      <Slider {...setting}>
        {props.testimonals.map((testimonial, index) => (
          <Styled.TestimonalContainer
            key={`carousel-testimonial-${index}`}
            active={index === activeTestimonial}
          >
            <Testimonial {...{ ...testimonial, index }} />
          </Styled.TestimonalContainer>
        ))}
      </Slider>
    </Box>
  );
};

export { TestimonialsCarousel };
