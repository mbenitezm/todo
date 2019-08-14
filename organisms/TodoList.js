import React from 'react';
import { Query } from 'react-apollo';
import Todo from './Todo';
import GET_TODOS_QUERY from '../queries/getTodosQuery';

const TodoList = () => (
  <div className="todoList">
    <Query query={GET_TODOS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error.message}</p>;

        return data.allTodos.map(({ id, title, description }) => (
          <Todo key={id} todoId={id} title={title} description={description} />
        ));
      }}
    </Query>
  </div>
);

export default TodoList;
