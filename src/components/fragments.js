import { gql } from '@apollo/client';

export const THREAD_DETAILS = gql`
  fragment ThreadDetails on Thread {
    id
    title
    insertedAt
  }
`;

export const THREAD_POST_COUNT = gql`
  fragment ThreadPostCount on Thread {
    postCount
  }
`;

export const POST_DETAILS = gql`
  fragment PostDetails on Post {
    id
    content
    insertedAt
  }
`;
