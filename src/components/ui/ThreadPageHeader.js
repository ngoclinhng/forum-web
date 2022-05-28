import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';

function ThreadPageHeader({ title, postCount, insertedAt }) {
  const dateString = formatDate(insertedAt, "MMMM do, yyyy 'at' HH:mm a");

  return (
    <div className='ThreadPage__Header'>
      <h6 className='ThreadPage__Title'>
        {title}
      </h6>
      <span className='ThreadPage__Subtitle'>
        {postCount} posts &bull; {dateString}
      </span>
    </div>
  );
}

ThreadPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  postCount: PropTypes.number.isRequired,
  insertedAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired
};

export default ThreadPageHeader;
