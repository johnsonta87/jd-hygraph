"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import PortfolioImage from "../Image/PortfolioImage";

type PortfolioCategoriesType = {
  id: string;
  name: string;
};

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
  portfolioCategories?: PortfolioCategoriesType[];
};

type Props = {
  category: string;
  list: allPortfoliosType[];
  enableModal?: boolean;
  activeCategory?: string;
};

export function PortfolioGrid({
  list,
  category,
  enableModal,
  activeCategory,
}: Props) {
  if (!list) return;

  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: "50% 1fr" }}
      gap={{ base: "6", md: "19px" }}
    >
      {list
        .filter((l) => {
          if (category === "All") return l;
          if (!l.portfolioCategories) return;

          return l.portfolioCategories.some((f) => f.name === category);
        })
        .map((p) => (
          <GridItem key={p.id}>
            <PortfolioImage
              link={`/portfolio/${p.slug}?category=${activeCategory}`}
              src={p.showcaseImage?.url || ""}
              title={p.title || ""}
              caption={p.title}
              year={p.year}
              shortHeading={p.shortHeading}
              category={`${
                p.portfolioCategories &&
                p.portfolioCategories[0].name + " design"
              }`}
              enableModal={enableModal}
            />
          </GridItem>
        ))}
    </Grid>
  );
}
