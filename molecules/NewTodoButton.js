import React from 'react';
import Button from '../atoms/Button';

const NewTodoButton = () => (
  <div className="newTodoButton">
    <Button text="New Todo" buttonType="success" />

    <style jsx>
      {`
        .newTodoButton {
          padding: 20px;
        }
      `}
    </style>
  </div>
);

export default NewTodoButton;
