import { RichText } from "@/__generated__/graphql";
import { Grid, GridItem, Text } from "@chakra-ui/react";

type Props = {
  coloredHeading?: string;
  heading: boolean;
  content: RichText;
};

export function TextBlock({ coloredHeading, heading, content }: Props) {
  if (!content) return;

  return (
    <Grid
      display={{ base: "flex", md: "grid" }}
      flexDirection={{ base: "column", md: "row" }}
      templateAreas={`"textSide textMain"`}
      gridTemplateColumns={{ base: "1fr", md: "195px 1fr" }}
      gap={{ base: "6", md: "65px" }}
    >
      {heading && (
        <GridItem area={"textSide"}>
          {coloredHeading && (
            <Text
              fontSize="14px"
              lineHeight="21px"
              fontWeight="700"
              mb="0"
              color="clay"
            >
              {coloredHeading}
            </Text>
          )}
          <Text
            fontSize="14px"
            fontWeight="500"
            lineHeight="21px"
            maxW="75%"
            textTransform="uppercase"
          >
            {heading}
          </Text>
        </GridItem>
      )}
      <GridItem area={"textMain"}>
        <Text
          as="div"
          mb={{ base: "40px", md: "60px" }}
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </GridItem>
    </Grid>
  );
}
