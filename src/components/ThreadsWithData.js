import React from 'react';
import PropTypes from 'prop-types';
import MoreButton from './ui/MoreButton';
import ThreadList from './ThreadList';

function ThreadsWithData({ threadConnection, fetchMore }) {
  const { edges, pageInfo } = threadConnection;
  const { hasNextPage, endCursor } = pageInfo;
  const threads = edges.map(({ node}) => node);

  const handleNextPage = (e) => {
    fetchMore({
      variables: { after: endCursor }
    });
  };

  return (
    <div>
      <ThreadList threads={threads} />
      {hasNextPage && (
        <MoreButton
          label='Load more thread...'
          onClick={handleNextPage}
        />
      )}
    </div>
  );
}

ThreadsWithData.propTypes = {
  threadConnection: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object.isRequired
    })).isRequired,
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool.isRequired,
      endCursor: PropTypes.string
    }).isRequired
  }).isRequired,
  fetchMore: PropTypes.func.isRequired
};

export default ThreadsWithData;
