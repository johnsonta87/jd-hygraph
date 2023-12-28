import { Box, Container, Flex, Link } from "@chakra-ui/react";

type Props = {};

export function Footer({ ...props }: Props) {
  return (
    <Box mt="91px" px={0} py={4} w="100%" bg="white" boxShadow="md" {...props}>
      <Container maxW="1274px">
        <Flex
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          {...props}
        >
          <Box>
            <Flex
              flexDirection="column"
              fontSize="18px"
              fontWeight="400"
              textDecoration="underline"
            >
              <Link
                href="https://ca.linkedin.com/in/jenny-diep-design"
                isExternal
              >
                LinkedIn
              </Link>
              <Link href="mailto:jendiep88@gmail.com">jendiep88@gmail.com</Link>
            </Flex>
          </Box>

          <Link
            href="/"
            fontFamily="Juana"
            fontSize={{ base: "16px", md: "24px" }}
            display={{ base: "none", sm: "block" }}
          >
            jennydiep.com
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
