import { ApolloClient } from '@apollo/client';
import link from './httpLink';
import cache from './cache';

const client = new ApolloClient({
  link: link,
  cache: cache
});

export default client;
