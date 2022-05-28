import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import FormTitle from './FormTitle';
import FormAction from './FormAction';
import TextField from './TextField';
import Button from './Button';
import Error from './Error';

const TITLE_MAX_LENGHT = 140;

function CreateThreadForm({
  title,
  onChange,
  onSubmit,
  onCancel,
  loading,
  error
}) {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const isTitleTooLong = title.length > TITLE_MAX_LENGHT;

  return (
    <Form>
      <FormTitle>
        Create new thread
      </FormTitle>

      {error && <Error error={error} />}

      <TextField
        fullWidth
        autoComplete='off'
        spellCheck={false}
        minRows={4}
        placeholder='Enter thread title'
        helperText='Thread title can’t be longer than 140 characters.'
        value={title}
        onChange={handleInputChange}
      />

      <FormAction>
        <Button
          color='secondary'
          disabled={loading}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          color='primary'
          disabled={loading || !title || isTitleTooLong}
          onClick={onSubmit}
        >
          {loading ? 'Saving...' : 'Save'}
        </Button>
      </FormAction>
    </Form>
  );
}

CreateThreadForm.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object
};

export default CreateThreadForm;
