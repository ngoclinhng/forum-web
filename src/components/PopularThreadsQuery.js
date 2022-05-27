import React from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { THREAD_DETAILS, THREAD_POST_COUNT } from './fragments';

const POPULAR_THREADS_QUERY = gql`
  query GetMostPopularThreads($count: Int!) {
    mostPopularThreads(count: $count) {
      ...ThreadDetails,
      ...ThreadPostCount
    }
  }
  ${THREAD_DETAILS}
  ${THREAD_POST_COUNT}
`;

function PopularThreadsQuery({ count, children, ...otherQueryProps }) {
  const {
    loading,
    error,
    data,
    ...otherQueryResults
  } = useQuery(POPULAR_THREADS_QUERY, {
    variables: { count },
    ...otherQueryProps
  });

  if (loading) return 'Loading...';
  if (error) return 'Error...';
  return children(data.mostPopularThreads, otherQueryResults);
}

PopularThreadsQuery.propTypes = {
  count: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired
};

export default PopularThreadsQuery;
