import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoList from '../organisms/TodoList';
import NewTodoForm from '../organisms/NewTodoForm';
import Todo from '../organisms/Todo';

const organismStories = storiesOf('Organisms', module);

organismStories.add('TodoList', () => <TodoList />);
organismStories.add('NewTodoForm', () => <NewTodoForm showForm />);
organismStories.add('Todo', () => (
  <Todo title="This is the title" description="This is the description" onClick={() => {}} />
));
