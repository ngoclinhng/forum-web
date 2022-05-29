import React from 'react';
import PropTypes from 'prop-types';
import ThreadPageHeader from './ui/ThreadPageHeader';
import CreatePostForm from './CreatePostForm';
import ThreadPosts from './ThreadPosts';

function ThreadWithData({ thread }) {
  const { id, title, postCount, insertedAt } = thread;

  return (
    <React.Fragment>
      <ThreadPageHeader
        title={title}
        postCount={postCount}
        insertedAt={insertedAt}
      />
      <CreatePostForm threadId={id} />
      <ThreadPosts id={id} />
    </React.Fragment>
  );
}

ThreadWithData.propTypes = {
  thread: PropTypes.shape({
    __typename: PropTypes.oneOf(['Thread']).isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    postCount: PropTypes.number.isRequired,
    insertedAt: PropTypes.string.isRequired
  }).isRequired
};

export default ThreadWithData;
