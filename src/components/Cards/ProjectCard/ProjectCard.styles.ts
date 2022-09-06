import styled from "styled-components";

export type CoverVariants = "blue" | "lightBlue" | "orange" | "cyan";

export const Cover = styled.div<{ variant: CoverVariants }>`
  width: 100%;
  border-radius: 0.4rem;
  position: relative;
  overflow: hidden;
`;

export const CoverImage = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;
