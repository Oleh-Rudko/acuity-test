import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const secret = process.env.REACT_APP_HASURA_SECRET ?? "";
const httpLink = new HttpLink({
  uri: "https://acuity-test.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": secret,
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://acuity-test.hasura.app/v1/graphql",
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
