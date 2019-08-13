import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../atoms/Button';
import Header from '../atoms/Header';
import Input from '../atoms/Input';
import Text from '../atoms/Text';

const atomStories = storiesOf('Atoms', module);

atomStories.add('Button default', () => <Button text="Add" onClick={() => {}} />);
atomStories.add('Button success', () => (
  <Button text="Add" buttonType="success" onClick={() => {}} />
));
atomStories.add('Header', () => <Header />);
atomStories.add('Input', () => <Input inputId="test" inputName="test" />);
atomStories.add('Text', () => <Text text="this is a test" />);
