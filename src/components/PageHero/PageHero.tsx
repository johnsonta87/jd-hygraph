import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  variant: "default" | "slim";
  title: string;
  subtitle: HTMLElement | string;
  image: string;
};

export function PageHero({ title, subtitle, image }: Props) {
  return (
    <Flex w="100%" align="center" justify="space-between" gap={12}>
      <Box flexBasis="50%">
        {title && <Text fontSize="2xl">{title}</Text>}
        {subtitle && (
          <Text fontSize="md" dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
      </Box>
      <Box>{image && title && <Image src={image} alt={title} />}</Box>
    </Flex>
  );
}
