import { RichText } from "@/__generated__/graphql";
import { Grid, GridItem, Text } from "@chakra-ui/react";

type Props = {
  heading: boolean;
  content: RichText;
};

export function TextBlock({ heading, content }: Props) {
  if (!content) return;

  return (
    <Grid
      display={{ base: "flex", md: "grid" }}
      flexDirection={{ base: "column", md: "row" }}
      templateAreas={`"textSide textMain"`}
      gridTemplateColumns={{ base: "1fr", md: "195px 1fr" }}
      gap={{ base: "6", md: "65px" }}
    >
      <GridItem area={"textSide"}>
        {heading && (
          <Text
            fontSize="14px"
            lineHeight="21px"
            maxW="75%"
            textTransform="uppercase"
          >
            {heading}
          </Text>
        )}
      </GridItem>
      <GridItem area={"textMain"}>
        <Text
          as="div"
          mb="60px"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </GridItem>
    </Grid>
  );
}
