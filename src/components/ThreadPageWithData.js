import React from 'react';
import PropTypes from 'prop-types';
import Link from './ui/NextPageLink';
import ThreadList from './ThreadList';

function ThreadPageWithData({ threadConnection }) {
  const { edges, pageInfo } = threadConnection;
  const { hasNextPage, endCursor } = pageInfo;
  const threads = edges.map(({ node}) => node);

  return (
    <div>
      <ThreadList threads={threads} />
      {hasNextPage && (
        <Link to={`/new-threads/${endCursor}`} />
      )}
    </div>
  );
}

ThreadPageWithData.propTypes = {
  threadConnection: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.object.isRequired
    })).isRequired,
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool.isRequired,
      endCursor: PropTypes.string
    }).isRequired
  }).isRequired
};

export default ThreadPageWithData;
