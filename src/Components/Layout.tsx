import * as React from "react";
import NavBar from "./NavBar";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        background:
          "linear-gradient(0deg, rgba(152,46,120) 0%, rgba(21,31,44) 47%)",
      }}
    >
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
