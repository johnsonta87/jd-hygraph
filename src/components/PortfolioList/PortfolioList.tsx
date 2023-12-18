"use client"
import { useGetAllPortfoliosQuery as GetAllPortfolio, Portfolio } from "@/__generated__/graphql";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import BaseImageCaption from "../Image/BaseImageCaption";
import { Spinner } from '@chakra-ui/react'

type Props = {
  variant: "default" | "twoColumns";
};

export function PortfolioList({ variant }: Props) {
  const { loading, data } = GetAllPortfolio();
  const portfolios = data?.portfolios;

  if(loading) return <Spinner size='xl' />;


  if(variant === "twoColumns") return (
    <Box>
      <Text fontSize="4xl" mb="8">Portfolio</Text>

    <Grid
    gridTemplateColumns={{ base: "1fr", md: "50% 1fr"}}
    gap={{ base: "6", md: "12" }}>

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
  )

  return (
    <Box>

    <Grid
      templateAreas={`"side main"`}
      gridTemplateColumns={"260px 1fr"}
    gap={{ base: "6", md: "12" }}>

<GridItem area={"side"}>
      <Text fontSize="4xl" mb="8">Portfolio</Text>
      </GridItem>
<GridItem area={"main"}>

<Grid gap={{ base: "6", md: "12" }}>
{portfolios &&
        portfolios.map((p, index: number) => (
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
