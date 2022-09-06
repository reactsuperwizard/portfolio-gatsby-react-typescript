import styled from 'styled-components';

export const Categories = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: .8rem;
  }
`;

export const Root = styled.div`
  padding: 4rem 0;
`;

export const ProjectInfo = styled.div`
  display: grid;
  gap: .8rem;
`;