import { theme } from "@/theme";
import styled, { css } from "styled-components";

const InputTypography = css`
  border: 1px solid ${({ theme }) => theme.colors.black[200]};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.black[900]};
  padding: 1.6rem;
  font-family: "Manrope", sans-serif;
  transition: border-color 0.2s linear;

  &:focus {
    outline: unset;
    border-color: ${({ theme }) => theme.colors.blue[500]};
  }
`;

export const Root = styled.div`
  display: grid;
  gap: 1.2rem;
`;

export const Input = styled.input`
  ${InputTypography}
`;

export const TextArea = styled.textarea`
  ${InputTypography};
  height: 10rem;
  resize: none;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.black[900]};
  font-weight: 600;
`;
