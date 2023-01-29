import Layout from "@/Components/Layout";
import { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import * as React from "react";
import NextLink from "next/link";

interface IProfileProps {}

const COUNTRY_CODE = "PL";

const GET_COUNTRY = gql`
  query getSingleCountry($ID: ID!) {
    country(code: $ID) {
      code
      name
    }
  }
`;

function Profile({ ID }: { ID: string }) {
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { ID: COUNTRY_CODE },
  });

  if (loading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>Error! ${error.message}</Layout>;

  return (
    <Layout>
      <NextLink
        href="/countries/[code]"
        as={`/countries/${COUNTRY_CODE}`}
        style={{ width: "50%" }}
      >
        <label
          style={{
            display: "flex",
            gap: "10px",
            border: "1px solid green",
            justifyContent: "space-evenly",
            borderRadius: "10px",
            marginTop: "20px",
            padding: "25px",
            fontWeight: "900",
            cursor: "pointer",
          }}
        >
          <span>{data.country.code}</span>
          <span>{data.country.name}</span>
        </label>
      </NextLink>
    </Layout>
  );
}

export default Profile;
