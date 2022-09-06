import styled from "styled-components";

export const Root = styled.div`
  .root {
    display: grid;
    row-gap: 6rem;
  }

  .project-detail {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 7rem;

    ${({ theme }) => theme.mediaQueries.maxSm} {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.black[700]};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 3rem;
  }

  p + p {
    margin-top: 20px;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h6};
    color: ${({ theme }) => theme.colors.black[900]};
  }
`;
