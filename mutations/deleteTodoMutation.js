import { gql } from 'apollo-boost';

const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

export default DELETE_TODO_MUTATION;
