import React from "react";
import { graphql } from "gatsby";
import Img, { FixedObject } from "gatsby-image";

import Layout from "@/pages/layout";
import { ProjectHero } from "@/components/Heroes/ProjectHero";
import { ProjectContent } from "@/components/ProjectContent";
import { PicturesCarousel } from "@/components/Carousels/PicturesCarousel";
import { Seo } from "@/components/SEO";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface Image {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface Data {
  markdownRemark: {
    html: string;
    frontmatter: {
      client: string;
      stack: string;
      tags: string;
      title: string;
      year: number;
      image1: Image;
      image2: Image;
      carouselImages: Image[];
      metaData: {
        description: string;
      };
    };
  };
}

interface CaseStudyProps {
  data: Data;
}

export default function CaseStudy({ data }: CaseStudyProps) {
  const { markdownRemark } = data;

  const { frontmatter, html } = markdownRemark;

  const firstImage = frontmatter.image1;
  const secondImage = frontmatter.image2;

  const tags: string[] = frontmatter.tags.split(" ");

  return (
    <Layout secondary>
      <Seo
        title={frontmatter.title}
        description={frontmatter.metaData.description}
      />
      <ProjectHero
        tags={tags}
        title={frontmatter.title}
        year={frontmatter.year}
        client={frontmatter.client}
        techStack={frontmatter.stack}
        firstImage={firstImage}
        secondImage={secondImage}
      />
      <ProjectContent html={html} />
      <PicturesCarousel images={frontmatter.carouselImages} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        year
        client
        stack
        tags
        image1 {
          childrenImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
              width: 440
              height: 260
            )
          }
        }
        image2 {
          childrenImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
              width: 440
              height: 260
            )
          }
        }
        carouselImages {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              height: 600
              width: 700
            )
          }
        }
        metaData {
          description
        }
      }
    }
  }
`;
