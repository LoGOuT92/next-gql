import "@/styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export const URL = "https://countries.trevorblades.com/";

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
  resolvers: {},
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
