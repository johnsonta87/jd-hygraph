"use client"
import { Box, Flex, Grid, GridItem, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { PortfolioList } from "..";
import { useState } from "react";

type Props = {
  variant: "primary" | "secondary";
};

const PortfolioSwitcher = ({ variant }: Props) => {
  const [category, setCategory] = useState("Product design");

  return (
    <Box>
      {variant === "primary" ? (
        <Grid
        templateAreas={`"side main"`}
        gridTemplateColumns={"260px 1fr"}
        gap={{ base: "6", md: "12" }}>
          <GridItem area={"side"}>
            <Text fontSize="4xl" mb="8">
              Portfolio
            </Text>

            <Tabs>
              <TabList border="none" flexDirection="column" w={300}>
                <Tab border="none" as="button" textTransform="uppercase" onClick={() => setCategory("Product design")}>Product design</Tab>
                <Tab border="none" as="button" textTransform="uppercase" onClick={() => setCategory("Branding design")}>Branding design</Tab>
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
