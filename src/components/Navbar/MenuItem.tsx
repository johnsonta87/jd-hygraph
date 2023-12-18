import { Link } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  isLast?: boolean;
  to?: string;
};

const MenuItem = ({ children, isLast, to = "/", ...rest }: Props) => {
  return (
    <Link as="a" href={to} display="block" {...rest}>
      {children}
    </Link>
  );
};

export default MenuItem;
