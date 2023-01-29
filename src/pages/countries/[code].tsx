import Layout from "@/Components/Layout";
import { NextPage } from "next";
import * as React from "react";
import { useGetSingleCountryQuery } from "types-and-hooks";

interface ICountryProps {}

const Country: NextPage<{ code: string }> = ({ code }) => {
  const { data, loading, error } = useGetSingleCountryQuery({
    variables: { ID: code },
  });
  if (loading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>Error! ${error.message}</Layout>;

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "25px",
          fontWeight: "900",
          width: "50%",
          border: "1px solid orange",
          borderRadius: "10px",
        }}
      >
        <span>{data?.country?.code}</span>
        <span>{data?.country?.name}</span>
        <span>{data?.country?.emoji}</span>
        <span>{data?.country?.languages[0]?.name}</span>
      </div>
    </Layout>
  );
};

Country.getInitialProps = ({ query }) => {
  return {
    code: query.code as string,
  };
};

export default Country;
