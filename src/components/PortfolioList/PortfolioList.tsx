"use client";
import {
  useGetAllPortfoliosQuery as GetAllPortfoliosQuery,
  useGetPortfoliosByCategoryQuery as GetPortfoliosByCategoryQuery,
} from "@/__generated__/graphql";
import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import BaseImageCaption from "../Image/BaseImageCaption";

type Props = {
  category: string;
  variant: "primary" | "secondary";
  hideCategoryName?: boolean;
};

export function PortfolioList({ category, variant, hideCategoryName }: Props) {
  const { loading, data } = GetPortfoliosByCategoryQuery({
    variables: { portfolioCategory: category },
  });
  const { loading: allLoading, data: allQuery } = GetAllPortfoliosQuery();
  const { portfolios } = data || {};
  const { portfolios: allPortfolios } = allQuery || {};

  if (loading || allLoading) return <Spinner size="xl" />;

  if (variant === "secondary")
    return (
      <Box>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "50% 1fr" }}
          gap={{ base: "6", md: "32px" }}
        >
          {category === "All"
            ? allPortfolios &&
              allPortfolios.map((p, index: number) => (
                <GridItem key={index}>
                  <BaseImageCaption
                    src={p.showcaseImage?.url || ""}
                    title={p.title || ""}
                    caption={p.title || ""}
                    year={p.year || ""}
                    category={
                      hideCategoryName ? "" : p.portfolioCategory?.name || ""
                    }
                    height="369px"
                  />
                </GridItem>
              ))
            : portfolios &&
              portfolios.map((p, index: number) => (
                <GridItem key={index}>
                  <BaseImageCaption
                    src={p.showcaseImage?.url || ""}
                    title={p.title || ""}
                    caption={p.title || ""}
                    year={p.year || ""}
                    category={
                      hideCategoryName ? "" : p.portfolioCategory?.name || ""
                    }
                    height="369px"
                  />
                </GridItem>
              ))}
        </Grid>
      </Box>
    );

  return (
    <Box>
      <Grid gap={{ base: "6", md: "32px" }}>
        <GridItem>
          <Grid gap={{ base: "6", md: "32px" }} mb={6}>
            {portfolios && portfolios[0] && (
              <GridItem>
                <BaseImageCaption
                  src={portfolios[0].showcaseImage?.url || ""}
                  title={portfolios[0].title || ""}
                  caption={portfolios[0].title || ""}
                  year={portfolios[0].year || ""}
                  height="510px"
                />
              </GridItem>
            )}
          </Grid>
          <Grid gridTemplateColumns={"50% 1fr"} gap={{ base: "6", md: "12" }}>
            {portfolios &&
              portfolios.slice(1).map((p, index: number) => (
                <GridItem key={index}>
                  <BaseImageCaption
                    src={p.showcaseImage?.url || ""}
                    title={p.title || ""}
                    caption={p.title || ""}
                    year={p.year || ""}
                    height="243px"
                  />
                </GridItem>
              ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
