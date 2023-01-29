import * as React from "react";
import NextLink from "next/link";

interface INavLinkProps {
  name: string;
  href: string;
  as: string;
}

const NavLink: React.FunctionComponent<INavLinkProps> = ({
  name,
  href,
  as,
}) => {
  return (
    <NextLink
      href={`/${href}`}
      as={`/${as}`}
      style={{
        border: "1px solid red",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      {name}
    </NextLink>
  );
};

export default NavLink;
