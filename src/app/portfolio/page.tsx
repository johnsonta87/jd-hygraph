"use client";
import { useGetPortfolioCategoriesQuery as GetPortfolioCategoriesQuery } from "@/__generated__/graphql";
import { PortfolioList } from "@/components";
import {
  Flex,
  Spinner,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {};

const PortfolioIndex = (props: Props) => {
  const { loading, data } = GetPortfolioCategoriesQuery();
  const { portfolioCategories } = data || {};
  const [category, setCategory] = useState(
    (portfolioCategories && portfolioCategories[0].name) || "Product design"
  );

  if (loading)
    return (
      <Flex
        w="100%"
        h="calc(100vh - 335px)"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" mx="auto" />
      </Flex>
    );

  return (
    <>
      <Text as="h1" mb="8">
        Portfolio
      </Text>

      <Tabs align="center" variant="line">
        <TabList borderColor="clay">
          {portfolioCategories?.map((category) => (
            <Tab
              key={category.id}
              border="none"
              as="button"
              textTransform="uppercase"
              fontSize="1.313rem"
              letterSpacing="5px"
              _selected={{ color: "clay" }}
              onClick={() => setCategory(category.name)}
            >
              {category.name}
            </Tab>
          ))}
        </TabList>
        <TabIndicator mt="-3px" height="2px" bg="clay" borderRadius="1px" />

        <TabPanels mt={20}>
          <TabPanel p={0}>
            <PortfolioList
              variant="secondary"
              category={category}
              hideCategoryName
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PortfolioIndex;
