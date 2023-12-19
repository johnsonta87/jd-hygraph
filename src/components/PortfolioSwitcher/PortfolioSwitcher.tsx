"use client"
import { Box, Flex, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { PortfolioList } from "..";
import { useState } from "react";

type Props = {
  variant: "default" | "twoColumns";
};

const PortfolioSwitcher = ({ variant }: Props) => {
  const [category, setCategory] = useState("Product design");

  return (
    <Box>
      <Tabs>
        <TabList border="none" flexDirection="column" w={300}>
          <Tab border="none" as="button" textTransform="uppercase" onClick={() => setCategory("Product design")}>Product design</Tab>
          <Tab border="none" as="button" textTransform="uppercase" onClick={() => setCategory("Branding design")}>Branding design</Tab>
        </TabList>
      </Tabs>

      <PortfolioList variant={variant} category={category} />
    </Box>
  );
};

export default PortfolioSwitcher;
