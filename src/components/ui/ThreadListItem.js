import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';
import Overlay from './Overlay';
import './ThreadListItem.css';

function ThreadListItem({ id, title, postCount, insertedAt }) {
  const dateString = formatDate(insertedAt, "MMMM do, yyyy 'at' HH:mm a");

  return (
    <li className='ThreadListItem'>
      <Link
        role='button'
        to={`/threads/${id}`}
        className='ThreadListItem__link'
      >
        <h6 className='ThreadListItem__title'>
          {title}
        </h6>
        <span className='ThreadListItem__caption'>
          {postCount} posts &bull; {dateString}
        </span>
        <Overlay />
      </Link>
    </li>
  );
}

ThreadListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postCount: PropTypes.number.isRequired,
  insertedAt: PropTypes.string.isRequired
};

export default ThreadListItem;
