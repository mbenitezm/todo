import React from 'react';
import Todo from '../molecules/Todo';

const TodoList = () => (
  <div className="todoList">
    <Todo title="This is a title" description="this is a description" />
    <Todo title="This is a title" description="this is a description" />
    <Todo title="This is a title" description="this is a description" />
    <Todo title="This is a title" description="this is a description" />
    <Todo title="This is a title" description="this is a description" />
  </div>
);

export default TodoList;
