import React from "react";

import * as Styles from "./Modal.styles";
import { GatsbyImage } from "gatsby-plugin-image";
import { RiCloseLine } from "react-icons/ri";

interface ModalProps {
  closeHandler: () => void;
  imageUrl: any
}

const ModalImage: React.FC<ModalProps> = ({ closeHandler, imageUrl }) => {
  return (
    <Styles.Root>
      <Styles.Close onClick={closeHandler}>
        <RiCloseLine />
      </Styles.Close>
      <Styles.ModalContainer>
        <Styles.CoverImage>
          <GatsbyImage image={imageUrl} alt="alt" imgStyle={{ left: "50%", transform: "translate(-50%, 0)", width: "100%" }} />
        </Styles.CoverImage>
      </Styles.ModalContainer>
    </Styles.Root>
  );
};

export { ModalImage };
