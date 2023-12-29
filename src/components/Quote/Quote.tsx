import { RichText } from "@/__generated__/graphql";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

type Props = {
  content: RichText;
  hideIcon?: boolean;
};

export function Quote({ content, hideIcon }: Props) {
  if (!content) return;

  return (
    <Grid
      display={{ base: "flex", md: "grid" }}
      templateAreas={`"textSide textMain"`}
      gridTemplateColumns={{ base: "1fr", md: "195px 1fr" }}
      gap={{ base: "6", md: "65px" }}
      mb={{ base: "40px", md: "60px" }}
    >
      <GridItem area={"textSide"}>
        {!hideIcon && (
          <Flex
            justifyContent={{ base: "start", md: "end" }}
            as="div"
            position="relative"
          >
            <Image
              maxWidth={{ base: "75px", md: "60px" }}
              src="/svgs/quote.svg"
              alt="Quote icon"
            />
          </Flex>
        )}
      </GridItem>
      <GridItem area={"textMain"}>
        <Box
          display="inline-block"
          fontFamily="Juana"
          fontSize={{ base: "18px", md: "24px" }}
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </GridItem>
    </Grid>
  );
}
