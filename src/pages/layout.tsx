import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AppContainer } from "@/containers/AppContainer";
import styled from "styled-components";
import React, { useState } from "react";
import { ActiveLinkContext, defaultState } from "@/contex/ActiveLink";
import { ActiveNavbarContext } from "@/contex/ActiveNavbar";

interface LayoutProps {
  secondary?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, secondary }) => {
  const [activeLink, setActiveLink] = useState<string>(defaultState.activeLink);
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);

  const activeLinkHandler = (link: string) => {
    setActiveLink(link);
  };

  const value = {
    activeLink,
    activeLinkHandler,
  };

  const activeNavbarHandler = (state: boolean) => setActiveNavbar(state);

  return (
    <ActiveLinkContext.Provider value={value}>
      <ActiveNavbarContext.Provider
        value={{ activeNavbar, activeNavbarHandler }}
      >
        <AppContainer>
          <Navbar secondary={secondary} />
          <Main>{children}</Main>
          <Footer />
        </AppContainer>
      </ActiveNavbarContext.Provider>
    </ActiveLinkContext.Provider>
  );
};

export default Layout;

const Main = styled.main`
  min-height: 70vh;
`;
