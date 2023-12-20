import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  src: string;
  caption?: string;
  year?: string;
  category?: string;
  height?: string;
};

const BaseImageCaption = ({
  title,
  src,
  caption,
  year,
  category,
  height,
}: Props) => {
  if (!src && !title) return;

  return (
    <Box>
      <Box h={height}>
        <Image
          boxSize={{ base: "100%", md: "100%" }}
          objectFit="cover"
          objectPosition="center"
          src={src}
          alt={title || "Image description"}
        />
      </Box>
      {caption && (
        <Flex
          justifyContent="space-between"
          alignItems="start"
          pt="0.75rem "
          px="8px"
          fontSize="1rem"
        >
          {caption && (
            <Text as="span" lineHeight={4}>
              {caption}
            </Text>
          )}
          {category ? (
            <Text as="span" textAlign="right">
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
      )}
    </Box>
  );
};

export default BaseImageCaption;
