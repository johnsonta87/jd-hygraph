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

  console.log(pageContent);
  return (
    <Container maxW="1274px">
      <Grid
        templateAreas={`"side main"`}
        gridTemplateColumns={"260px 1fr"}
        gap={{ base: "6", md: "65px" }}
      >
        <GridItem area={"side"}>
          {year && <Text>{year}</Text>}
          <Divider my="1em" />
          <Text>Role</Text>
          {overview && <Text>{overview.role}</Text>}
          <Divider my="1em" />
          {overview && <Text>{overview.skillsMethods}</Text>}
        </GridItem>
        <GridItem area={"main"}>
          <Text as="h1" mb="58px">
            {title}
          </Text>

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
