"use client";
import { useGetAboutPageQuery as GetAboutPageQuery } from "@/__generated__/graphql";
import { PageHero } from "@/components/PageHero/PageHero";
import { Box, Divider, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import ProcessList from "../../components/ProcessList/ProcessList";

type Props = {};

const AboutPage = (props: Props) => {
  const { loading, data } = GetAboutPageQuery();
  const { aboutPage } = data || {};
  const { pageHero, myProcess } = aboutPage || {};

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

  return (
    <>
      <PageHero
        variant="primary"
        title={pageHero?.mainHeading || ""}
        subtitle={pageHero?.introSubheading?.html || ""}
        image={pageHero?.showcaseImage?.url || ""}
      />

      {myProcess?.title && (
        <>
          <Divider my="40px" />
          <Text as="h2" mb="8">
            {myProcess?.title}
          </Text>
        </>
      )}
      {myProcess?.image && (
        <>
          <Flex justifyContent="space-between" alignItems="start">
            <Box>
              <Image
                src={myProcess?.image?.url || ""}
                alt={`${myProcess?.title || ""} image`}
                objectFit="cover"
                objectPosition="center"
                w="100%"
                maxW="411px"
              />
            </Box>
            {myProcess?.showList && (
              <Box flexBasis="50%">
                <ProcessList />
              </Box>
            )}
          </Flex>

          <Divider my="40px" />
        </>
      )}
    </>
  );
};

export default AboutPage;
