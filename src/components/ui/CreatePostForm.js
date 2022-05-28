import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import TextField from './TextField';
import Button from './Button';
import './CreatePostForm.css';

function CreatePostForm({ data, onChange, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (onChange) {
      onChange({...data, [name]: value});
    }
  };

  return (
    <Form>
      <TextField
        fullWidth
        autoComplete='off'
        spellCheck={false}
        minRows={4}
        placeholder='Write a post...'
        name='content'
        value={data.content}
        onChange={handleChange}
      />
      <Button
        color='primary'
        className='CreatePostForm__Button'
        onClick={onSubmit}
      >
        Add post
      </Button>
    </Form>
  );
}

CreatePostForm.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string
  }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

CreatePostForm.defaultProps = {
  data: {}
};

export default CreatePostForm;
