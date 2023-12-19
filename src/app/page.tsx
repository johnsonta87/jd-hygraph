"use client";
import { useGetHomepageQuery as GetHomepageQuery } from "@/__generated__/graphql";
import { PortfolioList, ServicesList } from "@/components";
import { PageHero } from "@/components/PageHero/PageHero";
import PortfolioSwitcher from "@/components/PortfolioSwitcher/PortfolioSwitcher";
import { Divider, Spinner } from "@chakra-ui/react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { loading, error, data } = GetHomepageQuery();
  const { homepage } = data || {};
  const { general, services, variant } = homepage || {};

  if (loading) return <Spinner size="xl" />;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <PageHero
        variant={variant || "primary"}
        title={general?.mainHeading || ""}
        subtitle={general?.introSubheading?.html || ""}
        image={general?.showcaseImage?.url || ""}
      />

      {variant === "primary" && (
        <>
          <Divider my={12} />
            {services?.showListOfServices && (
              <ServicesList heading={services.title || ""} />
            )}
          <Divider my={12} />
        </>
      )}

      <PortfolioSwitcher variant={variant || "primary"} />
    </div>
  );
};

export default Home;
