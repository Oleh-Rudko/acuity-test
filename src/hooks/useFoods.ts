import { useQueryGraphql } from "./useQuery";
import { QueryResult, gql } from "@apollo/client";

/*
 * Here is the schema for the data we are fetching
 * id: Int!
 * name: String!
 * country: Number
 * spicy: Boolean!
 * created_at: Date
 * updated_at: Date
 */

// Define the type of the data we are fetching
type Food = any;
type TData = {
  foods: Food[];
};
type TVariables = {};
type TUseFoods = () => QueryResult<TData, TVariables> & { payload: Food[] };

export const useFoods: TUseFoods = () => {
  const result = useQueryGraphql<TData, TVariables>(
    gql`
      query {
        foods {
          id
          name
          country
          spicy
          created_at
          updated_at
        }
      }
    `,
    { variables: {} }
  );

  if (result.error) console.error(result.error);

  return {
    ...result,
    payload: result?.data?.foods ?? [],
  };
};

