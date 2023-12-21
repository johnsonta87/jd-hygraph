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
      templateAreas={`"side main"`}
      gridTemplateColumns={"260px 1fr"}
      gap={{ base: "6", md: "12" }}
    >
      <GridItem area={"side"}>
        {heading && (
          <Text as="h3" fontSize="lg">
            {heading}
          </Text>
        )}
      </GridItem>

      <GridItem area={"main"}>
        <Flex w="100%" gap={32} justifyContent="end">
          {/* Product design list */}
          <Box>
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
          <Box>
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
