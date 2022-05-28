import React from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { THREAD_DETAILS, THREAD_POST_COUNT } from './fragments';
import Error from './ui/Error';

const THREAD_QUERY = gql`
  query GetThread($id: ID!) {
    node(id: $id) {
      __typename
      ... on Thread {
        ...ThreadDetails
        ...ThreadPostCount
      }
    }
  }
  ${THREAD_DETAILS}
  ${THREAD_POST_COUNT}
`;


function ThreadQuery({ id, children, ...otherProps }) {
  const {loading, error, data, ...others} = useQuery(THREAD_QUERY, {
    variables: { id },
    ...otherProps
  });

  if (loading) return 'Loading...';
  if (error) return <Error error={error} />;
  return children(data.node, others);
}

ThreadQuery.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default ThreadQuery;
