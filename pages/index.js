import React, { useState } from 'react';
import Header from '../atoms/Header';
import TodoList from '../organisms/TodoList';
import NewTodoForm from '../organisms/NewTodoForm';
import NewTodoButton from '../molecules/NewTodoButton';

const Index = () => {
  const [formVisible, setFormVisible] = useState(false);

  const open = () => setFormVisible(true);
  const close = () => setFormVisible(false);

  return (
    <div className="index">
      <Header />

      <NewTodoButton open={open} />

      <NewTodoForm formVisible={formVisible} close={close} />

      <TodoList />
    </div>
  );
};

export default Index;
