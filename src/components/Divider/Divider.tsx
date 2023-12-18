import { Box } from "@chakra-ui/react";

type Props = {};

export function Divider(props: Props) {
  return <Box w="100%" h="1px" bg="black" {...props} />;
}
