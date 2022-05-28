import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';
import './PostListItem.css';

function PostListItem({ content, insertedAt}) {
  const dateString = formatDate(insertedAt, "MMMM do, yyyy 'at' HH:mm a");
  return (
    <li className='PostListItem__Root'>
      <div className='PostListItem__Content'>
        <div className='PostListItem__Avatar'>?</div>
        <div className='PostListItem__PostContainer'>
          <div className='PostListItem__Post'>
            <h6 className='PostListItem__Who'>
              Anonymous
            </h6>
            <p className='PostListItem__What'>
              {content}
            </p>
          </div>
          <span className='PostListItem__Timestamp'>
            {dateString}
          </span>
        </div>
      </div>
    </li>
  );
}

PostListItem.propTypes = {
  content: PropTypes.string.isRequired,
  insertedAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired
};

export default PostListItem;
