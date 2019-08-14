import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

const NewTodoButton = ({ open }) => (
  <div className="newTodoButton">
    <Button text="New Todo" buttonColor="success" onClick={open} />

    <style jsx>
      {`
        .newTodoButton {
          padding: 20px;
        }
      `}
    </style>
  </div>
);

NewTodoButton.propTypes = {
  open: PropTypes.func.isRequired,
};

export default NewTodoButton;
