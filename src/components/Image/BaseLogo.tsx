"use client";

import { Box, Link, Text } from "@chakra-ui/react";

type Props = {
  text: string;
  w?: string;
  color?: string[];
};

const BaseLogo = ({ text, ...props }: Props) => {
  if (!text) return;

  return (
    <Box {...props}>
      <Text as="h1">
        <Link
          href="/"
          _hover={{ textDecoration: "none" }}
          fontSize={{ base: "24px", md: "2rem" }}
        >
          {text}
        </Link>
      </Text>
    </Box>
  );
};

export default BaseLogo;
