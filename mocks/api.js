import GET_TODOS_QUERY from '../queries/getTodosQuery';

const mocks = [
  {
    request: {
      query: GET_TODOS_QUERY,
    },
    result: {
      data: {
        allTodos: [
          {
            id: 'MX123',
            title: 'Title 1',
            description: 'Reservamos',
          },
          {
            id: 'MX1234',
            title: 'Title 2',
            description: 'Reservamos',
          },
        ],
      },
    },
  },
];

export default mocks;
