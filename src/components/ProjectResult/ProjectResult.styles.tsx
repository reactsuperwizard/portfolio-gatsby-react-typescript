import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  overflow-y: hidden;
  padding: 4rem 1rem 0;
  background: linear-gradient(180deg, #3475D6 0%, #80A9E6 100%);
  border-radius: .4rem;
`;

export const ImageContainer = styled.div`
  max-width: 92rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 0 auto;
  transform: translateY(10%);
`;