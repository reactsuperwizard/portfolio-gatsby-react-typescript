import React from "react";
import * as Styles from "./MobileMenu.styles";
import Close from "@/assets/icons/coolicon.svg";
import { Avatar } from "@/components/Avatar";
import { Text } from "@/components/Text";
import { graphql, navigate, useStaticQuery } from "gatsby";

interface MobileMenuProps {
  isActive: boolean;
  children: React.ReactNode;
  closeHandler: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isActive,
  children,
  closeHandler,
}) => {
  const avatar = useStaticQuery(graphql`
    query GetAvatar1 {
      file(relativePath: { eq: "grigore_budac.jpg" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, height: 34, width: 34, quality: 100)
        }
      }
    }
  `);

  return (
    <Styles.Root isActive={isActive}>
      <Styles.Header>
        <Styles.CloseContainer onClick={closeHandler}>
          <Close />
        </Styles.CloseContainer>
        <Styles.Profile>
          <Avatar
            src={avatar.file.childrenImageSharp[0].gatsbyImageData}
            alt="Grigore's profile picture"
          />

          <Text
            color="black.600"
            fontWeight="500"
            fontSize="md"
            marginLeft="0.8rem"
            cursor="pointer"
            onClick={() => {
              closeHandler();
              navigate("/");
            }}
          >
            Grigore Budac
          </Text>
        </Styles.Profile>
      </Styles.Header>
      <Styles.ChildrenContainer>{children}</Styles.ChildrenContainer>
    </Styles.Root>
  );
};

export { MobileMenu };
