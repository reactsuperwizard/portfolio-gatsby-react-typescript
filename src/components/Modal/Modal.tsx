import React from "react";
import * as Styles from "./Modal.styles";
import Mail from "@/assets/icons/Mail.svg";
import Linkedin from "@/assets/icons/Linkedin.svg";
import Twitter from "@/assets/icons/twitterGray.svg";
import GithubGray from "@/assets/icons/githubGray.svg";
import Close from "@/assets/icons/coolicon.svg";
import { Text } from "../Text";
import styled from "styled-components";

interface ModalProps {
  closeHandler: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeHandler }) => {
  return (
    <Styles.Root>
      <Styles.ModalContainer>
        <Styles.Close onClick={closeHandler}>
          <Close />
        </Styles.Close>
        <Styles.Mail>
          <Mail />
        </Styles.Mail>
        <Styles.TypographyContainer>
          <Styles.Typography>
            <Text as="h3" fontSize="h5">
              Thank you!
            </Text>
            <Text as="p" fontSize="sm" color="black.500">
              I have received your message and I will reach you as soon as
              possible.
            </Text>
          </Styles.Typography>
          <Styles.Typography>
            <Text as="p" fontSize="sm" color="black.500">
              Follow me
            </Text>
            <Styles.SocialMedia>
              <Styles.MediaContainer>
                <a
                  href="https://www.linkedin.com/in/budac-grigore"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <Linkedin />
                </a>
              </Styles.MediaContainer>
              <Styles.MediaContainer>
                <a
                  href="https://twitter.com/grigorebudac"
                  target="_blank"
                  aria-label="twitter"
                >
                  <Twitter />
                </a>
              </Styles.MediaContainer>
              <Styles.MediaContainer>
                <a
                  href="https://github.com/grigorebudac"
                  target="_blank"
                  aria-label="github"
                >
                  <GithubGray />
                </a>
              </Styles.MediaContainer>
            </Styles.SocialMedia>
          </Styles.Typography>
        </Styles.TypographyContainer>
      </Styles.ModalContainer>
    </Styles.Root>
  );
};

export { Modal };
