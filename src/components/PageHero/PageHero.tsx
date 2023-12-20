import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  variant: "primary" | "secondary";
  bannerImage?: string;
  title: string;
  subtitle: HTMLElement | string;
  image: string;
};

export function PageHero({
  variant,
  bannerImage,
  title,
  subtitle,
  image,
}: Props) {
  if (variant === "secondary")
    return (
      <>
        {!bannerImage && (
          <Text as="h1" mb="8">
            Jenny Diep
          </Text>
        )}

        <Flex
          w="100%"
          align="start"
          justify="space-between"
          flexDirection={{ base: "column", md: "row" }}
          gap={12}
        >
          <Box w="100%" flexBasis="50%">
            <Divider mt="10px" />
          </Box>
          <Box flexBasis="50%">
            {subtitle && (
              <Text
                as="div"
                fontSize="md"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}
          </Box>
        </Flex>
      </>
    );

  return (
    <Flex w="100%" align="center" justify="space-between" gap={12}>
      <Box flexBasis="50%">
        {title && (
          <Text as="h1" mb="12px">
            {title}
          </Text>
        )}
        {subtitle && (
          <Text
            as="div"
            fontSize="md"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </Box>
      <Box>{image && title && <Image src={image} alt={title} />}</Box>
    </Flex>
  );
}
