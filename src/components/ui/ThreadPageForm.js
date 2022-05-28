import React from 'react';
import PropTypes from 'prop-types';

function ThreadPageForm() {
  return (
    <div className='ThreadPage__FormContainer'>
      <Form>
        <TextField
          fullWidth
          autoComplete='off'
          spellCheck={false}
          minRows={4}
          placeholder='Write a post...'
        />
        <Button color='primary' className='ThreadPage__FormButton'>
          Add post
        </Button>
      </Form>
    </div>
  );
}
