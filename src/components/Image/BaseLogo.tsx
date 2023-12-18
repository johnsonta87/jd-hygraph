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
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <Text fontSize="lg" fontWeight="bold">
          {text}
        </Text>
      </Link>
    </Box>
  );
};

export default BaseLogo;
