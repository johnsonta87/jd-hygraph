import { Box } from "@chakra-ui/react";
import { Twirl as Hamburger } from "hamburger-react";

type Props = {
  toggle: () => void;
  isOpen: boolean;
};

const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      <Hamburger duration={0.4} toggled={isOpen} toggle={toggle} color="#000" />
    </Box>
  );
};

export default MenuToggle;
