"use client";
import { useState } from "react";
import BaseLogo from "../Image/BaseLogo";
import { MenuLinks } from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import { NavbarContainer } from "./NavbarContainer";

type Props = {};

export const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <BaseLogo text="Jenny Diep" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
