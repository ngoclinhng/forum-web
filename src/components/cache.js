import { THREAD_POST_COUNT } from './fragments';

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
