import {
  Box,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {
  title: string;
  src: string;
  link: string;
  caption?: string;
  year?: string;
  category?: string;
  shortHeading?: string;
  enableModal?: boolean;
};

const PortfolioImage = ({
  title,
  src,
  link,
  caption,
  year,
  category,
  shortHeading,
  enableModal,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (!src && !title) return;

  return (
    <>
      <Box h={{ base: "223px", md: "421px", lg: "369px" }}>
        {enableModal ? (
          <Image
            boxSize={{ base: "100%", md: "100%" }}
            objectFit="cover"
            objectPosition="center"
            src={src}
            alt={title || "Image description"}
            onClick={() => enableModal && onOpen()}
          />
        ) : (
          <Link href={link}>
            <Image
              boxSize={{ base: "100%", md: "100%" }}
              objectFit="cover"
              objectPosition="center"
              src={src}
              alt={title || "Image description"}
              onClick={() => enableModal && onOpen()}
            />
          </Link>
        )}
      </Box>
      {caption && (
        <Link href={link}>
          <Flex
            justifyContent="space-between"
            alignItems="start"
            pt="0.75rem"
            px="8px"
            fontSize="1rem"
          >
            {caption && (
              <Text
                as="span"
                lineHeight={{ base: "21px", md: "24px" }}
                flexBasis="60%"
              >
                {caption} {shortHeading && ` - ${shortHeading}`}
              </Text>
            )}
            {category ? (
              <Text
                as="span"
                lineHeight={{ base: "21px", md: "27px" }}
                textAlign="right"
              >
                {category}
                <br />
                {year}
              </Text>
            ) : (
              <Text as="span" textAlign="right" pl={4}>
                {year}
              </Text>
            )}
          </Flex>
        </Link>
      )}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="90%">
          <ModalCloseButton />
          <ModalBody p="0">
            <Link href={link}>
              <Image
                src={src}
                alt={title || "Image description"}
                onClick={onOpen}
              />
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PortfolioImage;
