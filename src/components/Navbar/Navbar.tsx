import React, { useState, useContext, useEffect } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";

import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { Avatar } from "@/components/Avatar";
import MenuIcon from "@/assets/icons/MenuIcon.svg";

import * as Styles from "./Navbar.styles";

import { MobileMenu } from "../MobileMenu";
import scrollTo from "gatsby-plugin-smoothscroll";
import { ActiveLinkContext } from "@/contex/ActiveLink";
import { ActiveNavbarContext } from "@/contex/ActiveNavbar";

const LINKS = [
  {
    text: "Blog",
    href: "https://blog.grigorebudac.com/",
  },
  {
    text: "Skills",
    href: "#skills",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Testimonials",
    href: "#testimonials",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

type NavbarProps = {
  secondary: boolean;
};

const Navbar = (props: NavbarProps) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const { activeLink, activeLinkHandler } = useContext(ActiveLinkContext);
  const { activeNavbar } = useContext(ActiveNavbarContext);
  const [addProfileText, setAddProfileText] = useState<string>("");

  if (typeof location !== "undefined") {
    useEffect(() => {
      if (location.pathname !== "/") {
        const path = location.pathname.split("/");
        let end = path[path.length - 1];

        if (end.includes("-")) {
          end = end.split("-").join(" ");
        }

        setAddProfileText(end);
      }
    }, [location.pathname]);
  }

  const burgerHandler = () => {
    setActiveMenu(true);
  };

  const closeHandler = () => {
    setActiveMenu(false);
  };

  const avatar = useStaticQuery(graphql`
    query GetAvatar {
      file(relativePath: { eq: "grigore_budac.jpg" }) {
        childrenImageSharp {
          gatsbyImageData(width: 24, height: 24, quality: 100)
        }
      }
    }
  `);

  const linkHandler = (link: { href: string; text: string }) => {
    if (!link.href.includes("#")) {
      window.open(link.href, "_blank");
      return;
    }

    activeLinkHandler && activeLinkHandler(link.href);

    if (location.pathname !== "/" && link.href !== "#contact") {
      navigate(`/${link.href}`);
    } else {
      scrollTo(link.href);
    }
  };

  const profileHandler = (redirect: boolean) => {
    if (location.pathname !== "/" && redirect) {
      navigate("/");
    } else if (typeof window !== "undefined") {
      window["scrollTo"]({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Styles.Container
      secondary={props.secondary ? props.secondary : activeNavbar}
      id="top"
    >
      <Container>
        <Styles.Content>
          <Styles.Profile>
            <Avatar
              src={avatar.file.childrenImageSharp[0].gatsbyImageData}
              alt="Grigore's profile picture"
            />

            <Text
              color={
                props.secondary
                  ? "black.900"
                  : activeNavbar
                  ? "black.900"
                  : "white"
              }
              fontWeight="500"
              fontSize="md"
              marginLeft="0.8rem"
              cursor="pointer"
              onClick={() => profileHandler(true)}
            >
              {`Grigore Budac`}
            </Text>
            {addProfileText && (
              <Styles.StyledText onClick={() => profileHandler(false)}>
                {` / ${addProfileText}`}
              </Styles.StyledText>
            )}
          </Styles.Profile>

          <Styles.NavMenu>
            {LINKS.map((link) => (
              <Styles.NavMenuItem
                key={link.text}
                isActive={activeLink === link.href}
                secondary={props.secondary ? props.secondary : activeNavbar}
                onClick={() => {
                  linkHandler(link);
                }}
              >
                <Text fontWeight="500" fontSize="md">
                  {link.text}
                </Text>
              </Styles.NavMenuItem>
            ))}
          </Styles.NavMenu>

          <Styles.HamburgerButton
            secondary={props.secondary ? props.secondary : activeNavbar}
            onClick={burgerHandler}
          >
            <MenuIcon />
          </Styles.HamburgerButton>
          <MobileMenu isActive={activeMenu} closeHandler={closeHandler}>
            <Styles.MobileMenuContainer>
              {LINKS.map((link) => (
                <Styles.NavMenuItem
                  mobile
                  key={link.text}
                  isActive={activeLink === link.href}
                  secondary
                  onClick={() => {
                    linkHandler(link);
                    closeHandler();
                  }}
                >
                  <Text fontWeight="500" fontSize="h6">
                    {link.text}
                  </Text>
                </Styles.NavMenuItem>
              ))}
            </Styles.MobileMenuContainer>
          </MobileMenu>
        </Styles.Content>
      </Container>
    </Styles.Container>
  );
};

Navbar.defaultProps = {
  secondary: false,
};

export { Navbar };
