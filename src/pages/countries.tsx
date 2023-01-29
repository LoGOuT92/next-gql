import * as React from "react";
import { useGetCountriesQuery } from "types-and-hooks";
import NextLink from "next/link";
import Layout from "@/Components/Layout";

interface ICountriesProps {}

const Countries: React.FunctionComponent<ICountriesProps> = (props) => {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>Error! ${error.message}</Layout>;
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data?.countries?.map((country) => (
          <NextLink
            href="/countries/[code]"
            as={`/countries/${country.code}`}
            key={country.code}
          >
            <div
              key={country.code}
              style={{
                display: "flex",
                width: "250px",
                height: "50px",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid yellow",
                gap: "5px",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <span>{country.code}</span>
              <span>{country.name}</span>
            </div>
          </NextLink>
        ))}
      </div>
    </Layout>
  );
};

export default Countries;
