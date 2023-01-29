import Layout from "@/Components/Layout";
import NavLink from "@/Components/NavLinks";
import * as React from "react";

interface ICustom404Props {}

const Custom404: React.FunctionComponent<ICustom404Props> = (props) => {
  return (
    <Layout>
      <NavLink name="Page Not Found" href="" as="" />
    </Layout>
  );
};

export default Custom404;
