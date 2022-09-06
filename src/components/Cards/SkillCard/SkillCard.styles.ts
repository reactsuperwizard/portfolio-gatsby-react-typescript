import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(230, 238, 250, 0.5) 0%,
    rgba(230, 238, 250, 0.2) 59.79%,
    rgba(255, 255, 255, 0) 100%
  );

  ${({ theme }) => theme.mediaQueries.maxSm} {
    background: linear-gradient(
      180deg,
      rgba(230, 238, 250, 0) 0%,
      rgba(230, 238, 250, 0.3) 10%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 0rem;
  ${({ theme }) => theme.mediaQueries.maxSm} {
    padding: 0rem 0rem;
  }
`;
