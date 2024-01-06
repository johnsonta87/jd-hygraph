"use client";

import { useGetPortfoliosByCategoryNameQuery as GetPortfoliosByCategoryNameQuery } from "@/__generated__/graphql";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  enable: boolean;
  currentPortfolio: string;
};

export function Pagination({ enable, currentPortfolio }: Props) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const { loading, data } = GetPortfoliosByCategoryNameQuery({
    variables: {
      category: currentCategory || "",
    },
  });
  const { portfolios } = data || {};
  const itemIndex =
    portfolios?.findIndex((p) => p.slug === currentPortfolio) || 0;
  const prev = portfolios && portfolios[itemIndex - 1];
  const next = portfolios && portfolios[itemIndex + 1];

  if (!enable || !portfolios) return;

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

  return (
    <Flex
      w="100%"
      flexDirection={{ base: "column", lg: "row" }}
      align="center"
      justify="space-between"
      gap={{ base: "32px", md: "60px" }}
    >
      {prev && (
        <Link href={`/portfolio/${prev.slug}?category=${currentCategory}`}>
          <Flex align="center">
            <Image src="/svgs/chevron-left.svg" alt="Previous Icon" />
            <Box>
              <Text fontFamily="Juana" fontSize={{ base: "18px", md: "24px" }}>
                Previous
              </Text>
              {prev.title && (
                <Text display={{ base: "none", md: "block" }} fontSize="18px">
                  {prev.title}
                </Text>
              )}
            </Box>
          </Flex>
        </Link>
      )}
      {next && (
        <Link href={`/portfolio/${next.slug}?category=${currentCategory}`}>
          <Flex align="center">
            <Box>
              <Text fontFamily="Juana" fontSize={{ base: "18px", md: "24px" }}>
                Next
              </Text>
              {next.title && (
                <Text display={{ base: "none", md: "block" }} fontSize="18px">
                  {next.title}
                </Text>
              )}
            </Box>
            <Image src="/svgs/chevron-right.svg" alt="Next Icon" />
          </Flex>
        </Link>
      )}
    </Flex>
  );
}
