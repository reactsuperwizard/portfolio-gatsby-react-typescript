import styled from 'styled-components';
import { Text } from '../Text';

interface StyledTextProps {
  show: boolean;
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: clamp(2rem, 1.6vw, 2.4rem);
  color: ${({theme}) => theme.colors.black[900]};

  display: ${({show}) => show ? 'block' : 'none'};
`;

export const Button = styled.button`
  font-size: 1.8rem;
  color: ${({theme}) => theme.colors.blue[300]};
  opacity: .2;
  text-decoration: line;
  margin-left: 5px;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const AltText = styled.div`
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  background-color: ${({theme}) => theme.colors.blue[100]};
  border-radius: 50%;
  margin: auto;
 
`;
