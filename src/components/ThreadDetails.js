import React from 'react';
import PropTypes from 'prop-types';
import StyledThreadDetails from './ui/ThreadPage';
import ThreadQuery from './ThreadQuery';
import ThreadDetailsWithData from './ThreadDetailsWithData';

function ThreadDetails({ id }) {
  return (
    <StyledThreadDetails>
      <ThreadQuery id={id}>
        {(thread) => (
          <ThreadDetailsWithData thread={thread} />
        )}
      </ThreadQuery>
    </StyledThreadDetails>
  );
}

ThreadDetails.propTypes = {
  id: PropTypes.string.isRequired
};

export default ThreadDetails;
