import * as React from "react";
import NavLink from "./NavLinks";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "10px",
      }}
    >
      {/* nav links only in home page "/"?  */}

      {/* <NavLink name="Countries" href="countries " as="countries" /> */}
      <NavLink name="Home" href="" as="" />
      {/* <NavLink name="Profile" href="profile" as="profile" /> */}
    </div>
  );
};

export default NavBar;
