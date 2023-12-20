"use client";
import { useGetHomepageQuery as GetHomepageQuery } from "@/__generated__/graphql";
import { ServicesList } from "@/components";
import { PageHero } from "@/components/PageHero/PageHero";
import PortfolioSwitcher from "@/components/PortfolioSwitcher/PortfolioSwitcher";
import { Box, Divider, Flex, Spinner } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { loading, data } = GetHomepageQuery();
  const { homepage } = data || {};
  const { general, services, variant } = homepage || {};

  if (loading)
    return (
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Spinner size="xl" mx="auto" />
      </Flex>
    );

  return (
    <Box>
      <PageHero
        variant={variant || "primary"}
        title={general?.mainHeading || ""}
        subtitle={general?.introSubheading?.html || ""}
        image={general?.showcaseImage?.url || ""}
      />

      {variant === "primary" && (
        <>
          <Divider my="40px" />
          {services?.showListOfServices && (
            <ServicesList heading={services.title || ""} />
          )}
          <Divider my="40px" />
        </>
      )}

      <PortfolioSwitcher variant={variant || "primary"} />
    </Box>
  );
};

export default Home;
