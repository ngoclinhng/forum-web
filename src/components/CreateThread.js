import React from 'react';
import Paper from './ui/CreateThreadPaper';
import CreateThreadForm from './ui/CreateThreadForm';

export default function CreateThread() {
  const [title, setTitle] = React.useState('');

  const handleCancel = (e) => {
    console.log('Handle cancle');
  };

  const handleSubmit = (e) => {
    console.log('handle submit');
  };

  return (
    <Paper>
      <CreateThreadForm
        title={title}
        onChange={setTitle}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </Paper>
  );
}
