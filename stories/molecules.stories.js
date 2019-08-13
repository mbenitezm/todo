import React from 'react';
import { storiesOf } from '@storybook/react';
import Todo from '../molecules/Todo';
import NewTodo from '../molecules/NewTodo';

const moleculesStories = storiesOf('Molecules', module);

moleculesStories.add('Todo', () => (
  <Todo title="This is the title" description="This is the description" onClick={() => {}} />
));
moleculesStories.add('NewTodo', () => <NewTodo />);
