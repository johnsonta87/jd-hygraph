"use client";
import { Box, Container, Flex } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  bgColor?: string;
};

export const NavbarContainer = ({ children, ...props }: Props) => {
  return (
    <Box
      as="nav"
      px={0}
      py={4}
      w="100%"
      mb={{ base: "40px", md: "56px", lg: "78px" }}
      bg={props.bgColor}
      boxShadow="lg"
      position="sticky"
      top="0"
      zIndex="999"
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
