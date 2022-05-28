import React from 'react';
import PropTypes from 'prop-types';
import List from './ui/PostList';
import ListItem from './ui/PostListItem';

function PostList({ posts }) {
  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id} {...post} />
      ))}
    </List>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
