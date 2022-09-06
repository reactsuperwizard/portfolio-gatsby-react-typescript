import styled, { css } from "styled-components";
import { hexToRGBA } from "@/utils/color.utils";

export type IconButtonVariants = "primary" | "secondary";

export type IconButtonProps = {
  variant?: IconButtonVariants;
  shadowVisible?: boolean;
  onClick?: () => void;
};

export const Container = styled.button<IconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.maxSm} {
    width: 5rem;
    height: 5rem;
  }

  ${({ variant }) => {
    if (variant === "primary") {
      return primaryVariant;
    } else if (variant === "secondary") {
      return secondaryVariant;
    }
  }};

  ${(props) =>
    props.shadowVisible &&
    `box-shadow: 0rem 0.8rem 2rem 0rem ${hexToRGBA(
      props.theme.colors.black[500],
      0.06
    )}`}
`;

export const primaryVariant = css`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  color: ${({ theme }) => theme.colors.white};
`;

export const secondaryVariant = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue[500]};
`;
