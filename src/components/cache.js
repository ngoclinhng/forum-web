import { THREAD_POST_COUNT } from './fragments';
import { POSTS_QUERY } from './PostsQuery';
import { THREADS_QUERY } from './ThreadsQuery';
import { NUM_POST_PER_PAGE, NUM_THREAD_PER_PAGE } from './constants';

// TODO: handle error, exception, etc...
export function incrementThreadPostCount(cache, threadId) {
  const postCountFragment = {
    id: `Thread:${threadId}`,
    fragment: THREAD_POST_COUNT
  };

  const { postCount } = cache.readFragment({
    ...postCountFragment
  });

  cache.writeFragment({
    ...postCountFragment,
    data: {
      postCount: postCount + 1
    }
  });
}

export function insertPost(cache, { threadId, post }) {
  const query = {
    query: POSTS_QUERY,
    variables: { threadId, first: NUM_POST_PER_PAGE}
  };

  const { node: threadNode } = cache.readQuery(query);
  const oldPosts = threadNode.posts;
  const oldEdges = oldPosts.edges;

  let newEdges = oldEdges;
  const found = oldEdges.some(({ node }) => node.id === post.id );

  if (!found) {
    newEdges = [constructPostEdge(post), ...oldEdges]
  }

  const newPosts = {
    ...oldPosts,
    edges: newEdges
  };

  cache.writeQuery({
    ...query,
    data: {
      node: {
        ...threadNode,
        posts: newPosts
      }
    }
  });
}

export function insertThread(cache, thread) {
  const query = {
    query: THREADS_QUERY,
    variables: { first: NUM_THREAD_PER_PAGE }
  };

  const data = cache.readQuery(query);
  if (!data) { return; }

  const oldEdges = data.threads.edges;
  const found = oldEdges.some(({ node }) => node.id === thread.id);
  let newEdges = oldEdges;

  if (!found) {
    newEdges = [constructThreadEdge(thread), ...oldEdges];
  }

  cache.writeQuery({
    ...query,
    data: {
      threads: {
        ...data.threads,
        edges: newEdges
      }
    }
  });
}

// Helpers.

function constructPostEdge(post) {
  return {
    __typename: 'PostEdge',
    node: post
  };
}

function constructThreadEdge(thread) {
  return {
    __typename: 'ThreadEdge',
    node: thread
  };
}
