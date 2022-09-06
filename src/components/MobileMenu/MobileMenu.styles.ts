import styled from "styled-components";

interface Active {
  isActive: boolean;
}

export const Root = styled.div<Active>`
  position: fixed;
  top: 0;
  width: 100vw;
  bottom: 0;
  right: 0;

  transform: ${({ isActive }) =>
    isActive ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 400ms ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  ${({ theme }) => theme.mediaQueries.minSm} {
    display: none;
  }
`;

export const CloseContainer = styled.div`
  padding: 1rem;
  transform: scale(1.4);
  cursor: pointer;
`;

export const ChildrenContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 3rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black[100]};
`;
