"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import PortfolioImage from "../Image/PortfolioImage";

export type allPortfoliosType = {
  id: string;
  slug?: string;
  title?: string;
  updatedAt: any;
  year?: string;
  shortHeading?: string;
  showcaseImage?: {
    url: string;
  };
  portfolioCategory?: {
    name: string;
  };
};

type Props = {
  category: string;
  list: allPortfoliosType[];
};

export function PortfolioGrid({ list, category }: Props) {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: "50% 1fr" }}
      gap={{ base: "6", md: "32px" }}
    >
      {list
        .filter((l) => {
          if (category === "All") return l;
          return l.portfolioCategory?.name === category;
        })
        .map((p) => (
          <GridItem key={p.id}>
            <PortfolioImage
              link={`/portfolio/${p.slug}`}
              src={p.showcaseImage?.url || ""}
              title={p.title || ""}
              caption={p.title}
              year={p.year}
              shortHeading={p.shortHeading}
              category={`${
                p.portfolioCategory?.name === "Art direction"
                  ? p.portfolioCategory?.name
                  : p.portfolioCategory?.name + " design"
              }`}
            />
          </GridItem>
        ))}
    </Grid>
  );
}
