import React from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';

function ThreadPostsWithData({ postConnection, onNextPage }) {
  const { edges, pageInfo } = postConnection;
  const { hasNextPage, endCursor } = pageInfo;
  const posts = edges.map(({ node }) => node );

  // No posts yet!
  if (edges.length === 0) {
    return null;
  }

  const handleNextPage = (e) => {
    if (onNextPage) {
      onNextPage(endCursor);
    }
  };

  return (
    <div className='ThreadPage__Posts'>
      <PostList posts={posts} />
      {hasNextPage && (
        <button onClick={handleNextPage}>
          More...
        </button>
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
  }).isRequired
};

export default ThreadPostsWithData;
