import { Grid, GridItem, Text } from "@chakra-ui/react";
import { ContentType } from "../../types/";

type Props = {
  heading: boolean;
  content: ContentType;
};

export function TextBlock({ heading, content }: Props) {
  if (!content) return;

  return (
    <Grid
      templateAreas={`"textSide textMain"`}
      gridTemplateColumns={"195px 1fr"}
      gap={{ base: "6", md: "65px" }}
    >
      <GridItem area={"textSide"}>
        {heading && (
          <Text fontSize="14px" textTransform="uppercase">
            {heading}
          </Text>
        )}
      </GridItem>
      <GridItem area={"textMain"}>
        <Text mb="60px" dangerouslySetInnerHTML={{ __html: content.html }} />
      </GridItem>
    </Grid>
  );
}
