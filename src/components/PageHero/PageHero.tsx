import { useDetectMobile } from "@/hooks/useDetectMobile";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import BaseImage from "../Image/BaseImage";

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
  const isMobile = useDetectMobile();

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
          flexDirection="row"
          gap={{ base: "1em", md: "19px" }}
        >
          <Box w="100%" flexBasis={{ base: "20%", md: "50%" }}>
            <Divider mt="10px" />
          </Box>
          <Box flexBasis={{ base: "80%", md: "50%" }}>
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
    <Flex
      w="100%"
      flexDirection={{ base: "column", lg: "row" }}
      align="start"
      justify="space-between"
      gap={{ base: "32px", md: "60px" }}
    >
      <Box flexBasis="50%">
        {title && (
          <Text as="h1" mb="12px" mr={{ md: "10%" }}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text
            as="div"
            fontSize="md"
            mr={{ md: "10%" }}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
      </Box>
      {image && title && (
        <Box>
          <BaseImage src={image} title={title} enableModal={isMobile} />
        </Box>
      )}
    </Flex>
  );
}
