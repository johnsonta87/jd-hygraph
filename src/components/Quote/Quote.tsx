import { RichText } from "@/__generated__/graphql";
import { Box, Flex, Image } from "@chakra-ui/react";

type Props = {
  content: RichText;
  hideIcon?: boolean;
};

export function Quote({ content, hideIcon }: Props) {
  if (!content) return;

  return (
    <Flex
      as="blockquote"
      fontSize="xl"
      mb="60px"
      maxW={{ base: "100%", md: "60%" }}
      mx="auto"
    >
      {!hideIcon && (
        <Box
          as="div"
          mr={{ base: "1.25rem", md: "2.25rem" }}
          position="relative"
        >
          <Image width="150px" src="/svgs/quote.svg" alt="Quote icon" />
        </Box>
      )}

      <Box
        display="inline-block"
        ml="2"
        fontFamily="Juana"
        fontSize={{ base: "18px", md: "24px" }}
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </Flex>
  );
}
