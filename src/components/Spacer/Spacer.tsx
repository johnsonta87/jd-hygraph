import { Box } from "@chakra-ui/react";

type Props = {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
};

export function Spacer({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) {
  return (
    <Box mt={marginTop} mb={marginBottom} ml={marginLeft} mr={marginRight} />
  );
}
