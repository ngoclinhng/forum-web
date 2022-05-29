import { InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

const cache = new InMemoryCache({
  typePolicies: {
    Thread: {
      fields: {
        posts: relayStylePagination()
      }
    },
    Query: {
      fields: {
        threads: relayStylePagination()
      }
    }
  }
});

export default cache;
