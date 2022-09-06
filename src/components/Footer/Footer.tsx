import React from "react";

import { Text } from "@/components/Text";
import { Container } from "@/components/Container";
import { ContactForm } from "../Forms/ContactForm";
import { theme } from "@/theme";

import * as Styles from "./Footer.styles";

import LinkedinIcon from "@/assets/icons/Linkedin.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import GitHubIcon from "@/assets/icons/github.svg";

const Footer = () => {
  return (
    <Styles.Wrapper>
      <Styles.Ornament />

      <Container marginBottom="6rem">
        <Styles.FormContainer id="contact">
          <ContactForm />
        </Styles.FormContainer>
      </Container>
      <Styles.ContactsContainer>
        <Styles.Contacts>
          <Text as="p" fontSize="sm" color={theme.colors.white}>
            Ⓒ 2021 Grigore Budac. All rights reserved
          </Text>
          <a href="mailto:contact@grigorebudac.com">
            <Text as="p" fontSize="sm" color={theme.colors.white}>
              contact@grigorebudac.com
            </Text>
          </a>
          <Styles.SocialMedia>
            <a href="https://www.linkedin.com/in/budac-grigore" target="_blank">
              <LinkedinIcon />
            </a>
            <a href="https://twitter.com/grigorebudac" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://github.com/grigorebudac" target="_blank">
              <GitHubIcon />
            </a>
          </Styles.SocialMedia>
        </Styles.Contacts>
      </Styles.ContactsContainer>
    </Styles.Wrapper>
  );
};

export { Footer };
