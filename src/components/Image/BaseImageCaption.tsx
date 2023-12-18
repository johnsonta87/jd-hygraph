import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  src: string;
  caption?: string;
  year?: string;
  category?: string;
};

const BaseImageCaption = ({ title, src, caption, year, category }: Props) => {
  if (!src && !title) return;

  return (
    <Box>
      <Image
      boxSize={{ base: "100%", md: "100%" }}
    objectFit='cover'
     src={src} alt={title || "Image description"} />
      {caption && (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          px="4"
        >
          {caption && <Text as="span" fontSize="lg">{caption}</Text>}
          {category ? <Text as="span" textAlign="right" fontSize="lg">{category}<br />{year}</Text>
          : <Text as="span" textAlign="right" fontSize="lg">{year}</Text>}
        </Flex>
      )}
    </Box>
  );
};

export default BaseImageCaption;
