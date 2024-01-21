"use client";
import { useGetHomepageQuery as GetHomepageQuery } from "@/__generated__/graphql";
import { PageHero } from "@/components/PageHero/PageHero";
import PortfolioSwitcher from "@/components/PortfolioSwitcher/PortfolioSwitcher";
import { Container, Flex, Image, Spinner } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { loading, data } = GetHomepageQuery();
  const { homepage } = data || {};
  const { general, variant, bannerImage } = homepage || {};

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
    <Container maxW="1274px" color="black">
      {bannerImage && (
        <Image
          src={bannerImage?.url || ""}
          alt="page banner"
          w="100%"
          h="100%"
          mb={10}
        />
      )}

      <PageHero
        bannerImage={bannerImage?.url || ""}
        variant={variant || "primary"}
        title={general?.mainHeading || ""}
        subtitle={general?.introSubheading?.html || ""}
        image={general?.showcaseImage?.url || ""}
      />

      <PortfolioSwitcher enableModal={false} />
    </Container>
  );
};

export default Home;
