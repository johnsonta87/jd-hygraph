"use client";
import { useGetHomepageQuery as GetHomepageQuery } from "@/__generated__/graphql";
import { PortfolioList, ServicesList } from "@/components";
import { PageHero } from "@/components/PageHero/PageHero";
import { Divider, Spinner } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { loading, error, data } = GetHomepageQuery();
  const { homepage } = data || {};
  const { general, services } = homepage || {};

  if (loading) return <Spinner size="xl" />;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <PageHero
        variant="default"
        title={general?.mainHeading || ""}
        subtitle={general?.introSubheading?.html || ""}
        image={general?.showcaseImage?.url || ""}
      />
      <Divider my={12} />
      {services?.showListOfServices && (
        <ServicesList heading={services.title || ""} />
      )}
      <Divider my={12} />
      <PortfolioList variant="default" category="Product design" />
    </div>
  );
};

export default Home;
