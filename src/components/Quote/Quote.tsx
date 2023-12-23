import { Box, Flex, Image } from "@chakra-ui/react";
import { ContentType } from "../../types/";

type Props = {
  content: ContentType;
  hideIcon?: boolean;
};

export function Quote({ content, hideIcon }: Props) {
  if (!content) return;

  return (
    <Flex as="blockquote" fontSize="xl" mb="60px" maxW="60%" mx="auto">
      {!hideIcon && (
        <Box as="div" mr="2.25rem" position="relative">
          <Image width="150px" src="/svgs/quote.svg" alt="Quote icon" />
        </Box>
      )}

      <Box
        display="inline-block"
        ml="2"
        fontFamily="Juana"
        fontSize="24px"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </Flex>
  );
}
