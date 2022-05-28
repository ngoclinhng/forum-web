import React from 'react';
import PropTypes from 'prop-types';
import PostsQuery from './PostsQuery';
import ThreadPostsWithData from './ThreadPostsWithData';
import { NUM_POST_PER_PAGE } from './constants';

function ThreadPosts({ id }) {
  return (
    <PostsQuery
      threadId={id}
      first={NUM_POST_PER_PAGE}
    >
      {(postConnection, { fetchMore }) => (
        <ThreadPostsWithData
          postConnection={postConnection}
          fetchMore={fetchMore}
        />
      )}
    </PostsQuery>
  );
}

ThreadPosts.propTypes = {
  id: PropTypes.string.isRequired
};

export default ThreadPosts;
