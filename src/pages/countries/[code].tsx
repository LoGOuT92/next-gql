import Layout from "@/Components/Layout";
import { useState, useEffect } from "react";
import { NextPage } from "next";
import { GetSingleCountryQuery } from "types-and-hooks";
import { graphRequestFetcher } from "../graphRequestFetcher";

interface ICountryProps {}

const Country: NextPage<{ code: string }> = ({ code }) => {
  const [data, setData] = useState<GetSingleCountryQuery>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // const { data, loading, error } = useGetSingleCountryQuery({
  //   variables: { ID: code },
  // });

  const fetchCountry = async () => {
    try {
      const sdk = await graphRequestFetcher();
      const { data } = await sdk.getSingleCountry({ ID: code });
      setData(data);
    } catch (error: any) {
      console.error(JSON.stringify(error, undefined, 2));
      setError(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCountry();
  }, []);

  if (loading) return <Layout>Loading...</Layout>;
  if (error) return <Layout>Error! ${error}</Layout>;

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
        <span>{data.country?.code}</span>
        <span>{data.country?.name}</span>
        <span>{data.country?.emoji}</span>
        <span>{data.country?.languages[0]?.name}</span>
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
