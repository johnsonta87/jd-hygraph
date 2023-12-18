import {
  Box,
  Flex,
  Grid,
  Image,
  Link,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
type TabsProps = {
  title: string[];
  items: any[];
  builderBlock: any;
};

type Props = {
  tabs: TabsProps[];
  align?: "start" | "center" | "end";
  variant?:
    | "line"
    | "enclosed"
    | "enclosed-colored"
    | "soft-rounded"
    | "solid-rounded"
    | "unstyled";
};

export function BaseTabs({ tabs, align, variant, ...props }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  console.log(tabs);
  if (!tabs) return;

  return (
    <Tabs align={align || "start"} variant={variant || "line"} {...props}>
      <TabList borderColor="clay">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            _selected={{ color: "clay" }}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabIndicator mt="-3px" height="2px" bg="clay" borderRadius="1px" />

      <TabPanels mt={20}>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {/* @ts-ignore */}
              {tab.items?.map((item: any, index: number) => (
                <Box key={index} as="div">
                  <Link href={item.portfolio.value?.data.link}>
                    <Image
                      src={item.portfolio.value?.data.image}
                      alt={item.portfolio.value?.data.heading}
                    />

                    <Box as="div" fontSize="xl" fontWeight="bold">
                      <Flex
                        align="center"
                        justify="space-between"
                        wrap="wrap"
                        w="100%"
                      >
                        <Text>{item.portfolio.value?.data.heading}</Text>
                        <Text>{item.portfolio.value?.data.year}</Text>
                      </Flex>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Grid>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
