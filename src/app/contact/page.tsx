"use client";
import { useGetContactPageQuery as GetContactPageQuery } from "@/__generated__/graphql";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Box, Container, Flex, Link, Spinner, Text } from "@chakra-ui/react";

type Props = {};

const ContactPage = (props: Props) => {
  const { loading, data } = GetContactPageQuery();
  const { contactPage } = data || {};
  const { contactMainHeading, contactLinks, enableForm, subheading } =
    contactPage || {};

  if (loading)
    return (
      <Flex
        w="100%"
        h="calc(100vh - 335px)"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" mx="auto" />
      </Flex>
    );

  console.log(contactLinks);

  return (
    <Container maxW="1274px" color="black" minH="calc(100vh - 300px)">
      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row" }}
        align="start"
        justify="space-between"
        gap={{ base: "24px", md: "128px" }}
      >
        <Box flexBasis={{ base: "100%", md: "50%" }}>
          {contactMainHeading && (
            <Text as="h1" mb="12px">
              {contactMainHeading}
            </Text>
          )}
          {subheading && (
            <Text
              as="div"
              fontSize="md"
              dangerouslySetInnerHTML={{ __html: subheading.html }}
            />
          )}

          {contactLinks && (
            <Flex flexDirection="column" mt="24px" gap="12px">
              {contactLinks.map((link) => (
                <Box key={link?.id}>
                  <Text as="span" fontSize="21px" color="clay">
                    {link?.title}
                  </Text>
                  <br />
                  <Link
                    href={
                      link.emailLink
                        ? `mailto:${link?.emailLink}`
                        : link?.link || ""
                    }
                    target={link?.isExternal ? "_blank" : "self"}
                  >
                    {link?.link || link?.emailLink}
                  </Link>
                </Box>
              ))}
            </Flex>
          )}
        </Box>
        {enableForm && (
          <Box flexBasis={{ base: "100%", md: "50%" }} w="100%">
            <ContactForm />
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default ContactPage;
