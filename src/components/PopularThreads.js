import React from 'react';
import Paper from './ui/Paper';
import PopularThreadsQuery from './PopularThreadsQuery';
import ThreadList from './ThreadList';

export default function PopularThreads() {
  return (
    <Paper>
      <PopularThreadsQuery
        count={10}
      >
        {(threads) => (
          <ThreadList threads={threads} />
        )}
      </PopularThreadsQuery>
    </Paper>
  );
}
