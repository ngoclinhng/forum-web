import React from 'react';
import PropTypes from 'prop-types';
import StyledThreadDetails from './ui/ThreadPage';
import ThreadQuery from './ThreadQuery';
import ThreadWithData from './ThreadWithData';

function Thread({ id }) {
  return (
    <StyledThreadDetails>
      <ThreadQuery id={id}>
        {(thread) => (
          <ThreadWithData thread={thread} />
        )}
      </ThreadQuery>
    </StyledThreadDetails>
  );
}

Thread.propTypes = {
  id: PropTypes.string.isRequired
};

export default Thread;
