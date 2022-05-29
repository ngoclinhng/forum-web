import React from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { THREAD_DETAILS, THREAD_POST_COUNT } from './fragments';
import Error from './ui/Error';

const THREADS_QUERY = gql`
  query GetThreadPage($first: Int!, $after: String) {
    threads(first: $first, after: $after) {
      edges {
        node {
          ...ThreadDetails
          ...ThreadPostCount
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${THREAD_DETAILS}
  ${THREAD_POST_COUNT}
`;


function ThreadsQuery({ first, after, children, ...otherQueryProps }) {
  const {
    loading,
    error,
    data,
    ...otherQueryResults
  } = useQuery(THREADS_QUERY, {
    variables: { first, after },
    ...otherQueryProps
  });

  if (loading) return 'Loading...';
  if (error) return <Error error={error} />;
  return children(data.threads, otherQueryResults);
}

ThreadsQuery.propTypes = {
  first: PropTypes.number.isRequired,
  after: PropTypes.string,
  children: PropTypes.func.isRequired
};

export default ThreadsQuery;
export { THREADS_QUERY };
