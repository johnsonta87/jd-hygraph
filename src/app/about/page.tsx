"use client";
import { useGetHomepageQuery as GetHomepageQuery } from "@/__generated__/graphql";
import { PageHero } from "@/components/PageHero/PageHero";
import { Divider, Flex, Spinner } from "@chakra-ui/react";
import ProcessList from "../../components/ProcessList/ProcessList";

type Props = {};

const AboutPage = (props: Props) => {
  const { loading, data } = GetHomepageQuery();
  const { homepage } = data || {};
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

      <Divider my="40px" />
      <ProcessList />
    </>
  );
};

export default AboutPage;
