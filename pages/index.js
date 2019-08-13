import React from 'react';
import Header from '../atoms/Header';
import TodoList from '../organisms/TodoList';
import NewTodoForm from '../organisms/NewTodoForm';
import NewTodoButton from '../molecules/NewTodoButton';

const Index = () => (
  <div className="index">
    <Header />

    <NewTodoButton />

    <NewTodoForm showForm />

    <TodoList />
  </div>
);

export default Index;
