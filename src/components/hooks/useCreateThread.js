import { gql, useMutation } from '@apollo/client';
import { THREAD_DETAILS, THREAD_POST_COUNT } from '../fragments';

const CREATE_NEW_THREAD = gql`
  mutation CreateNewThread($input: CreateThreadInput!) {
    createThread(input: $input) {
      thread {
        ...ThreadDetails
        ...ThreadPostCount
      }
    }
  }
  ${THREAD_DETAILS}
  ${THREAD_POST_COUNT}
`;

export default function useCreateThread(options) {
  return useMutation(CREATE_NEW_THREAD, options);
}
