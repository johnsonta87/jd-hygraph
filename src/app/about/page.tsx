"use client";
import {
  useGetHomepageQuery as GetHomepageQuery,
  useGetMyProcessSectionQuery as GetMyProcessSectionQuery,
} from "@/__generated__/graphql";
import { PageHero } from "@/components/PageHero/PageHero";
import { Box, Divider, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import ProcessList from "../../components/ProcessList/ProcessList";

type Props = {};

const AboutPage = (props: Props) => {
  const { loading, data } = GetHomepageQuery();
  const { data: myProcessQuery } = GetMyProcessSectionQuery();
  const { homepage } = data || {};
  const { myProcessSection } = myProcessQuery || {};
  const { general, variant } = homepage || {};

  if (loading)
    return (
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Spinner size="xl" mx="auto" />
      </Flex>
    );

  return (
    <>
      <PageHero
        variant={variant || "primary"}
        title={general?.mainHeading || ""}
        subtitle={general?.introSubheading?.html || ""}
        image={general?.showcaseImage?.url || ""}
      />

      {myProcessSection?.title && (
        <>
          <Divider my="40px" />
          <Text as="h2" mb="8">
            {myProcessSection?.title}
          </Text>
        </>
      )}
      {myProcessSection?.image && (
        <>
          <Flex justifyContent="space-between" alignItems="start">
            <Box>
              <Image
                src={myProcessSection?.image?.url || ""}
                alt={`${myProcessSection?.title || ""} image`}
                objectFit="cover"
                objectPosition="center"
                w="100%"
                maxW="411px"
              />
            </Box>
            {myProcessSection?.showList && (
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
