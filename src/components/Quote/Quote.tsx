import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ContentType } from "../../types/";

type Props = {
  content: ContentType;
  hideIcon?: boolean;
};

export function Quote({ content, hideIcon }: Props) {
  if (!content) return;

  return (
    <Flex
      as="blockquote"
      color="gray.500"
      fontSize="xl"
      fontWeight="medium"
      lineHeight="tall"
      maxW="2xl"
      mx="auto"
      mt="10"
      textAlign="center"
    >
      {!hideIcon && (
        <Box as="div" mr="2.25rem" top="-2.25rem" position="relative">
          <Image width="150px" src="/svgs/quote.svg" alt="Quote icon" />
        </Box>
      )}

      <Text as="p" display="inline-block" ml="2">
        {content.html}
      </Text>
    </Flex>
  );
}
