import React from 'react';
import { useNavigate } from "react-router-dom";
import Paper from './ui/CreateThreadPaper';
import CreateThreadForm from './ui/CreateThreadForm';
import useCreateThread from './hooks/useCreateThread';

export default function CreateThread() {
  const [title, setTitle] = React.useState('');
  const navigate = useNavigate();

  // Apollo mutation
  const [createThread, { loading, error }] = useCreateThread();

  // Same as hitting the back button
  const handleCancel = (e) => {
    navigate(-1);
  };

  // Handle completed
  const goToThreadDetailsPage = ({ id }) => {
    navigate(`/threads/${id}`, { replace: true });
  };

  const handleSubmit = (e) => {
    createThread({
      variables: {
        input: { title }
      },
      onCompleted: ({ createThread: { thread }}) => {
        goToThreadDetailsPage(thread);
      }
    }).catch(err => {});;
  };

  return (
    <Paper>
      <CreateThreadForm
        loading={loading}
        error={error}
        title={title}
        onChange={setTitle}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </Paper>
  );
}
