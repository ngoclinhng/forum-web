import React from 'react';
import Container from './Container';
import Paper from './Paper';
import PostList from './PostList';
import PostListItem from './PostListItem';
import ThreadPageHeader from './ThreadPageHeader';
import CreatePostForm from './CreatePostForm';
import './ThreadPage.css';

export default function ThreadPage() {
  return (
    <Container>
      <Paper>
        <ThreadPageHeader
          title='Some thread'
          postCount={4}
          insertedAt={ new Date()}
        />

        <div className='ThreadPage__FormContainer'>
          <CreatePostForm />
        </div>

        <div className='ThreadPage__Posts'>
          <PostList>
            <PostListItem />
            <PostListItem />
            <PostListItem />
          </PostList>
        </div>
      </Paper>
    </Container>
  );
}
