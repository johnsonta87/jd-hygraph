import { Box, Container, Flex, Link } from "@chakra-ui/react";

type Props = {};

export function Footer({ ...props }: Props) {
  return (
    <Box
      mt={24}
      px={0}
      py={4}
      w="100%"
      mb={8}
      bg="white"
      boxShadow="md"
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
          <Box>
            <Flex flexDirection="column">
              <Link href="https://google.com" isExternal>
                LinkedIn
              </Link>
              <Link href="mailto:jendiep88@gmail.com">jendiep88@gmail.com</Link>
            </Flex>
          </Box>

          <Link href="/">jennydiep.com</Link>
        </Flex>
      </Container>
    </Box>
  );
}
