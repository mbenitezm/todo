import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoList from '../organisms/TodoList';
import NewTodoForm from '../organisms/NewTodoForm';

const organismStories = storiesOf('Organisms', module);

organismStories.add('TodoList', () => <TodoList />);
organismStories.add('NewTodoForm', () => <NewTodoForm showForm />);
