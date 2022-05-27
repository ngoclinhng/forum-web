import React from 'react';
import PropTypes from 'prop-types';
import List from './ui/ThreadList';
import ListItem from './ui/ThreadListItem';

function ThreadList({ threads }) {
  return (
    <List>
      {threads.map((thread) => (
        <ListItem key={thread.id} {...thread} />
      ))}
    </List>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.array.isRequired
};

export default ThreadList;
