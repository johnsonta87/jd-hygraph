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
        pt={[4, 4, 0, 0]}
      >
        <MenuItem fontSize="1.125rem" to="/">
          Home
        </MenuItem>
        <MenuItem fontSize="1.125rem" to="/portfolio">
          Portfolio
        </MenuItem>
        <MenuItem fontSize="1.125rem" to="/about">
          About me
        </MenuItem>
        <MenuItem fontSize="1.125rem" to="/contact">
          Contact
        </MenuItem>
      </Stack>
    </Box>
  );
}
