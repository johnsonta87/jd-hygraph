import { Link } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  isLast?: boolean;
  to?: string;
  isActive?: boolean;
};

const MenuItem = ({ children, isLast, to = "/", isActive, ...rest }: Props) => {
  return (
    <Link
      as="a"
      href={to}
      display="block"
      textDecoration={isActive ? "underline" : ""}
      fontWeight={isActive ? "400" : "300"}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
