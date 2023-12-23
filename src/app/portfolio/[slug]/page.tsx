"use client";

import { useGetPortoflioQuery as GetPortoflioQuery } from "@/__generated__/graphql";
import { Quote, TextBlock } from "@/components";
import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const { loading, data } = GetPortoflioQuery({
    variables: {
      slug: params.slug.toLowerCase(),
    },
  });
  const { portfolio } = data || {};
  const { year, title, overview, showcaseImage, introduction, pageContent } =
    portfolio || {};

  if (loading)
    return (
      <Container maxW="1274px">
        <Spinner size="xl" />
      </Container>
    );
  if (!portfolio) {
    return notFound();
  }

  return (
    <Container maxW="1274px">
      <Grid
        templateAreas={`"headingSide headingMain"`}
        gridTemplateColumns={"260px 1fr"}
        gap={{ base: "6", md: "65px" }}
      >
        <GridItem area={"headingSide"}>
          {year && <Text mt="20px">{year}</Text>}
        </GridItem>

        <GridItem area={"headingMain"}>
          <Text as="h1" mb="58px">
            {title}
          </Text>
        </GridItem>
      </Grid>

      <Grid
        templateAreas={`"side main"`}
        gridTemplateColumns={"260px 1fr"}
        gap={{ base: "6", md: "65px" }}
      >
        {overview && (
          <GridItem area={"side"}>
            {overview.role && (
              <>
                <Divider mb="1em" />
                <Text fontSize="14px" textTransform="uppercase">
                  Role
                </Text>
                <Text>{overview.role}</Text>
              </>
            )}
            {overview.output && (
              <>
                <Divider mb="1em" />
                <Text fontSize="14px" textTransform="uppercase">
                  Output
                </Text>
                <Text>{overview.output}</Text>
              </>
            )}
            {overview.skillsMethods && (
              <>
                <Divider my="1em" />
                <Text fontSize="14px" textTransform="uppercase">
                  skills & methods
                </Text>
                <Text>{overview.skillsMethods}</Text>
              </>
            )}
          </GridItem>
        )}
        <GridItem area={"main"}>
          {showcaseImage && (
            <Image
              width="100%"
              mb="60px"
              src={showcaseImage.url}
              alt={title || ""}
            />
          )}

          {introduction && (
            <Box
              fontFamily="Juana"
              fontSize="24px"
              lineHeight="27px"
              mb="60px"
              maxWidth={{ base: "100%", md: "60%" }}
              dangerouslySetInnerHTML={{ __html: introduction.html }}
            />
          )}

          {pageContent?.map((content) => (
            <>
              {content?.__typename === "TextBlock" && (
                <TextBlock
                  heading={content.heading}
                  content={content.content}
                />
              )}

              {content?.__typename === "Quote" && (
                <Quote content={content.quoteText} />
              )}

              {content?.__typename === "FullWidthImage" && (
                <Image
                  width="100%"
                  mb="50px"
                  src={content.image.url}
                  alt={content.fileName || ""}
                />
              )}

              {content?.__typename === "Divider" && <Divider mb="60px" />}
            </>
          ))}
        </GridItem>
      </Grid>
    </Container>
  );
  3;
}
