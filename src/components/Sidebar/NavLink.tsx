import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavLinkProps extends ChakraLinkProps {
  icon: IconType;
  children: React.ReactNode;
}

export function NavLink({icon, children, ...rest}: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}