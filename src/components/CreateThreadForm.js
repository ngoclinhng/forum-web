import React from 'react';
import Form from './ui/Form';
import FormTitle from './ui/FormTitle';
import FormAction from './ui/FormAction';
import TextField from './ui/TextField';
import Button from './ui/Button';

const Input = (props) => (
  <TextField
    fullWidth
    autoComplete='off'
    spellCheck={false}
    minRows={4}
    placeholder='Enter thread title'
    helperText='Thread title can’t be longer than 140 characters.'
    {...props}
  />
);

function CreateThreadForm() {
  return (
    <Form>
      <FormTitle>
        Create new thread
      </FormTitle>
      <Input />
      <FormAction>
        <Button color='secondary'>
          Cancel
        </Button>
        <Button color='primary'>
          Save
        </Button>
      </FormAction>
    </Form>
  );
}

export default CreateThreadForm;
