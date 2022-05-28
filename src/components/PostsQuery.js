import React from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { POST_DETAILS  } from './fragments';
import Error from './ui/Error';

const POSTS_QUERY = gql`
  query GetPosts($threadId: ID!, $first: Int!, $after: String) {
    node(id: $threadId) {
      ... on Thread {
        id
        posts(first: $first, after: $after) {
          edges {
            node {
              ...PostDetails
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }
  ${POST_DETAILS}
`;


function PostsQuery({ threadId, first, after, children, ...otherProps }) {
  const {loading, error, data, ...others} = useQuery(POSTS_QUERY, {
    variables: { threadId, first, after },
    ...otherProps
  });

  if (loading) return 'Loading...';
  if (error) return <Error error={error} />;
  return children(data.node.posts, others);
}

PostsQuery.propTypes = {
  threadId: PropTypes.string.isRequired,
  first: PropTypes.number.isRequired,
  after: PropTypes.string,
  children: PropTypes.func.isRequired
};

export default PostsQuery;
export { POSTS_QUERY };
