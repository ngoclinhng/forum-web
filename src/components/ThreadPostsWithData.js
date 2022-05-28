import React from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';
import MoreButton from './ui/MoreButton';

function ThreadPostsWithData({ postConnection, fetchMore }) {
  const { edges, pageInfo } = postConnection;
  const { hasNextPage, endCursor } = pageInfo;
  const posts = edges.map(({ node }) => node );

  // No posts yet!
  if (edges.length === 0) {
    return null;
  }

  const handleNextPage = (e) => {
    fetchMore({
      variables: { after: endCursor }
    });
  };

  return (
    <div className='ThreadPage__Posts'>
      <PostList posts={posts} />
      {hasNextPage && (
        <MoreButton
          label='Load more posts...'
          onClick={handleNextPage}
        />
      )}
    </div>
  );
}

ThreadPostsWithData.propTypes = {
  postConnection: PropTypes.shape({
    edges: PropTypes.array.isRequired,
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool.isRequired,
      endCursor: PropTypes.string
    }).isRequired
  }).isRequired,

  fetchMore: PropTypes.func.isRequired
};

export default ThreadPostsWithData;
