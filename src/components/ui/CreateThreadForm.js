import React from 'react';
import Form from './Form';
import FormTitle from './FormTitle';
import FormAction from './FormAction';
import TextField from './TextField';
import Button from './Button';

function CreateThreadForm() {
  return (
    <Form>
      <FormTitle>Create new thread</FormTitle>
      <TextField
        fullWidth
        autoComplete='off'
        spellCheck={false}
        minRows={4}
        placeholder='Enter thread title'
        helperText='Thread title can’t be longer than 140 characters.'
      />
      <FormAction>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </FormAction>
    </Form>
  );
}

export default CreateThreadForm;
