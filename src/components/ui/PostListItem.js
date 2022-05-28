import React from 'react';
import './PostListItem.css';

export default function PostListItem() {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non. Vitae et leo duis ut diam!
            </p>
          </div>
          <span className='PostListItem__Timestamp'>
            February 17th, 2022 at 15:27 PM
          </span>
        </div>
      </div>
    </li>
  );
}
