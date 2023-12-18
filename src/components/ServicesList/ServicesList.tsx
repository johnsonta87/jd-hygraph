import { useGetAllServicesQuery as GetAllServicesQuery } from "@/__generated__/graphql";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";

type Props = {
  heading?: string;
};

export function ServicesList({ heading }: Props) {
  const { loading, error, data } = GetAllServicesQuery();
  const { services } = data || {};

  if (loading) return <Spinner size="xl" />;
  if (error) return `Error! ${error}`;

  return (
    <Grid
      templateAreas={`"side main"`}
      gridTemplateColumns={"260px 1fr"}
      gap={{ base: "6", md: "12" }}
    >
      <GridItem area={"side"}>
        {heading && <Text fontSize="lg">{heading}</Text>}
      </GridItem>

      <GridItem area={"main"}>
        <Flex w="100%" gap={6} justifyContent="end">
          {/* Product design list */}
          <Box>
            <Text textTransform="uppercase" fontSize="large" mb={2}>
              Product Design
            </Text>
            {services &&
              services
                .filter(
                  (value) => value.portfolioCategory?.name === "Product design"
                )
                .map((s, index: number) => (
                  <List key={index}>
                    <Text>/ {s.name}</Text>
                  </List>
                ))}
          </Box>

          {/* Branding design list */}
          <Box>
            <Text textTransform="uppercase" fontSize="large" mb={2}>
              Branding Design
            </Text>
            {services &&
              services
                .filter(
                  (value) => value.portfolioCategory?.name === "Branding design"
                )
                .map((s, index: number) => (
                  <List key={index}>
                    <Text>/ {s.name}</Text>
                  </List>
                ))}
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
