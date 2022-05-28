import { gql, useMutation } from '@apollo/client';
import { POST_DETAILS } from '../fragments';

const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        ...PostDetails
      }
    }
  }
  ${POST_DETAILS}
`;

export default function useCreatePost(options) {
  return useMutation(CREATE_POST, options);
}
