"use client";
import { Box, Container, Flex } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

export const NavbarContainer = ({ children, ...props }: Props) => {
  return (
    <Box
      as="nav"
      px={0}
      py={4}
      w="100%"
      mb="78px"
      bg="white"
      boxShadow="lg"
      {...props}
    >
      <Container maxW="1274px">
        <Flex
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          {...props}
        >
          {children}
        </Flex>
      </Container>
    </Box>
  );
};
