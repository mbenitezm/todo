import React from 'react';
import { storiesOf } from '@storybook/react';
import NewTodo from '../molecules/NewTodo';

const moleculesStories = storiesOf('Molecules', module);

moleculesStories.add('NewTodo', () => (
  <NewTodo close={() => {}} values={{ title: 'title', description: 'description' }} />
));
