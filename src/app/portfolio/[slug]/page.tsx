"use client";

import {
  useGetPortoflioQuery as GetPortoflioQuery,
  Portfolio,
} from "@/__generated__/graphql";
import { OverviewItem, Quote, TextBlock } from "@/components";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const { loading, data } = GetPortoflioQuery({
    variables: {
      slug: params.slug.toLowerCase(),
    },
  });
  const { portfolio } = data || {};
  const {
    year,
    title,
    shortHeading,
    overview,
    showcaseImage,
    introduction,
    pageContent,
  } = (portfolio as Portfolio) || {};

  if (loading)
    return (
      <Flex
        w="100%"
        h="calc(100vh - 335px)"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" mx="auto" />
      </Flex>
    );
  if (!portfolio) {
    return notFound();
  }

  return (
    <Container maxW="1274px">
      <Grid
        display={{ base: "flex", lg: "grid" }}
        flexDirection={{ base: "column" }}
        templateAreas={`"headingSide headingMain"`}
        gridTemplateColumns={{ base: "1fr", lg: "260px 1fr" }}
        gap={{ base: "0", lg: "65px" }}
        marginBottom={{ base: "24px", lg: "0" }}
      >
        {year && (
          <GridItem area={"headingSide"} order={{ base: 2, lg: 1 }}>
            <Text mt="20px">{year}</Text>
          </GridItem>
        )}

        {title && (
          <GridItem area={"headingMain"} order={{ base: 1, lg: 2 }}>
            <Text as="h1" mb={{ base: "0", lg: shortHeading ? "0" : "58px" }}>
              {title}
            </Text>

            {shortHeading && (
              <Text
                as="h2"
                fontSize={{ base: "24", md: "32px" }}
                mb={{ base: "0", lg: "58px" }}
              >
                {shortHeading}
              </Text>
            )}
          </GridItem>
        )}
      </Grid>

      <Grid
        display={{ base: "block", lg: "grid" }}
        templateAreas={`"side main"`}
        gridTemplateColumns={"260px 1fr"}
        gap={{ base: "6", md: "65px" }}
      >
        {overview && (
          <GridItem
            display={{ base: "flex", lg: "block" }}
            flexDirection={{ base: "column", sm: "row" }}
            gap={{ base: "0", sm: "24px" }}
            area={"side"}
          >
            {overview.role && (
              <OverviewItem role="Role" overview={overview.role} />
            )}
            {overview.output && (
              <OverviewItem role="Output" overview={overview.output} />
            )}
            {overview.skillsMethods && (
              <OverviewItem
                role="skills & methods"
                overview={overview.skillsMethods}
              />
            )}
          </GridItem>
        )}
        <GridItem area={"main"}>
          {showcaseImage && (
            <Image
              width="100%"
              mb={{ base: "40px", md: "60px" }}
              src={showcaseImage?.url}
              alt={title || ""}
            />
          )}

          {introduction && (
            <Box
              fontFamily="Juana"
              fontSize="24px"
              lineHeight="27px"
              mb={{ base: "40px", md: "60px" }}
              maxWidth={{ base: "100%", md: "60%" }}
              dangerouslySetInnerHTML={{ __html: introduction.html }}
            />
          )}

          {pageContent?.map((content: any, index: number) => {
            const { __typename } = content;

            return (
              <Fragment key={index}>
                {__typename === "TextBlock" && (
                  <TextBlock
                    coloredHeading={content.coloredHeading}
                    heading={content.heading}
                    content={content.content}
                  />
                )}

                {__typename === "Quote" && content.quoteText && (
                  <Quote content={content.quoteText} />
                )}

                {__typename === "FullWidthImage" && content.image && (
                  <Image
                    width="100%"
                    mb={{ base: "40px", md: "60px" }}
                    src={content.image?.url}
                    alt={content?.fileName || ""}
                  />
                )}

                {__typename === "Divider" && (
                  <Divider mb={{ base: "40px", md: "60px" }} />
                )}
              </Fragment>
            );
          })}
        </GridItem>
      </Grid>
    </Container>
  );
  3;
}
