import { useState, useEffect } from "react";
import { useGetCountriesQuery } from "types-and-hooks";
import NextLink from "next/link";
import Layout from "@/Components/Layout";
import { graphRequestFetcher } from "../utils/graphRequestFetcher";

interface ICountriesProps {
  __typename?: "Country" | undefined;
  code: string;
  name: string;
}
[];

const Countries: React.FunctionComponent<ICountriesProps> = (props) => {
  const [countries, setCountries] = useState<ICountriesProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  // const { data, loading, error } = useGetCountriesQuery();

  const fetchCountries = async () => {
    try {
      const sdk = await graphRequestFetcher();
      const { data } = await sdk.getCountries();
      setCountries(data.countries);
    } catch (error: any) {
      console.error(JSON.stringify(error, undefined, 2));
      setError(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>Error! {error}</Layout>;
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
        {countries.map((country) => (
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
