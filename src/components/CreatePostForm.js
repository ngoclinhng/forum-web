import React from 'react';
import PropTypes from 'prop-types';
import Form from './ui/CreatePostForm';
import useCreatePost from './hooks/useCreatePost';
import { incrementThreadPostCount, insertPost } from './cache';
import { POSTS_QUERY } from './PostsQuery';

function CreatePostForm({ threadId }) {
  const [data, setData] = React.useState({ content: '' });

  const resetData = () => setData({ content: '' });

  const [createPost, { loading, error }] = useCreatePost({
    update: (cache, { data: { createPost: { post }}}) => {
      incrementThreadPostCount(cache, threadId);
      insertPost(cache, { threadId, post });
    },
    onCompleted: ({ createPost: { post }}) => {
      resetData();
    }
  });

  const handleSubmit = () => {
    createPost({
      variables: {
        input: { threadId, content: data.content }
      },
      optimisticResponse: {
        createPost: {
          __typename: 'CreatePostPayload',
          post: {
            __typename: 'Post',
            id: 'new_post_id',
            content: data.content,
            insertedAt: (new Date()).toISOString()
          }
        }
      }
    }).catch((err) => {});  // we've already handled error
  };

  return (
    <div className='ThreadPage__FormContainer'>
      <Form
        data={data}
        onChange={setData}
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    </div>
  );
}

CreatePostForm.propTypes = {
  threadId: PropTypes.string.isRequired
};

export default CreatePostForm;
