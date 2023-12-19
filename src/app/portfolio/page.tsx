"use client";
import { PortfolioList } from "@/components";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  variant: "primary" | "secondary";
};

const PortfolioIndex = (props: Props) => {
  const [category, setCategory] = useState("Product design");

  return (
    <>
      <Text as="h1" mb="8">
        Portfolio
      </Text>

      <Tabs align="center" variant="line">
        <TabList borderColor="clay">
          <Tab
            _selected={{ color: "clay" }}
            onClick={() => {
              setCategory("Product design");
            }}
          >
            Product design
          </Tab>
          <Tab
            _selected={{ color: "clay" }}
            onClick={() => {
              setCategory("Branding design");
            }}
          >
            Branding design
          </Tab>
        </TabList>
        <TabIndicator mt="-3px" height="2px" bg="clay" borderRadius="1px" />

        <TabPanels mt={20}>
          <TabPanel>
            <PortfolioList variant="secondary" category={category} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PortfolioIndex;
