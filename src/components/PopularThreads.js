import React from 'react';
import Paper from './ui/Paper';
import PopularThreadsQuery from './PopularThreadsQuery';
import ThreadList from './ThreadList';
import { NUM_POPULAR_THREAD } from './constants';

// We have to set `fetchPolicy` to `network-only` since we don't know
// which thread user choose to add new posts to. So when user nagivate
// back to this page, we have to re-fetch it from backend to make sure we
// get the correct results.
export default function PopularThreads() {
  return (
    <Paper>
      <PopularThreadsQuery
        count={NUM_POPULAR_THREAD}
        fetchPolicy='network-only'
      >
        {(threads) => (
          <ThreadList threads={threads} />
        )}
      </PopularThreadsQuery>
    </Paper>
  );
}
