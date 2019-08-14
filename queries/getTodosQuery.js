import { gql } from 'apollo-boost';

const GET_TODOS_QUERY = gql`
  {
    allTodos {
      id
      title
      description
    }
  }
`;

export default GET_TODOS_QUERY;
