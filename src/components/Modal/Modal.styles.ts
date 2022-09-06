import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: black;
    opacity: 0.5;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: 90%;
  height: 50%;
  max-width: 62rem;
  max-height: 28rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 6rem 7rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 7rem;

  ${({ theme }) => theme.mediaQueries.maxSm} {
    height: 60%;
    max-height: unset;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

export const Mail = styled.div`
  max-width: 15rem;
  max-height: 13rem;
`;

export const TypographyContainer = styled.div`
  display: grid;
  gap: 2.4rem;

  ${({ theme }) => theme.mediaQueries.maxSm} {
    justify-items: center;
    text-align: center;
  }
`;

export const Typography = styled.div`
  display: grid;
  gap: 1.2rem;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 2.6rem;
`;

export const Close = styled.div`
  cursor: pointer;
  padding: 1rem;
  position: absolute;

  top: 3.1rem;
  right: 3.1rem;
`;

export const MediaContainer = styled.div`
  cursor: pointer;

  svg {
    color: #d1d4db;
  }

  svg:first-child {
    color: ${({ theme }) => theme.colors.blue[500]};
  }

  &:hover {
    svg > path {
      fill: ${({ theme }) => theme.colors.blue[500]};
    }
  }
`;
