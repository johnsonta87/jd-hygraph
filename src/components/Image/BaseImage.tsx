"use client";

import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";

type Props = {
  title: string;
  src: string;
  enableModal?: boolean;
};

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <>
      <button onClick={() => zoomIn()}>Zoom In</button>
      <button onClick={() => zoomOut()}>Zoom Out</button>
      <button onClick={() => resetTransform()}>Reset</button>
    </>
  );
};

const BaseImage = ({ title, src, enableModal }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (!src && !title) return;

  return (
    <>
      <Image
        width="100%"
        mb={{ base: "40px", md: "60px" }}
        src={src}
        alt={title || ""}
        onClick={() => enableModal && onOpen()}
      />

      {enableModal && (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px)"
            backdropInvert="80%"
            backdropBlur="2px"
          />
          <ModalContent maxW="90%">
            <ModalCloseButton />
            <ModalBody p="0">
              <TransformWrapper>
                <TransformComponent>
                  <Image
                    src={src}
                    alt={title || "Image description"}
                    onClick={onOpen}
                  />
                </TransformComponent>
              </TransformWrapper>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BaseImage;
