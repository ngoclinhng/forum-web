import React from 'react';
import PropTypes from 'prop-types';
import Form from './ui/CreatePostForm';
import useCreatePost from './hooks/useCreatePost';
import { incrementThreadPostCount } from './cache';

function CreatePostForm({ threadId }) {
  const [data, setData] = React.useState({ content: '' });

  const resetData = () => setData({ content: '' });

  const [createPost, { loading, error }] = useCreatePost({
    update: (cache, { data: { createPost: { post }}}) => {
      console.log('update cache: ', post);
      incrementThreadPostCount(cache, threadId);
    },
    onCompleted: ({ createPost: { post }}) => {
      console.log('completed: ', post);
      resetData();
    }
  });

  const handleSubmit = () => {
    createPost({
      variables: {
        input: { threadId, content: data.content }
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
