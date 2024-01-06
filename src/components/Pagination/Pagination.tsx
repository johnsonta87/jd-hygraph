import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  enable: boolean;
  clickingFrom?: "all" | "product" | "branding";
};

export function Pagination({ enable }: Props) {
  if (!enable) return;

  return (
    <Flex
      w="100%"
      flexDirection={{ base: "column", lg: "row" }}
      align="center"
      justify="space-between"
      gap={{ base: "32px", md: "60px" }}
    >
      <Link href="/">
        <Flex align="center">
          <Image src="/svgs/chevron-left.svg" alt="Previous Icon" />
          <Box>
            <Text fontFamily="Juana" fontSize={{ base: "18px", md: "24px" }}>
              Previous
            </Text>
            <Text display={{ base: "none", md: "block" }} fontSize="18px">
              Title
            </Text>
          </Box>
        </Flex>
      </Link>
      <Link href="/">
        <Flex align="center">
          <Box>
            <Text fontFamily="Juana" fontSize={{ base: "18px", md: "24px" }}>
              Next
            </Text>
            <Text display={{ base: "none", md: "block" }} fontSize="18px">
              Title
            </Text>
          </Box>
          <Image src="/svgs/chevron-right.svg" alt="Next Icon" />
        </Flex>
      </Link>
    </Flex>
  );
}
