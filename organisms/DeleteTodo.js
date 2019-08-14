import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import DELETE_TODO_MUTATION from '../mutations/deleteTodoMutation';
import GET_TODOS_QUERY from '../queries/getTodosQuery';
import Button from '../atoms/Button';

const DeleteTodo = ({ todoId }) => {
  const updateCache = (cache) => {
    const { allTodos } = cache.readQuery({ query: GET_TODOS_QUERY });

    const updatedTodos = allTodos.reduce((todos, todo, index) => {
      // TODO Delete not implemented with faker so... I'll just simulate a delete.
      if (index !== 0) {
        todos.push(todo);
      }

      return todos;
    }, []);

    cache.writeQuery({
      query: GET_TODOS_QUERY,
      data: {
        allTodos: updatedTodos,
      },
    });
  };

  return (
    <Mutation mutation={DELETE_TODO_MUTATION} update={updateCache}>
      {deleteTodo => (
        <Button text="delete" onClick={() => deleteTodo({ variables: { id: todoId } })} />
      )}
    </Mutation>
  );
};

DeleteTodo.propTypes = {
  todoId: PropTypes.string.isRequired,
};

export default DeleteTodo;
