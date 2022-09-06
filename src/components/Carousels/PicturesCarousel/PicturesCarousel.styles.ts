import styled from 'styled-components';

interface ActiveImage {
  active: boolean,
}

export const ImageContainer = styled.div<ActiveImage>`
  width: 300px;
  opacity: ${({active}) => active ? 1: 0.7};
  transform: ${({active}) => active ? 'scale(0.9)' : 'scale(0.7)'};
  transition: all 300ms;

  ${({theme}) => theme.mediaQueries.maxSm} {
    padding: 0 1rem;
  }
`;

export const Root = styled.div`
  width: 100%;
 max-width: 66.25em;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  margin-top: 8rem;
  width: 100%;
  padding: 8rem 0 16rem;
  background-color: #F9FAFC;
`;

export const Typography = styled.div`
  margin-bottom: 5.6rem;
  display: grid;
  gap: 1.6rem;
`;

export const PrevRoot = styled.div`
  position: absolute;
  bottom: 0;
  right: 51%;
  z-index: 9999;
  
`;

export const NextRoot = styled.div`
  position: absolute;
  left: 51%;
  bottom: 0;
  z-index: 9999;
  
`;