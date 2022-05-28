import { THREAD_POST_COUNT } from './fragments';
import { POSTS_QUERY } from './PostsQuery';
import { NUM_POST_PER_PAGE } from './constants';

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
  const { node: threadNode } = cache.readQuery({
    query: POSTS_QUERY,
    variables: { threadId, first: NUM_POST_PER_PAGE}
  });

  const oldPosts = threadNode.posts;
  const oldEdges = oldPosts.edges;

  let newEdges = oldEdges;
  const found = oldEdges.some(({ node }) => node.id === post.id );

  if (!found) {
    newEdges = [constructPostEdgeFromPost(post), ...oldEdges]
  }

  const newPosts = {
    ...oldPosts,
    edges: newEdges
  };

  cache.writeQuery({
    query: POSTS_QUERY,
    variables: { threadId, first: NUM_POST_PER_PAGE},
    data: {
      node: {
        ...threadNode,
        posts: newPosts
      }
    }
  });
}

// Helpers.

function constructPostEdgeFromPost(post) {
  return {
    __typename: 'PostEdge',
    node: post
  };
}
