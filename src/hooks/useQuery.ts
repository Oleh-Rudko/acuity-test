import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  useQuery,
} from "@apollo/client";

export const useQueryGraphql = <
  TData,
  TVariables extends OperationVariables = OperationVariables
>(
  gqlQuery: DocumentNode,
  options: QueryHookOptions<TData, TVariables>
): QueryResult<TData, TVariables> => {
  return useQuery(gqlQuery, options);
};
