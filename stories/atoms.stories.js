import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../atoms/Button';
import Header from '../atoms/Header';
import Input from '../atoms/Input';
import Text from '../atoms/Text';

const atomStories = storiesOf('Atoms', module);

atomStories.add('Button default', () => <Button text="Add" onClick={() => {}} />);
atomStories.add('Button success', () => (
  <Button text="Add" buttonColor="success" onClick={() => {}} />
));
atomStories.add('Header', () => <Header />);
atomStories.add('Input', () => (
  <Input field={{ name: 'test' }} form={{ touched: 'yes', errors: 'none' }} />
));
atomStories.add('Text', () => <Text text="this is a test" />);
