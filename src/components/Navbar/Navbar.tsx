"use client";
import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BaseLogo from "../Image/BaseLogo";
import { MenuLinks } from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import { NavbarContainer } from "./NavbarContainer";

type Props = {};

export const Navbar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();
  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  return (
    <NavbarContainer {...props}>
      {router !== "/" ? (
        <BaseLogo text="Jenny Diep" />
      ) : (
        <Box
          opacity={scrollPosition >= 400 ? 100 : 0}
          transition="opacity 300ms linear"
        >
          <BaseLogo text="Jenny Diep" />
        </Box>
      )}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
