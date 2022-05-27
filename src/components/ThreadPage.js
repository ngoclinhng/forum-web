import React from 'react';
import PropTypes from 'prop-types';
import Paper from './ui/Paper';
import ThreadPageQuery from './ThreadPageQuery';
import ThreadPageWithData from './ThreadPageWithData';

function ThreadPage({ first, after }) {
  return (
    <Paper>
      <ThreadPageQuery
        first={first}
        after={after}
      >
        {(threadConnection) => (
          <ThreadPageWithData threadConnection={threadConnection} />
        )}
      </ThreadPageQuery>
    </Paper>
  );
}

ThreadPage.propTypes = {
  first: PropTypes.number.isRequired,
  after: PropTypes.string
};

export default ThreadPage;
