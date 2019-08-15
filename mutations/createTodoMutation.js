import { gql } from 'apollo-boost';

const CREATE_TODO_MUTATION = gql`
  mutation CreateTodo($input: TodoInput!) {
    createTodo(input: $input) {
      id
      title
      description
    }
  }
`;

export default CREATE_TODO_MUTATION;
