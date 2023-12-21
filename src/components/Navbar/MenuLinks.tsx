import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

type Props = { isOpen?: boolean };

export function MenuLinks({ isOpen, ...props }: Props) {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        gap="56px"
        fontSize="1.125rem"
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About me</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </Stack>
    </Box>
  );
}
