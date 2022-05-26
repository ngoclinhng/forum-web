import React from 'react';
import PropTypes from 'prop-types';

function ThreadListItem({ id, title, postCount }) {
  return (
    <div className='thread_list_item'>
      <h6 className='thread_list_item__title'>
        <a href='' className='thread_list_item__link'>
          {title}
        </a>
      </h6>
      <span className='thread_list_item__caption'>
        {postCount} posts &bull; date_time
      </span>
    </div>
  );
}

ThreadListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postCount: PropTypes.number.isRequired
};

export default ThreadListItem;
