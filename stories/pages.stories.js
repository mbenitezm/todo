import React from 'react';
import { storiesOf } from '@storybook/react';
import Index from '../pages';

const pagesStories = storiesOf('Stories', module);

pagesStories.add('Index', () => <Index />);
