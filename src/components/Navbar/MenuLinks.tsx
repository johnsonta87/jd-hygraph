import { Box, Stack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

type Props = { isOpen?: boolean };

export function MenuLinks({ isOpen, ...props }: Props) {
  const router = usePathname();

  return (
    <Box
      display={{ base: isOpen ? "flex" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        w="100%"
        justify={["center", "center", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        gap={{ base: "16px", md: "56px" }}
        fontSize="1.125rem"
        pt={[4, 4, 0, 0]}
      >
        <MenuItem isActive={router === "/"} to="/">
          Home
        </MenuItem>
        <MenuItem isActive={router === "/about"} to="/about">
          About me
        </MenuItem>
        <MenuItem isActive={router === "/contact"} to="/contact">
          Contact
        </MenuItem>
      </Stack>
    </Box>
  );
}
