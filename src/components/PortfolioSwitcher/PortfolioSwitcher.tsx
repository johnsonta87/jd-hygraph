"use client";
import { useGetPortfolioCategoriesQuery as GetPortfolioCategoriesQuery } from "@/__generated__/graphql";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { PortfolioList } from "..";

type PortfolioCategoriesType = {
  id: string;
  name: string;
};

type Props = {
  variant: "primary" | "secondary";
};

type PrimaryVariantProps = {
  list: PortfolioCategoriesType[];
  variant: "primary" | "secondary";
  category: string;
  setCategory: (category: string) => void;
};

const PrimaryVariant = ({
  list,
  variant,
  category,
  setCategory,
}: PrimaryVariantProps) => {
  return (
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
            {list?.map((listItem) => (
              <Tab
                key={listItem.id}
                border="none"
                w="auto"
                flexBasis="auto"
                as="button"
                textTransform="uppercase"
                textAlign="left"
                letterSpacing="5px"
                justifyContent="flex-start"
                p="0"
                color="black"
                onClick={() => setCategory(listItem.name)}
              >
                <Box
                  as="span"
                  w="12px"
                  h="32px"
                  mr={6}
                  bg={`${category === listItem.name ? "clay" : "transparent"}`}
                  borderWidth="1px"
                  borderColor="clay"
                />
                {listItem.name}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </GridItem>

      <GridItem area={"main"}>
        <PortfolioList variant={variant} category={category} />
      </GridItem>
    </Grid>
  );
};

const PortfolioSwitcher = ({ variant }: Props) => {
  const { loading, data } = GetPortfolioCategoriesQuery();
  const { portfolioCategories } = data || {};
  const [category, setCategory] = useState("All");

  if (loading)
    return (
      <Flex w="100%" justifyContent="center" alignItems="center">
        <Spinner size="xl" mx="auto" />
      </Flex>
    );

  return (
    <Box>
      {variant === "primary" ? (
        <PrimaryVariant
          list={portfolioCategories as PortfolioCategoriesType[]}
          variant={variant}
          category={category}
          setCategory={setCategory}
        />
      ) : (
        <>
          <Flex
            mt="46px"
            w="100%"
            align="center"
            justify="space-between"
            flexDirection={{ base: "column", md: "row" }}
            gap={12}
          >
            <Text as="h2" mb="8">
              Portfolio
            </Text>
            <Box w="100%" mb="54px" flexBasis="50%">
              <Tabs>
                <TabList borderColor="clay">
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
                      {listItem.name}
                    </Tab>
                  ))}
                </TabList>
                <TabIndicator mt="-4px" height="4px" bg="clay" />
              </Tabs>
            </Box>
          </Flex>

          <PortfolioList variant={variant} category={category} />
        </>
      )}
    </Box>
  );
};

export default PortfolioSwitcher;
