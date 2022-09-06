import styled, { css } from "styled-components";
import { Text } from '../Text';

export const Container = styled.nav<{ secondary: boolean }>`
  position: sticky;
  position: -webkit-sticky;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: all 0.2s linear;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme: { colors }, secondary }) =>
    secondary ? colors.black[100] : `rgba(255, 255, 255, 0.2)`};

  background-color: ${({ theme: { colors }, secondary }) =>
    secondary ? colors.white : colors.blue[500]};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0rem;
  padding: 0rem;

  ${(props) => props.theme.mediaQueries.maxSm} {
    display: none;
  }
`;

export const NavMenuItem = styled.li<{ isActive: boolean; secondary: boolean, mobile?: boolean }>`
  display: inline;
  padding: 2.8rem 0rem;
  opacity: 0.6;
  border-bottom: 0.1rem solid transparent;
  cursor: pointer;
  transition: all 0.2s linear;
  color: ${({ theme: { colors }, secondary }) =>
    secondary ? colors.blue[900] : colors.white};

  ${(props) => props.isActive && NavMenuItemActive(props.secondary)}

  :hover {
    opacity: 0.8;
  }

  :not(:last-child) {
    margin-right: 6rem;
  }

  ${(props) => props.mobile && css`
    :not(:last-child) {
      margin-right: unset;
    }
  `}
`;

export const NavMenuItemActive = (secondary: boolean) => css`
  opacity: 1;

  border-color: ${({ theme: { colors } }) =>
    secondary ? colors.blue[500] : colors.white};

  ${secondary &&
  css`
    color: ${({ theme: { colors } }) => colors.blue[500]};
  `}

  :hover {
    opacity: 1;
  }
`;

export const HamburgerButton = styled.button<{ secondary: boolean }>`
  margin: 1.4rem 0rem;
  padding: 1.4rem;
  position: relative;
  bottom: -3px;

  ${(props) => props.theme.mediaQueries.minSm} {
    display: none;
  }

  > svg {
    color: ${({ theme: { colors }, secondary }) =>
      secondary ? colors.black[500] : colors.white};
  }
`;

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const StyledText = styled(Text)`
  text-transform: capitalize;
  margin-left: 5px;
  font-weight: 600;

  cursor: pointer;
`;