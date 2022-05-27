import React from 'react';
import Paper from './ui/Paper';
import TextField from './ui/TextField';

export default function CreateThread() {
  return (
    <Paper>
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
