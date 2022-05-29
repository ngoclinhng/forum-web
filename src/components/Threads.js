import React from 'react';
import PropTypes from 'prop-types';
import Paper from './ui/Paper';
import ThreadsQuery from './ThreadsQuery';
import ThreadsWithData from './ThreadsWithData';

function Threads({ first, after }) {
  return (
    <Paper>
      <ThreadsQuery
        first={first}
        after={after}
      >
        {(threadConnection, { fetchMore }) => (
          <ThreadsWithData
            threadConnection={threadConnection}
            fetchMore={fetchMore}
          />
        )}
      </ThreadsQuery>
    </Paper>
  );
}

Threads.propTypes = {
  first: PropTypes.number.isRequired,
  after: PropTypes.string
};

export default Threads;
