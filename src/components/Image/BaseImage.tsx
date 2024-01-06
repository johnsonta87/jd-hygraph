import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {
  title: string;
  src: string;
  enableModal?: boolean;
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="90%">
            <ModalCloseButton />
            <ModalBody p="0">
              <Image
                src={src}
                alt={title || "Image description"}
                onClick={onOpen}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BaseImage;
