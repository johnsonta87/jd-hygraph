"use client";
import { useGetPortfolioCategoriesQuery as GetPortfolioCategoriesQuery } from "@/__generated__/graphql";
import {
  Box,
  Grid,
  GridItem,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { PortfolioList } from "..";

type Props = {
  variant: "primary" | "secondary";
};

const PortfolioSwitcher = ({ variant }: Props) => {
  const { data } = GetPortfolioCategoriesQuery();
  const { portfolioCategories } = data || {};
  const [category, setCategory] = useState(
    (portfolioCategories && portfolioCategories[0].name) || "Product design"
  );

  return (
    <Box>
      {variant === "primary" ? (
        <Grid
          templateAreas={`"side main"`}
          gridTemplateColumns={"260px 1fr"}
          gap={{ base: "6", md: "12" }}
        >
          <GridItem area={"side"}>
            <Text fontSize="4xl" mb="8">
              Portfolio
            </Text>

            <Tabs>
              <TabList border="none" flexDirection="column" w={300}>
                {portfolioCategories?.map((category) => (
                  <Tab
                    key={category.id}
                    border="none"
                    as="button"
                    textTransform="uppercase"
                    onClick={() => setCategory(category.name)}
                  >
                    {category.name}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </GridItem>

          <GridItem area={"main"}>
            <PortfolioList variant={variant} category={category} />
          </GridItem>
        </Grid>
      ) : (
        <>
          <Text fontSize="4xl" mb="8">
            Portfolio
          </Text>

          <PortfolioList variant={variant} category={category} />
        </>
      )}
    </Box>
  );
};

export default PortfolioSwitcher;
