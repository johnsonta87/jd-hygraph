"use client";
import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BaseLogo from "../Image/BaseLogo";
import { MenuLinks } from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import { NavbarContainer } from "./NavbarContainer";

type Props = {};

export const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      {router !== "/" ? <BaseLogo text="Jenny Diep" /> : <Box />}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
