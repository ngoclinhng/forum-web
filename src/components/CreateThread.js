import React from 'react';
import Paper from './ui/Paper';
import TextField from './ui/TextField';
import Button from './ui/Button';

export default function CreateThread() {
  return (
    <Paper>
      <Button color='secondary'>Secondary button</Button>
      <div style={{margin: 20}} />
      <Button color='primary'>Primary button</Button>
      <div style={{margin: 20}} />
      <Button color='primary' disabled>Disabled button</Button>
      <div style={{margin: 20}} />
      <TextField
        fullWidth
        autoComplete='off'
        spellCheck='false'
        minRows={4}
        placeholder='What this thread is all about?'
        helperText='Mattis molestie a, iaculis at erat pellentesque.'
      />

      <div style={{margin: 20}} />

      <TextField
        error
        fullWidth
        autoComplete='off'
        spellCheck='false'
        minRows={4}
        placeholder='What this thread is all about?'
        helperText='Mattis molestie a, iaculis at erat pellentesque.'
      />

      <div style={{margin: 20}} />

      <TextField
        autoComplete='off'
        spellCheck='false'
        minRows={4}
        placeholder='What this thread is all about?'
        helperText='Mattis molestie a, iaculis at erat pellentesque.'
      />
    </Paper>
  );
}
