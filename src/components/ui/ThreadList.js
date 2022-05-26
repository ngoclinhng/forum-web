import React from 'react';
import ThreadListItem from './ThreadListItem';

const threads = [
  {
    id: '1',
    title: 'Thread 1',
    postCount: 0
  }
];

function ThreadList() {
  return (
    <div className='thread_list'>
      {threads.map((thread) => (
        <ThreadListItem key={thread.id} {...thread} />
      ))}
    </div>
  );
}

export default ThreadList;
