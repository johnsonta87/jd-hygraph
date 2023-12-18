import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  text: string;
  hideIcon?: boolean;
};

export function Quote({ text, hideIcon }: Props) {
  if (!text) return;

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
          <Image src="/svgs/quote.svg" alt="Quote icon" />
        </Box>
      )}

      <Text as="p" display="inline-block" ml="2">
        {text}
      </Text>
    </Flex>
  );
}
