import { createHttpLink } from '@apollo/client';
import { HTTP_ENDPOINT } from './endpoints';

const httpLink = createHttpLink({
  uri: HTTP_ENDPOINT
});

export default httpLink;
