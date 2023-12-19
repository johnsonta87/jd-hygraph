"use client";
import { useGetPortfoliosByCategoryQuery as GetPortfoliosByCategoryQuery } from "@/__generated__/graphql";
import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import BaseImageCaption from "../Image/BaseImageCaption";

type Props = {
  category: string;
  variant: "primary" | "secondary";
};

export function PortfolioList({ category, variant }: Props) {
  const { loading, data } = GetPortfoliosByCategoryQuery({
    variables: { portfolioCategory: category },
  });
  const { portfolios } = data || {};

  if (loading) return <Spinner size="xl" />;

  if (variant === "secondary")
    return (
      <Box>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "50% 1fr" }}
          gap={{ base: "6", md: "12" }}
        >
          {portfolios &&
            portfolios.map((p, index: number) => (
              <GridItem key={index}>
                <BaseImageCaption
                  src={p.showcaseImage?.url || ""}
                  title={p.title || ""}
                  caption={p.title || ""}
                  year={p.year || ""}
                  category={p.portfolioCategory?.name || ""}
                />
              </GridItem>
            ))}
        </Grid>
      </Box>
    );

  return (
    <Box>
      <Grid gap={{ base: "6", md: "12" }}>
        <GridItem>
          <Grid gap={{ base: "6", md: "12" }} mb={6}>
            {portfolios && portfolios[0] && (
              <GridItem>
                <BaseImageCaption
                  src={portfolios[0].showcaseImage?.url || ""}
                  title={portfolios[0].title || ""}
                  caption={portfolios[0].title || ""}
                  year={portfolios[0].year || ""}
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
                  />
                </GridItem>
              ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
