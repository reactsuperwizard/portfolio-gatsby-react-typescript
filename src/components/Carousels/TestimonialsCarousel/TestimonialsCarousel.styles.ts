import styled from 'styled-components';

interface ActiveTestimonalContainer {
  active: boolean,
}

export const ClientText = styled.h6`
  font-size: 14px;
  font-weight: 600;
  color: black;
  margin-top: 10px;
`
export const TestimonalContainer = styled.div<ActiveTestimonalContainer>`
  position: relative;
  display: ${({active}) => active ? "block" : "none"};
`

export const PrevRoot = styled.div`
  position: absolute;
  top: 15px;
  left: -125px;
  ${({theme}) => theme.mediaQueries.maxSm} {
   display: none;
  }
`;

export const NextRoot = styled.div`
  position: absolute;
  right:  -125px;
  top:15px;
  ${({theme}) => theme.mediaQueries.maxSm} {
   display: none;
  }
`;
