import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as Styles from './ProjectResult.styles';
import { ModalImage } from "@/components/ModalImage";

interface ProjectResultProps {
  firstImage: any,
  secondImage: any
}

const ProjectResult: React.FC<ProjectResultProps> = ({ firstImage, secondImage }) => {

  return (
    <Styles.Root>
      <Styles.ImageContainer>
        <GatsbyImage image={firstImage.childrenImageSharp[0].gatsbyImageData} alt={'alt'} />
        <GatsbyImage image={secondImage.childrenImageSharp[0].gatsbyImageData} alt={'alt'} />
      </Styles.ImageContainer>
    </Styles.Root>
  );
}

export { ProjectResult };