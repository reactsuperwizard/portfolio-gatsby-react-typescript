import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black[300]};
  border-radius: 0.4rem;

  padding: 8rem 1rem 6rem;

  ${({ theme }) => theme.mediaQueries.maxSm} {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  max-width: 84rem;
`;

export const Girting = styled.div`
  display: grid;
  gap: 2rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 2.8rem;

  margin: 3.6rem 0 0;
`;
