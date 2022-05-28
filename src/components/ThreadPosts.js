import React from 'react';
import PropTypes from 'prop-types';
import PostsQuery from './PostsQuery';
import ThreadPostsWithData from './ThreadPostsWithData';

const NUM_POST_PER_PAGE = 10;

function ThreadPosts({ id }) {
  const [cursor, setCursor] = React.useState(null);
  return (
    <PostsQuery
      threadId={id}
      first={NUM_POST_PER_PAGE}
      after={cursor}
    >
      {(postConnection) => (
        <ThreadPostsWithData
          postConnection={postConnection}
          onNextPage={setCursor}
        />
      )}
    </PostsQuery>
  );
}

ThreadPosts.propTypes = {
  id: PropTypes.string.isRequired
};

export default ThreadPosts;
