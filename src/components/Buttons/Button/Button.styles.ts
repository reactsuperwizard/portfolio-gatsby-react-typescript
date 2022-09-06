import React from "react";
import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "underlined";

export type ButtonProps = {
  variant?: ButtonVariants;
  endIcon?: React.ReactElement;
  onClick?: () => void;
  type?: "submit" | "button";
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 1.6rem 2.8rem;
  border-radius: 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
  cursor: pointer;

  ${({ variant }) => {
    if (variant === "primary") {
      return primaryVariant;
    } else if (variant === "secondary") {
      return secondaryVariant;
    } else if (variant === "underlined") {
      return underlinedVariant;
    }
  }};
`;

export const primaryVariant = css`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  color: ${({ theme }) => theme.colors.white};
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mediaQueries.maxSm} {
    padding: 1.2rem 2.4rem;
  }
`;

export const secondaryVariant = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue[500]};

  ${({ theme }) => theme.mediaQueries.maxSm} {
    padding: 1.2rem 2.4rem;
  }
`;

export const underlinedVariant = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue[500]};
  border-radius: 0rem;
  padding: 1.2rem 0rem;
  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.blue[500]};
`;
