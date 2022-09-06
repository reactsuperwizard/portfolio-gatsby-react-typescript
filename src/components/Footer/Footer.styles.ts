import styled from "styled-components";
import { Container } from "../Container";

import FooterOrnament from "@/assets/ornaments/FooterOrnament.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 71rem;
  margin-top: 36rem;
  background-color: ${({ theme }) => theme.colors.blue[500]};

  position: relative;
  /* overflow-Y: hidden; */
`;

export const Ornament = styled(FooterOrnament)`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  top: 3.2rem;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: -26rem;
  max-height: 106rem;
  width: calc(100vw - 20px);
  max-width: 106rem;
`;

export const Contacts = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr;

  ${({ theme }) => theme.mediaQueries.maxSm} {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    & > *:not(:last-child) {
      margin-top: 1.5rem;
    }
  }
`;

export const ContactsContainer = styled(Container)`
  position: absolute;
  bottom: 6rem;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.maxSm} {
    bottom: 4rem;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  svg {
    color: #fff;
  }

  ${({ theme }) => theme.mediaQueries.maxSm} {
    justify-content: center;
  }

  & > *:not(:last-child) {
    margin-right: 3.5rem;
  }
`;
