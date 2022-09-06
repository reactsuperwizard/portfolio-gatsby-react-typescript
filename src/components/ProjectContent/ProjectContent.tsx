import React from 'react';
import { Container } from '../Container';
import * as Styled from './ProjectContent.styles';

interface ProjectContentProps {
  html: string; 
}

const ProjectContent: React.FC<ProjectContentProps> = ({html}) => {
  return (
    <Container> 
      <Styled.Root dangerouslySetInnerHTML={{__html: html}}/>
    </Container>
  );
}

export {ProjectContent};