import React from 'react';
import Container from './Container';
import Paper from './Paper';
import Form from './Form';
import TextField from './TextField';
import Button from './Button';
import PostList from './PostList';
import PostListItem from './PostListItem';
import './ThreadPage.css';

export default function ThreadPage() {
  return (
    <Container>
      <Paper>
        <div className='ThreadPage__Header'>
          <h6 className='ThreadPage__Title'>
            Some thread title
          </h6>
          <span className='ThreadPage__Subtitle'>
            3 posts posts &bull; May 25th, 2022 at 16:46 PM
          </span>
        </div>

        <div className='ThreadPage__FormContainer'>
          <Form>
            <TextField
              fullWidth
              autoComplete='off'
              spellCheck={false}
              minRows={4}
              placeholder='Write a post...'
            />
            <Button color='primary' className='ThreadPage__FormButton'>
              Add post
            </Button>
          </Form>
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
