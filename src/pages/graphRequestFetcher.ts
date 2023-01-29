import { GraphQLClient } from "graphql-request";
import { getSdk } from "path/to/file";
import {URL} from './_app';


export const graphRequestFetcher = async () => {
    const client = new GraphQLClient(URL);
    const sdk = getSdk(client);
    return sdk
  };