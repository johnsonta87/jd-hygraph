"use client";
import {
  useGetAllPortfoliosQuery as GetAllPortfoliosQuery,
  useGetPortfolioCategoriesQuery as GetPortfolioCategoriesQuery,
} from "@/__generated__/graphql";
import {
  Box,
  Flex,
  Spinner,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { PortfolioGrid, allPortfoliosType } from "..";

type Props = {};

const PortfolioSwitcher = (props: Props) => {
  const { loading: allPortfoliosLoading, data: allPortfolios } =
    GetAllPortfoliosQuery();
  const { loading, data } = GetPortfolioCategoriesQuery();
  const { portfolioCategories } = data || {};
  const { portfolios } = allPortfolios || {};
  const [category, setCategory] = useState("All");

  if (loading || allPortfoliosLoading) return <Spinner size="xl" mx="auto" />;

  return (
    <Box>
      <Flex
        mt="46px"
        w="100%"
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "23px", md: 12 }}
      >
        <Text as="h2" mb={{ base: "24px", md: "40px" }} flexBasis="50%">
          Portfolio
        </Text>
        <Box w="100%" mb="54px" flexBasis="50%">
          <Tabs>
            <TabList
              borderColor="clay"
              display="flex"
              justifyContent="space-between"
            >
              <Tab
                as="button"
                textTransform="uppercase"
                letterSpacing="5px"
                _selected={{ color: "clay" }}
                onClick={() => setCategory("All")}
              >
                All
              </Tab>
              {portfolioCategories?.map((listItem) => (
                <Tab
                  key={listItem.id}
                  as="button"
                  textTransform="uppercase"
                  letterSpacing="5px"
                  _selected={{ color: "clay" }}
                  onClick={() => setCategory(listItem.name)}
                >
                  {listItem.name}{" "}
                  <Box ml={2} display={{ base: "none", xl: "block" }}>
                    design
                  </Box>
                </Tab>
              ))}
            </TabList>
            <TabIndicator mt="-4px" height="4px" bg="clay" />
          </Tabs>
        </Box>
      </Flex>

      <PortfolioGrid
        list={portfolios as allPortfoliosType[]}
        category={category}
      />
    </Box>
  );
};

export default PortfolioSwitcher;
