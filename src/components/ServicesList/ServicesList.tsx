import { Box, Flex, Grid, GridItem, List, Text } from "@chakra-ui/react";

export type ServicesListType = {
  title?: string;
  portfolioCategory?: {
    id: string;
    name: string;
  };
};

type Props = {
  list: ServicesListType[];
  heading?: string;
};

export function ServicesList({ list, heading }: Props) {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: "50% 1fr" }}
      gap={{ base: "16px", md: "32px" }}
    >
      <GridItem>
        {heading && (
          <Text as="h3" fontSize="24px">
            {heading}
          </Text>
        )}
      </GridItem>

      <GridItem>
        <Flex
          w="100%"
          flexDirection={{ base: "column", sm: "row" }}
          gap={{ base: "8", md: "32" }}
          justifyContent={{ base: "flex-start", md: "end" }}
        >
          {/* Product design list */}
          <Box flexBasis={{ base: "50%", md: "100%" }}>
            <Text fontSize="21px" textTransform="uppercase" color="clay" mb={2}>
              Product Design
            </Text>
            {list
              .filter((value) => value.portfolioCategory?.name === "Product")
              .map((s, index: number) => (
                <List key={index}>
                  <Text>{s.title}</Text>
                </List>
              ))}
          </Box>

          {/* Branding design list */}
          <Box flexBasis={{ base: "50%", md: "100%" }}>
            <Text fontSize="21px" textTransform="uppercase" color="clay" mb={2}>
              Branding Design
            </Text>
            {list
              .filter((value) => value.portfolioCategory?.name === "Branding")
              .map((s, index: number) => (
                <List key={index}>
                  <Text>{s.title}</Text>
                </List>
              ))}
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
