import React from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { THREAD_DETAILS, THREAD_POST_COUNT } from './fragments';

const THREAD_PAGE_QUERY = gql`
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


function ThreadPageQuery({ first, after, children, ...otherQueryProps }) {
  const {
    loading,
    error,
    data,
    ...otherQueryResults
  } = useQuery(THREAD_PAGE_QUERY, {
    variables: { first, after },
    ...otherQueryProps
  });

  if (loading) return 'Loading...';
  if (error) return 'Error!';
  return children(data.threads, otherQueryResults);
}

ThreadPageQuery.propTypes = {
  first: PropTypes.number.isRequired,
  after: PropTypes.string,
  children: PropTypes.func.isRequired
};

export default ThreadPageQuery;
