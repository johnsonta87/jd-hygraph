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
            <Text as="h2" mb="8">
              Portfolio
            </Text>

            <Tabs display="flex">
              <TabList
                border="none"
                flexDirection="column"
                justifyContent="start"
                gap={4}
                w={300}
              >
                {portfolioCategories?.map((pCategory) => (
                  <Tab
                    key={pCategory.id}
                    border="none"
                    w="auto"
                    flexBasis="auto"
                    as="button"
                    textTransform="uppercase"
                    textAlign="left"
                    justifyContent="flex-start"
                    p="0"
                    color="black"
                    onClick={() => setCategory(pCategory.name)}
                  >
                    <Box
                      as="span"
                      w="12px"
                      h="32px"
                      mr={2}
                      bg={`${
                        category === pCategory.name ? "clay" : "transparent"
                      }`}
                      border
                      borderWidth="1px"
                      borderColor="clay"
                    />
                    {pCategory.name}
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
